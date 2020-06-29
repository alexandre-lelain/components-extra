import endsWithWhitespace from './endsWithWhitespace'

export default (oldValue: string, newValue: string): boolean =>
  endsWithWhitespace(oldValue) && newValue.length >= oldValue.length
