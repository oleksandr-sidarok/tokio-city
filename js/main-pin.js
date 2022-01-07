export const movePin = () => {
  const mainPin = document.querySelector('.map__pin--main')
  const mapPins = document.querySelector('.map__pins')
  console.log(mainPin)

  const moveHandler = (evt) => {
    mainPin.style = `left: ${evt.x}px; top: ${evt.y}px`
  }

  mainPin.addEventListener('mousedown', () => {
    mapPins.addEventListener('mousemove', moveHandler)
  })
  mainPin.addEventListener('mouseup', () => {
    mapPins.removeEventListener('mousemove', moveHandler)
  })
}