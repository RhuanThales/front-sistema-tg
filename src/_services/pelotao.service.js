import { authHeader } from '../_helpers'
import { userService, config } from '.'

export const pelotaoService = {
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
  return fetch(`${config.apiUrl}/Pelotao/ObterTodos`, requestOptions).then(handleResponse)
}

function register (pelotao) {
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(pelotao)
  }
  return fetch(`${config.apiUrl}/Pelotao/Inserir`, requestOptions).then(handleResponse)
}

function update (pelotao) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(pelotao)
  }
  return fetch(`${config.apiUrl}/Pelotao/Atualizar/${pelotao.id}`, requestOptions).then(handleResponse)
}

function _delete (id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  }
  return fetch(`${config.apiUrl}/Pelotao/Excluir/${id}`, requestOptions).then(handleResponse)
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
