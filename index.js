import {getOptions} from 'loader-utils'

export default (source) => {
  const options = getOptions(this)
  const { test, replace } = options
  if (typeof replace === 'function') {
    return replace(source, options)
  } else if (test && replace) {
    return source.replace(test, replace)
  }
  return source
}
