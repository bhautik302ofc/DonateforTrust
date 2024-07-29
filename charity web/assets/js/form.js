const scriptURL = 'https://script.google.com/macros/s/AKfycbxm2zH2lCFN3uL4K-6PVCBcpNAIiSpaio8cprYlpBEZo8o7tCZ0qZ0e0xYbYPGjwtDQ/exec'
const form = document.forms['donate']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => openForm())
    .catch(error => console.error('Error!', error.message))
})

