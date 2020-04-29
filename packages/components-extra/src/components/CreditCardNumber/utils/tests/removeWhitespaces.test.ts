import removeWhitespaces from '../removeWhitespaces'

const VALUE_WITH_WHITESPACES = ' compon ent s- e xtra '
const VALUE_WITH_ONE_WHITESPACES_AT_START = ' components-extra'
const VALUE_WITH_ONE_WHITESPACES_AT_END = ' components-extra'
const VALUE_WITH_ONE_WHITESPACES_IN_MIDDLE = 'components - extra'

const VALUE_WITH_NO_WHITESPACES = 'components-extra'

test('removeWhitespaces(VALUE_WITH_WHITESPACES) returns VALUE_WITH_NO_WHITESPACES', () => {
  expect(removeWhitespaces(VALUE_WITH_WHITESPACES)).toEqual(VALUE_WITH_NO_WHITESPACES)
})

test('removeWhitespaces(VALUE_WITH_ONE_WHITESPACES_AT_START) returns VALUE_WITH_NO_WHITESPACES', () => {
  expect(removeWhitespaces(VALUE_WITH_ONE_WHITESPACES_AT_START)).toEqual(VALUE_WITH_NO_WHITESPACES)
})

test('removeWhitespaces(VALUE_WITH_ONE_WHITESPACES_AT_END) returns VALUE_WITH_NO_WHITESPACES', () => {
  expect(removeWhitespaces(VALUE_WITH_ONE_WHITESPACES_AT_END)).toEqual(VALUE_WITH_NO_WHITESPACES)
})

test('removeWhitespaces(VALUE_WITH_ONE_WHITESPACES_IN_MIDDLE) returns VALUE_WITH_NO_WHITESPACES', () => {
  expect(removeWhitespaces(VALUE_WITH_ONE_WHITESPACES_IN_MIDDLE)).toEqual(VALUE_WITH_NO_WHITESPACES)
})
