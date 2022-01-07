import { ANY } from './constants.js'
import { getNodeValue } from './helpers.js'
import { setPins, removePins } from './pins.js'

const filterDataByConfig = (data, config) => {
  let filteredData = data

  if (config.type !== ANY) {
    filteredData = filteredData.filter((it) => it.offer.type === config.type)
  }

  if (config.price !== ANY) {
    filteredData = filteredData.filter((it) => {
      const price = it.offer.price
      if(config.price === 'middle') return (price > 10000 && price < 50000)
      if(config.price === 'low') return (price < 10000)
      if(config.price === 'high') return (price > 50000)
    })
  }

  if (config.rooms !== ANY) {
    filteredData = filteredData.filter((it) => {
      return String(it.offer.rooms) === config.rooms
    })
  }

  if (config.guests !== ANY) {
    filteredData = filteredData.filter((it) => {
      return String(it.offer.guests) === config.guests
    })
  }

  if (config.wifi) {
    filteredData = filteredData.filter((it) => it.offer.features.some((feature) => {
      return feature === 'wifi'
    }))
  }
  if (config.dishwasher) {
    filteredData = filteredData.filter((it) => it.offer.features.some((feature) => {
      return feature === 'dishwasher'
    }))
  }
  if (config.parking) {
    filteredData = filteredData.filter((it) => it.offer.features.some((feature) => {
      return feature === 'parking'
    }))
  }
  if (config.washer) {
    filteredData = filteredData.filter((it) => it.offer.features.some((feature) => {
      return feature === 'washer'
    }))
  }
  if (config.elevator) {
    filteredData = filteredData.filter((it) => it.offer.features.some((feature) => {
      return feature === 'elevator'
    }))
  }
  if (config.conditioner) {
    filteredData = filteredData.filter((it) => it.offer.features.some((feature) => {
      return feature === 'conditioner'
    }))
  }

  return filteredData
}

const getConfig = () => {
  return {
    type: getNodeValue('#housingtype'),
    price: getNodeValue('#housing-price'),
    rooms: getNodeValue('#housing-rooms'),
    guests: getNodeValue('#housing-guests'),
    wifi: getNodeValue('#filter-wifi', 'checked'),
    dishwasher: getNodeValue('#filter-dishwasher', 'checked'),
    parking: getNodeValue('#filter-parking', 'checked'),
    washer: getNodeValue('#filter-washer', 'checked'),
    elevator: getNodeValue('#filter-elevator', 'checked'),
    conditioner: getNodeValue('#filter-conditioner', 'checked'),
  }
}

export const filter = (data) => {
  const filteredData = filterDataByConfig(data, getConfig())
  const form = document.querySelector('.map__filters')

  form.addEventListener('change', () => {
    const filteredData = filterDataByConfig(data, getConfig())
    removePins()
    setPins(filteredData)
  })

  return filteredData
}