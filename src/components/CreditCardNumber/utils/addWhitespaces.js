import { isEmpty } from 'lodash-es'
import { MAX_DIGITS, MAX_LENGTH } from './constants'

export default value => {
  const cutValue = value.slice(0, MAX_DIGITS)
  const numberGroups = cutValue.match(/([\S]{4})/gi)

  if (numberGroups && !isEmpty(numberGroups)) {
    const spacedValue = numberGroups.join(' ')
    const remainingValue = cutValue.slice(numberGroups.length * 4)
    if (remainingValue && remainingValue !== '') {
      return spacedValue + ' ' + remainingValue
    } else if (cutValue.length % 4 === 0 && spacedValue.length < MAX_LENGTH) {
      return spacedValue + ' '
    }
    return spacedValue
  }
  return cutValue
}
