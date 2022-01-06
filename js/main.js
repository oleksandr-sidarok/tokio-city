import { getMocks } from './mocks.js'
import { setPins } from './pins.js'
import { filter } from './filters.js'


const data = getMocks()

const filteredData = filter(data)
console.log(filteredData)
setPins(filteredData)