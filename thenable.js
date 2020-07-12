const thenable = {
  then(resolve) {
    resolve(5)
  },
}

;(async () => {
  const res = await thenable
  console.log({ res })
})()
