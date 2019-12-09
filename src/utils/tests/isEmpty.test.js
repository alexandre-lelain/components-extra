import isEmpty from '../isEmpty'

describe('isEmpty unit testing', () => {
  test('isEmpty([]) should return true', () => {
    expect(isEmpty([])).toBeTruthy()
  })

  test('isEmpty({}) should return true', () => {
    expect(isEmpty({})).toBeTruthy()
  })

  test('isEmpty(["components", "extra"]) should return false', () => {
    expect(isEmpty(['components', 'extra'])).toBeFalsy()
  })

  test('isEmpty({ "components": "extra" }) should return false', () => {
    expect(isEmpty({ components: 'extra' })).toBeFalsy()
  })
})
