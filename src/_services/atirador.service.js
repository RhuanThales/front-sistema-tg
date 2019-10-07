import { authHeader } from '../_helpers'
import { userService, config } from '.'

export const atiradorService = {
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
  return fetch(`${config.apiUrl}/Atirador/ObterTodos`, requestOptions).then(handleResponse)
}

function register (atirador) {
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(atirador)
  }
  return fetch(`${config.apiUrl}/Atirador/Inserir`, requestOptions).then(handleResponse)
}

function update (atirador) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(atirador)
  }
  return fetch(`${config.apiUrl}/Atirador/Atualizar/${atirador.idAtirador}`, requestOptions).then(handleResponse)
}

function _delete (id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  }
  return fetch(`${config.apiUrl}/Atirador/Excluir/${id}`, requestOptions).then(handleResponse)
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
