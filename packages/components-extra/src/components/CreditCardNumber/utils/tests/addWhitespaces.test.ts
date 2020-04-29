import addWhitespaces from '../addWhitespaces'

const ONE_DIGIT = '4'
const THREE_DIGIT = '123'
const FOUR_DIGITS = '1234'
const FIVE_DIGITS = '12345'
const EIGHT_DIGITS = '12345678'
const NINE_DIGITS = '123456789'
const ELEVEN_DIGITS = '12345678912'
const SIXTEEN_DIGITS = '1234567891234567'
const TOO_LONG_DIGITS = '12345678912345678'

const FOUR_DIGITS_SEPARATED = '1234 '
const FIVE_DIGITS_SEPARATED = '1234 5'
const EIGHT_DIGITS_SEPARATED = '1234 5678 '
const NINE_DIGITS_SEPARATED = '1234 5678 9'
const ELEVEN_DIGITS_SEPARATED = '1234 5678 912'
const SIXTEEN_DIGITS_SEPARATED = '1234 5678 9123 4567'
const TOO_LONG_DIGITS_CUT = '1234 5678 9123 4567'

test('addWhitespaces(ONE_DIGIT) returns ONE_DIGIT', () => {
  expect(addWhitespaces(ONE_DIGIT)).toEqual(ONE_DIGIT)
})

test('addWhitespaces(THREE_DIGIT) returns THREE_DIGIT', () => {
  expect(addWhitespaces(THREE_DIGIT)).toEqual(THREE_DIGIT)
})

test('addWhitespaces(FOUR_DIGITS) returns FOUR_DIGITS_SEPARATED', () => {
  expect(addWhitespaces(FOUR_DIGITS)).toEqual(FOUR_DIGITS_SEPARATED)
})

test('addWhitespaces(FIVE_DIGITS) returns FIVE_DIGITS_SEPARATED', () => {
  expect(addWhitespaces(FIVE_DIGITS)).toEqual(FIVE_DIGITS_SEPARATED)
})

test('addWhitespaces(EIGHT_DIGITS) returns EIGHT_DIGITS_SEPARATED', () => {
  expect(addWhitespaces(EIGHT_DIGITS)).toEqual(EIGHT_DIGITS_SEPARATED)
})

test('addWhitespaces(NINE_DIGITS) returns NINE_DIGITS_SEPARATED', () => {
  expect(addWhitespaces(NINE_DIGITS)).toEqual(NINE_DIGITS_SEPARATED)
})

test('addWhitespaces(ELEVEN_DIGITS) returns ELEVEN_DIGITS_SEPARATED', () => {
  expect(addWhitespaces(ELEVEN_DIGITS)).toEqual(ELEVEN_DIGITS_SEPARATED)
})

test('addWhitespaces(SIXTEEN_DIGITS) returns SIXTEEN_DIGITS', () => {
  expect(addWhitespaces(SIXTEEN_DIGITS)).toEqual(SIXTEEN_DIGITS_SEPARATED)
})

test('addWhitespaces(TOO_LONG_DIGITS) returns TOO_LONG_DIGITS_CUT', () => {
  expect(addWhitespaces(TOO_LONG_DIGITS)).toEqual(TOO_LONG_DIGITS_CUT)
})
