import isBoolean from '../isBoolean'

describe('isBoolean unit testing', () => {
  test('isBoolean(true) returns true', () => {
    expect(isBoolean(true)).toBe(true)
  })

  test('isBoolean(false) returns true', () => {
    expect(isBoolean(false)).toBe(true)
  })

  test('isBoolean("components-extra") returns false', () => {
    expect(isBoolean('components-extra')).toBe(false)
  })

  test('isBoolean(null) returns false', () => {
    expect(isBoolean(null)).toBe(false)
  })

  test('isBoolean(undefined) returns false', () => {
    expect(isBoolean(undefined)).toBe(false)
  })
})
