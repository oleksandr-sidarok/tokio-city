export const setError = (cb) => {
  const errorTemplate = document.querySelector('#error').content
  const errorElement = errorTemplate.querySelector('.error')
  const mainElement = document.querySelector('main')
  const againBtn = errorElement.querySelector('.error__button')

  againBtn.addEventListener('click', () => {
    errorElement.remove()
    cb()
  })
  console.log(errorElement)
  mainElement.insertAdjacentElement('afterbegin', errorElement)
}