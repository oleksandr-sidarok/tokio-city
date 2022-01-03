export const getRandom = function (max = 10, min = 0) {
  let rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}

export const getRandomFromArray = (array) => {
  return array[getRandom(array.length - 1)]
}