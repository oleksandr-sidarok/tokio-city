import { getRandom } from "./helpers.js";
import { getRandomFromArray } from "./helpers.js";
import { TITLES, DESCRS, MAX_COORD, MIN_COORD, TIME_VALUES } from "./constants.js"

const createMock = function (i) {
  const mock = {}

  mock.location = {
    x: getRandom(MAX_COORD, MIN_COORD),
    y: getRandom(MAX_COORD, MIN_COORD),
  }
  mock.offer = {
    title: getRandomFromArray(TITLES),
    address: `${mock.location.x, mock.location.y}`,
    price: getRandom(100000),
    guests: getRandom(10),
    description: getRandomFromArray(DESCRS),
    checkin: getRandomFromArray (TIME_VALUES)
  }
  mock.author = {
    avatar: `img/avatars/user0${i + 1}.png`
  }
  mock.photos = [`https://loremflickr.com/320/24${getRandom()}/tokio,house/all`, `https://loremflickr.com/320/24${getRandom()}/tokio,house/all`, `https://loremflickr.com/320/24${getRandom()}/tokio,house/all`, `https://loremflickr.com/320/24${getRandom()}/tokio,house/all`, `https://loremflickr.com/320/24${getRandom()}/tokio,house/all`]
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