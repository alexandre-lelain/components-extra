const EXCLUDED = ['forwardedRef', 'ref']

const filterProps = (propsDefinition = []) =>
  propsDefinition.filter(prop => !EXCLUDED.includes(prop.property))

export default filterProps
