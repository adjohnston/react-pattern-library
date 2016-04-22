const fs = require('fs')
const glob = require('globby')
const yamlFront = require('yaml-front-matter')
const args = require('minimist')(process.argv.splice(2))

const dir = args.dir || '.'
const storyDir = args.stories || ''

const _getFileNameFromPath = () => {
  var memo = {}

  return (path) => {
    if (!(path in memo))
      memo[path] = path.split('/').pop().split('.').shift()

    return memo[path]
  }
}()

const getComponents = glob([`${dir}/**/*.js*`]).then(paths => {
  fs.writeFile('./app/components.js', `
    ${paths.map(path => {
      return `import ${_getFileNameFromPath(path)} from '${path}'`
    }).join('\n\t\t')}

    const components = {
      ${paths.map(path => _getFileNameFromPath(path))}
    }

    export default components
  `)
})

const getStories = glob([`${dir}/${storyDir}/**/*.md`]).then(paths => {
  var stories = []

  paths.forEach(path => {
    fs.readFile(path, 'utf8', (err, md) => {
      if (err) throw err

      stories.push(yamlFront.loadFront(md))
    })
  })

  fs.writeFile('./app/fixtures.js', `
    const fixtures = {
      ${stories.forEach(story => {
        return story
      })}
    }
  `)
})
