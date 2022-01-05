import { getRandom } from "./helpers.js";
import { getRandomFromArray } from "./helpers.js";
import { TITLES, DESCRS, MAX_COORD, MIN_COORD, TIME_VALUES, FEATURES, TYPES } from "./constants.js"

const createMock = function (i) {
  const mock = {}

  mock.location = {
    x: getRandom(MAX_COORD, MIN_COORD),
    y: getRandom(MAX_COORD, MIN_COORD),
  }
  mock.offer = {
    title: getRandomFromArray(TITLES),
    address: `${mock.location.x}, ${mock.location.y}`,
    price: getRandom(100000),
    type: getRandomFromArray(TYPES),
    rooms: getRandom(9, 2),
    guests: getRandom(9, 2),
    description: getRandomFromArray (DESCRS),
    settlement: getRandomFromArray (TIME_VALUES),
    eviction: getRandomFromArray (TIME_VALUES),
    features: getRandomFromArray (FEATURES, true)
  }
  mock.author = {
    avatar: `img/avatars/user0${i + 1}.png`
  }
  // getRandom it is necessary that the pictures were different. Without this method, the same image is returned
  mock.photos = [`https://loremflickr.com/320/24${getRandom(9)}/tokio,house/all`, `https://loremflickr.com/320/24${getRandom(9)}/tokio,house/all`, `https://loremflickr.com/320/24${getRandom(9)}/tokio,house/all`, `https://loremflickr.com/320/24${getRandom(9)}/tokio,house/all`, `https://loremflickr.com/320/24${getRandom(9)}/tokio,house/all` , `https://loremflickr.com/320/24${getRandom(9)}/tokio,house/all`, `https://loremflickr.com/320/24${getRandom(9)}/tokio,house/all`, `https://loremflickr.com/320/24${getRandom(9)}/tokio,house/all`]
  return mock
}

export const getMocks = function (count = 8) {
  const mockArr = []
  for (let index = 0; index < count; index++) {
    const mock = createMock(index)
    mockArr.push(mock)
  }
  return mockArr
}