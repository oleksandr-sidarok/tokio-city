const createCard = function (mock) {
  const cardTemplate = document.querySelector('#card').content
  const cardElement = cardTemplate.querySelector('article')
  const card = cardElement.cloneNode(true)
  const cardImg = card.querySelector('.popup__avatar')
  const cardTitle = card.querySelector('.popup__title')
  const cardDescr = card.querySelector('.popup__description')
  const cardPhotos = card.querySelectorAll('.popup__photo')
  const closeBtn = card.querySelector('.popup__close')

  closeBtn.addEventListener('click', () => {
    card.remove()
  })
  cardPhotos.forEach((e, i) => {
    console.log(e)
    console.log(i)
    e.src = mock.photos[i]
  })
  cardImg.src = mock.author.avatar
  cardTitle.textContent = mock.offer.title
  cardDescr.textContent = mock.offer.description

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