import merge, { isObject } from '../merge'

const OBJ_A = {
  a: {
    foo: 'hello',
  },
  b: {
    bar: 'world',
  },
}

const OBJ_B = {
  a: {
    bar: 'world',
  },
  b: {
    foo: 'hello',
  },
}

const OBJ_A_B = {
  a: {
    bar: 'world',
    foo: 'hello',
  },
  b: {
    bar: 'world',
    foo: 'hello',
  },
}

describe('merge() unit testing', () => {
  test('merge(target) should return target if source is undefined', () => {
    expect(merge(OBJ_A)).toStrictEqual(OBJ_A)
  })

  test('merge(target, source) should merge recrusively two objects', () => {
    expect(merge(OBJ_A, OBJ_B)).toStrictEqual(OBJ_A_B)
  })

  test('isObject(42) should return false', () => {
    expect(isObject(42)).toBeFalsy()
  })

  test('isObject({}) should return true', () => {
    expect(isObject({})).toBeTruthy()
  })

  test('isObject(OBJ_A) should return true', () => {
    expect(isObject(OBJ_A)).toBeTruthy()
  })
})
