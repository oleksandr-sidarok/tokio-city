export const setPins = (mocks) => {
  const pinTemplate = document.querySelector('#pin').content
  const pinElement = pinTemplate.querySelector('button')
  const pinsContainer = document.querySelector('.map__pins')

  mocks.forEach( mock => {
    const pin = pinElement.cloneNode(true)
    const image = pin.querySelector('img')
    pin.style = `left: ${mock.location.x}px; top: ${mock.location.y}px;`
    image.src = mock.author.avatar
    pinsContainer.insertAdjacentElement('beforeend', pin)
  });
}