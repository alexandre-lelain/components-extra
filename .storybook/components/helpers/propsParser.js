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
    const name = props[key].name
    return withoutKey ? name : `${key}: ${name}`
  })
  return strProps.join`, `
}

/**
 * Same as concatPropsObject, except that it handles the case Storybook props
 * object is an union.
 * Example: PropTypes.oneOfType([...])
 *  @param [] props
 */
const concatPropsArray = (props = []) => concatPropsObject(props, true)

const isObjectArray = (props = {}) => Object.keys(props)[0] == 0

/**
 * Main function parser. Turns Storybook prop-type object into a readable string.
 * @param {} type
 */
const parseType = (type = {}) => {
  const { name, value, ...rest } = type

  if (!isEmpty(rest)) {
    return propsReducer(rest)
  } else if (value) {
    return `${name}(${parseType(value)})`
  }
  return name
}

export default parseType
