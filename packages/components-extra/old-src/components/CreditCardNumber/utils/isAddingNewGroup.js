import endsWithWhitespace from './endsWithWhitespace'

export default (oldValue, newValue) =>
  endsWithWhitespace(oldValue) && newValue.length >= oldValue.length
