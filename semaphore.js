const semaphore = {
  locked: false,
  then(resolve) {
    if (this.locked) {
      this.locked = false
      setTimeout(() => resolve(5), 3000)
    } else {
      this.locked = true
      resolve()
    }
  }
}

;(async () => {
  await semaphore
  console.log(1)
  await semaphore
  console.log(2)
  await semaphore
  console.log(3)
  await semaphore
  console.log(4)
  await semaphore
  console.log(5)
})()