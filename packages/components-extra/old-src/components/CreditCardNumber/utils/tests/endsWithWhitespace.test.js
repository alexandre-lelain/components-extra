import endsWithWhitespace from '../endsWithWhitespace'

const WITH_WHITESPACE = 'components-extra '
const WITHOUT_WHITESPACE = 'components-extra'

test('endsWithWhitespace(WITH_WHITESPACE) should return true', () => {
  expect(endsWithWhitespace(WITH_WHITESPACE)).toEqual(true)
})

test('endsWithWhitespace(WITHOUT_WHITESPACE) should return true', () => {
  expect(endsWithWhitespace(WITHOUT_WHITESPACE)).toEqual(false)
})
