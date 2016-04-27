//    capitalise : string -> string
const capitalise = string => {
  return string.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }).join(' ')
}

//    hyphenate : string -> string
const hyphenate = string => {
  return string.split(' ').reduce((acc, word) => `${acc}-${word}`)
}

//    first : object -> object
const first = obj => {
  return obj[Object.keys(obj)[0]]
}

const createFunc = (propTypes, props) => {
  const propTypeKeys = Object.keys(propTypes)
  const propKeys = Object.keys(props)

  return propTypeKeys.reduce((acc, key, i) => {
    (propKeys.includes(key) && propTypes[key] === 'func') ?
      acc[key] = new Function(props[key]) :
      acc[key] = props[key]

    return acc
  }, {})
}

export { capitalise, hyphenate, first, createFunc }