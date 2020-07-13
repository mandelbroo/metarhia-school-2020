const fnSwitch = val => {
  const scope = {}
  let done = false

  scope.case = (caseVal, fn) => {
    if(caseVal === val) {
      fn()
      done = true
    }
    return scope
  }

  scope.default = fn => {
    if(!done) fn(val)
    return scope
  }

  return scope
}

// Usage

const val = 'z'

fnSwitch(val)
.case('a', () => console.log('so a'))
.case('b', () => console.log('turned out b'))
.case('c', () => console.log('it is c'))
.default(x => console.log('default ' + x))
