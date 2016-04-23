const fs = require('fs-extra')
const glob = require('globby')
const yamlFront = require('yaml-front-matter')
const args = require('minimist')(process.argv.splice(2))

const compDir = args.components || '.'
const storyDir = args.stories || ''

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
    fs.readFile(path, 'utf8', (err, md) => {
      if (err) rej(err)

      var json = yamlFront.loadFront(md)

      delete json.__content
      res(JSON.stringify(json).slice(1, -1))
    })
  })
}

const getComponents = glob(`${compDir}/**/*.js*`).then(paths => {
  Promise.all(paths.map(path => getComponent(path)))
    .then((paths) => {
      debugger
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

const getStories = glob([`${compDir}/${storyDir}/**/*.md`]).then(paths => {
  Promise.all(paths.map(path => getStory(path)))
    .then(stories => {
      fs.writeFile('./app/fixtures.js', `
        const fixtures = {
          ${stories.map(story => story)}
        }
        export default fixtures`)
    }).catch(err => console.log(err))
})
