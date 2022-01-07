import { getRandom } from "./helpers.js"

const createCard = function (data) {
  const cardTemplate = document.querySelector('#card').content
  const cardElement = cardTemplate.querySelector('article')
  const card = cardElement.cloneNode(true)
  const cardImg = card.querySelector('.popup__avatar')
  const cardType = card.querySelector('.popup__type')
  const cardTitle = card.querySelector('.popup__title')
  const cardDescr = card.querySelector('.popup__description')
  const cardAddress = card.querySelector('.popup__text--address')
  const cardTime = card.querySelector('.popup__text--time')
  const cardPrice = card.querySelector('.popup__text--price')
  const cardCapacity = card.querySelector('.popup__text--capacity')
  const cardPhotos = card.querySelectorAll('.popup__photo')
  const cardFeatures = card.querySelector('.popup__features')
  const closeBtn = card.querySelector('.popup__close')

  closeBtn.addEventListener('click', () => {
    card.remove()
  })
  cardImg.src = data.author.avatar
  cardType.textContent = (() => {
    if(data.offer.type === 'flat') return 'Квартира'
    if(data.offer.type === 'place') return 'Дворец'
    if(data.offer.type === 'house') return 'Дом'
    if(data.offer.type === 'bungalo') return 'Бунгало'
    return 'Жилое помещение'
  })()
  cardPhotos.forEach((photo) => {
    photo.src = `https://loremflickr.com/${getRandom(360, 320)}/${getRandom(300, 240)}/tokio,house`
  })
  cardTitle.textContent = data.offer.title
  cardDescr.textContent = data.offer.description
  cardTime.textContent = `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`
  cardPrice.textContent = `${data.offer.price}₽/ночь`
  cardCapacity.textContent = `${data.offer.rooms} комнаты для ${data.offer.guests} гостей`
  cardAddress.textContent = data.offer.address
  cardFeatures.innerHTML = ''

  data.offer.features.forEach((feature) => {
    const li = document.createElement('li')
    li.classList.add('popup__feature')
    li.classList.add(`popup__feature--${feature}`)
    cardFeatures.insertAdjacentElement('beforeend', li)
  })

  return card
}

export const setPins = (data) => {
  const pinTemplate = document.querySelector('#pin').content
  const pinElement = pinTemplate.querySelector('button')
  const pinsContainer = document.querySelector('.map__pins')
  const cardContainer = document.querySelector('.map')

  data.forEach( it => {
    const pin = pinElement.cloneNode(true)
    const image = pin.querySelector('img')
    pin.style = `left: ${it.location.x}px; top: ${it.location.y}px;`
    image.src = it.author.avatar

    const card = createCard(it)

    pin.addEventListener('click', () => {
      cardContainer.querySelectorAll('.map__card').forEach ((e) => e.remove())
      cardContainer.insertAdjacentElement('beforeend', card)
    })

    pinsContainer.insertAdjacentElement('beforeend', pin)
  });
}

export const removePins = () => {
  const pinsContainer = document.querySelector('.map__pins')
  const pins = pinsContainer.querySelectorAll('.map__pin:not(.map__pin--main)')
  pins.forEach( pin => {
    pin.remove()
  })
}