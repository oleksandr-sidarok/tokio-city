export const setError = () => {
  const errorTemplate = document.querySelector('#error').content
  const errorElement = errorTemplate.querySelector('.error')
  const mainElement = document.querySelector('main')

  mainElement.insertAdjacentElement('afterbegin', errorElement)
}