import { config } from '.'

export const userService = {
  login,
  logout
}

function login (login, senha) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ login, senha })
  }
  return fetch(`${config.apiUrl}/token`, requestOptions)
    .then(handleResponse)
    .then(user => {
      if (user.value) {
        localStorage.setItem('usuario', JSON.stringify(user))
      }
      return user
    })
}

function logout () {
  localStorage.removeItem('usuario')
}

function handleResponse (response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
        logout()
        location.reload(true)
      }
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }
    return data
  })
}
