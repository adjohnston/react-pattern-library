const capitalise = (string) => {
  return string.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }).join(' ')
}

//    hypenate : string -> string
const hyphenate = (string) => {
  return string.split(' ').reduce((acc, word) => `${acc}-${word}`)
}

export { capitalise, hyphenate }
