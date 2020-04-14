import isString from '../isString'

describe('isString unit testing', () => {
  test('isString("components-extra") returns true', () => {
    expect(isString('components-extra')).toBe(true)
  })

  test('isString(42) returns false', () => {
    expect(isString(42)).toBe(false)
  })

  test('isString(true) returns false', () => {
    expect(isString(true)).toBe(false)
  })

  test('isString("") returns false', () => {
    expect(isString('')).toBe(false)
  })
})
