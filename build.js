const fs = require('fs-extra')
const glob = require('globby')
const args = require('minimist')(process.argv.splice(2))

const compDir = args.components
const storyDir = args.stories

//    getFileNameFromPath : string -> string
const getFileNameFromPath = () => {
  var memo = {}

  return path => {
    if (!(path in memo))
      memo[path] = path.split('/').pop().split('.').shift()

    return memo[path]
  }
}()

//    getComponent : string -> promise
const getComponent = path => {
  return new Promise((res, rej) => {
    const componentsPath = `copied-components/${path}`

    fs.copy(path, componentsPath, (err) => {
      if (err) rej(err)

      res(componentsPath)
    })
  })
}

//    getStory : string -> promise
const getStory = path => {
  return new Promise((res, rej) => {
    const storyName = getFileNameFromPath(path)
    const story = require(`${__dirname}/${path}`)

    return (story) ?
      res(`${storyName} = { ${story} }`) :
      rej(new Error('No story found'))
  })
}

const getComponents = glob(`${compDir}**/*.js*`).then(paths => {
  Promise.all(paths.map(path => getComponent(path)))
    .then(paths => {
      fs.writeFile('./app/components.js', `
        ${paths.map(path => {
          return `import ${getFileNameFromPath(path)} from '${path}'`
        }).join('\n\t\t')}
        const components = {
          ${paths.map(path => getFileNameFromPath(path))}
        }
        export default components`)
    }).catch(err => console.log(err))
})

const getStories = glob([`${storyDir}**/*.md`]).then(paths => {
  Promise.all(paths.map(path => getStory(path)))
    .then(stories => {
      fs.writeFile('./app/stories.js', `
        const stories = ${JSON.stringify(stories)}
        export default stories`)
    }).catch(err => console.log(err))
})
