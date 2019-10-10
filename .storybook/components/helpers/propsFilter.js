const EXCLUDED = ['forwardedRef']

const filterProps = (propsDefinition = []) =>
  propsDefinition.filter(prop => !EXCLUDED.includes(prop.property))

export default filterProps
