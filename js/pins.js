const createCard = function (mock) {
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
  cardPhotos.forEach((e, i) => {
    e.src = mock.photos[i]
  })
  cardImg.src = mock.author.avatar
  cardType.textContent = mock.offer.type
  cardTitle.textContent = mock.offer.title
  cardDescr.textContent = mock.offer.description
  cardTime.textContent = `Заезд после ${mock.offer.settlement}, выезд до ${mock.offer.eviction}`
  cardPrice.textContent = `${mock.offer.price}₽/ночь`
  cardCapacity.textContent = `${mock.offer.rooms} комнаты для ${mock.offer.guests} гостей`
  cardAddress.textContent = mock.offer.address
  cardFeatures.innerHTML = ''

  mock.offer.features.forEach((feature) => {
    const li = document.createElement('li')
    li.classList.add('popup__feature')
    li.classList.add(`popup__feature--${feature}`)
    cardFeatures.insertAdjacentElement('beforeend', li)
  })

  return card
}

export const setPins = (mocks) => {
  const pinTemplate = document.querySelector('#pin').content
  const pinElement = pinTemplate.querySelector('button')
  const pinsContainer = document.querySelector('.map__pins')
  const cardContainer = document.querySelector('.map')


  mocks.forEach( mock => {
    const pin = pinElement.cloneNode(true)
    const image = pin.querySelector('img')
    pin.style = `left: ${mock.location.x}px; top: ${mock.location.y}px;`
    image.src = mock.author.avatar

    const card = createCard(mock)

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