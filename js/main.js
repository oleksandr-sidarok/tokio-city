// import { getMocks } from './mocks.js'
import { setPins } from './pins.js'
import { filter } from './filters.js'
import { DATA_URL } from './constants.js'
import { setError } from './error.js'

const start = async () => {
  let data
  try {
    const response = await fetch(DATA_URL)
    data = await response.json()
  } catch {
    setError(start)
  }
  const filteredData = await filter(data)
  setPins(filteredData)

}

start()

