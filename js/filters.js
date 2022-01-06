import { ANY } from './constants.js'
import { getNodeValue } from './helpers.js'
import { setPins, removePins } from './pins.js'

const filterDataByConfig = (data, config) => {
  let filteredData = data

  if (config.type !== ANY) {
    filteredData = filteredData.filter((it) => it.offer.type === config.type)

  }

  return filteredData
}

const getConfig = () => {return {type: getNodeValue('#housingtype')}}

export const filter = (data) => {
  const filteredData = filterDataByConfig(data, getConfig())
  const form = document.querySelector('.map__filters')
  console.log(form)

  form.addEventListener('change', () => {
    console.log('ok!')
    const filteredData = filterDataByConfig(data, getConfig())
    removePins()
    setPins(filteredData)
  })

  return filteredData
}