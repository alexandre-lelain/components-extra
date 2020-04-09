import isEmpty from '../isEmpty'

describe('isEmpty unit testing', () => {
  test('isEmpty([]) should return true', () => {
    expect(isEmpty([])).toBe(true)
  })

  test('isEmpty({}) should return true', () => {
    expect(isEmpty({})).toBe(true)
  })

  test('isEmpty(["components", "extra"]) should return false', () => {
    expect(isEmpty(['components', 'extra'])).toBe(false)
  })

  test('isEmpty({ "components": "extra" }) should return false', () => {
    expect(isEmpty({ components: 'extra' })).toBe(false)
  })
})
