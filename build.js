const _ = require('lodash')
const fs = require('fs-extra')
const glob = require('globby')
const camelcase = require('camelcase')
const args = require('minimist')(process.argv.splice(2))

const compDir = args.components
const storyDir = args.stories
const styleFile = args.styles

//    getFileNameFromPath : string -> string
const getFileNameFromPath = () => {
  var memo = {}

  return path => {
    if (!(path in memo))
      memo[path] = path.split('/').pop().split('.').shift()

    return memo[path]
  }
}()

//    cloneComponent : string -> promise
const cloneComponent = path => {
  return new Promise((res, rej) => {
    const clonePath = `clones/${path}`

    fs.copy(path, clonePath, (err) => {
      if (err) rej(err)

      res(clonePath)
    })
  })
}

const cloneFile = file => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) return err

    fs.outputFile('clones/styles/cloned-styles.css', data, err => {
      if (err) return err
    })
  })
}

const getSpec = path => new Promise((res, rej) => {
  const spec = require(`${__dirname}/${path}`)

  return (spec) ? res(spec) : rej(new Error('No spec'))
})

const getNote = path => new Promise((res, rej) => {
  fs.readFile(path, 'utf8', (err, md) => {
    if (err) rej(err)

    const note = {}
    const component = getFileNameFromPath(path)

    note[component] = md
    res(note)
  })
})

const getComponents = glob(`${compDir}**/*.js*`).then(paths => {
  Promise.all(paths.map(path => cloneComponent(path)))
    .then(paths => {
      fs.writeFile(`${__dirname}/app/components.js`, `
        ${paths.map(path => {
          return `import ${getFileNameFromPath(path)} from '${path}'`
        }).join('\n\t\t')}
        const components = {
          ${paths.map(path => getFileNameFromPath(path))}
        }
        export default components`)
    }).catch(err => console.log(err))
})

const getStyles = () => {
  cloneFile(styleFile)
}

const getSpecs = glob(`${storyDir}**/*.js`).then(paths => {
  Promise.all(paths.map(path => getSpec(path)))
    .then(specs => {
      fs.writeFile(`${__dirname}/app/specs.js`, `
        const specs = ${JSON.stringify(specs)}
        export default specs
      `)
    })
})

const getNotes = glob(`${storyDir}**/*.md`).then(paths => {
  Promise.all(paths.map(path => getNote(path)))
    .then(notes => {
      fs.writeFile(`${__dirname}/app/notes.js`, `
        const notes = ${JSON.stringify(notes)}
        export default notes
      `)
    })
})

getStyles()
