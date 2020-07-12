const cancelable = fn => {
  let canceled = false
  const f = (...args) => {
    setImmediate(() => {
      if(!canceled) return fn(...args)
    })
  }
  f.cancel = () => canceled = true
  return f
}

// Usage

const usage = cb => setTimeout(() => cb({ res: 100 }), 1e3)

const f = cancelable(usage)

f(console.log)
// f.cancel()

