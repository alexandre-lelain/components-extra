import isEmpty from 'utils/isEmpty'

/**
 * Returns the string-formatted of an Storybook object props.
 * Example: returns "{ propA: typeA, propB: typeB }"
 * @param {} props
 */
const propsReducer = (props = {}) => {
  if (isObjectArray(props)) {
    return concatPropsArray(Object.values(props))
  }
  return `{ ${concatPropsObject(props)} }`
}

/**
 * Returns the string-formatted of an Storybook object props, without the
 * extra brackets {} around. When `withoutKey` is true, only return types.
 * Example withoutKey = false: returns "propA: typeA, propB: typeB"
 * Example withoutKey = true: returns "typeA, typeB"
 * @param {} props
 * @param false withoutKey
 */
const concatPropsObject = (props = {}, withoutKey = false) => {
  const keys = Object.keys(props)
  const strProps = keys.map(key => {
    const { name, value } = props[key]
    if (withoutKey) {
      return name
    } else if (value) {
      return `${key}: ${formatComplexType(name, value)}`
    }
    return `${key}: ${name}`
  })
  return strProps.join`, `
}

/**
 * Same as concatPropsObject, except that it handles the case Storybook props
 * object contains an array.
 * Example: PropTypes.oneOfType([...])
 *  @param [] props
 */
const concatPropsArray = (props = []) => concatPropsObject(props, true)

const isObjectArray = (props = {}) => Object.keys(props)[0] == 0

/**
 * Returns the string representation of a complex-typed prop (ex: arrayOf, oneOfType, etc...)
 * The function is recursive.
 * @param string key
 * @param {string|object} value
 */
const formatComplexType = (key, value) => {
  let finalKey = key
  switch (key) {
    case 'union':
      finalKey = 'oneOfType'
      break
    case 'shape':
      return parseType(value)
  }
  return `${finalKey}(${parseType(value)})`
}

/**
 * Main function parser. Turns Storybook prop-type object into a readable string.
 * @param {} type
 * returns string
 */
const parseType = (type = {}) => {
  const { name, value, ...rest } = type

  if (!isEmpty(rest)) {
    return propsReducer(rest)
  } else if (value) {
    return formatComplexType(name, value)
  }
  return name
}

export default parseType
