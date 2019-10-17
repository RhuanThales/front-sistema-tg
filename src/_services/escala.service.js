import { authHeader } from '../_helpers'
import { userService, config } from '.'

export const escalaService = {
  register,
  getAll,
  update,
  delete: _delete
}

function getAll () {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }
  return fetch(`${config.apiUrl}/Escala/ObterTodos`, requestOptions).then(handleResponse)
}

function register (escala) {
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(escala)
  }
  return fetch(`${config.apiUrl}/Escala/Inserir`, requestOptions).then(handleResponse)
}

function update (escala) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(escala)
  }
  return fetch(`${config.apiUrl}/Escala/Atualizar/${escala.idEscala}`, requestOptions).then(handleResponse)
}

function _delete (id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  }
  return fetch(`${config.apiUrl}/Escala/Excluir/${id}`, requestOptions).then(handleResponse)
}

function handleResponse (response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
        userService.logout()
        location.reload(true)
      }
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }
    return data
  })
}
