// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (obj: object | any[]): boolean => {
  if (Array.isArray(obj)) {
    return obj.length < 1
  }
  return Object.keys(obj).length < 1
}
