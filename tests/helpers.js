import test from 'tape'
import * as helpers from '../app/utils/helpers'

test('capitalise', t => {
  const exp = 'Hello World, How Are You?'
  const act = helpers.capitalise('hello world, how are you?')

  t.equal(exp, act, 'Capitalise should capitalise')
  t.end()
})

test('hyphenate', t => {
  const exp = 'The-name-of-my-Component'
  const act = helpers.hyphenate('The name of my Component')

  t.equal(exp, act, 'Hyphenate should hyphenate')
  t.end()
})
