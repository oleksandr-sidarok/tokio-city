export const getRandom = function (max = 10, min = 0) {
  let rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}

export const getRandomFromArray = (array, many = false) => {
  let result = []
  if(many) {
    // each element can be included with a chance of 50%. I hope this is true
    for (const e of array) {
      if(getRandom(1)) {
        result.push(e)
      }
    }
  } else {
    result = array[getRandom(array.length - 1)]
  }
  return result
}