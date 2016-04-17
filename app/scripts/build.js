const fs = require('fs')
const file = require('file')
const args = require('minimist')(process.argv.splice(2))

//    flatten : array -> array
const flatten = a => {
  return a.reduce((p, c) => {
    if (Array.isArray(c)) c = flatten(c)

    return p.concat(c)
  }, [])
}

//    getDirs : string -> promise
const getDirs = start => {
  return new Promise((res, rej) => {
    file.walk(start, (err, dirPath, dirs) => {
      if (err) rej(err)

      res(dirs)
    })
  })
}

//    getFiles : string -> promise
const getFiles = start => {
  return new Promise((res, rej) => {
    file.walk(start, (err, dirPath, dirs, files) => {
      if (err) rej(err)

      res(files)
    })
  })
}
