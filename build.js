const fs = require('fs')
const glob = require('globby')
const args = require('minimist')(process.argv.splice(2))
const dir = args.dir || '.'

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
