import { authHeader } from '../_helpers'
import { userService, config } from '.'

export const chamadaService = {
  getAll,
  register,
  update,
  confirmarChamada,
  delete: _delete
}

function getAll () {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }
  return fetch(`${config.apiUrl}/Chamada/ObterTodos`, requestOptions).then(handleResponse)
}

function register (chamada) {
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(chamada)
  }
  return fetch(`${config.apiUrl}/Chamada/Inserir`, requestOptions).then(handleResponse)
}

function update (chamada) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(chamada)
  }
  return fetch(`${config.apiUrl}/Chamada/Atualizar/${chamada.idChamada}`, requestOptions).then(handleResponse)
}

function confirmarChamada (idChamada) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' }
  }
  return fetch(`${config.apiUrl}/Chamada/ConfirmarChamada/${idChamada}`, requestOptions).then(handleResponse)
}

function _delete (id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  }
  return fetch(`${config.apiUrl}/Chamada/Excluir/${id}`, requestOptions).then(handleResponse)
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
