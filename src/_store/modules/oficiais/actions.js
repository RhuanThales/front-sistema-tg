import { oficialService } from '../../../_services'
import { router } from '../../../_helpers'

export default {

  getAll ({ commit }) {
    commit('getAllRequest')
    oficialService.getAll().then(
      oficiais => commit('getAllSuccess', oficiais),
      error => commit('getAllFailure', error)
    )
  },

  register ({ dispatch, commit }, oficial) {
    commit('registerRequest', oficial)
    oficialService.register(oficial).then(
      oficial => {
        commit('registerSuccess', oficial)
        router.push('/oficiais')
        setTimeout(() => {
          dispatch('alert/success', 'Registration successful', { root: true })
        })
      },
      error => {
        commit('registerFailure', error)
        dispatch('alert/error', error, { root: true })
      }
    )
  },

  update ({ dispatch, commit }, oficial) {
    commit('updateRequest', oficial)
    // console.log('CADASTRANDO Pelotao NOVO' + user)
    oficialService.update(oficial).then(
      oficial => {
        commit('updateSuccess', oficial)
        // router.push('/oficiais')
        setTimeout(() => {
          dispatch('alert/success', 'Registration successful', { root: true })
          commit('getAllRequest')
          oficialService.getAll().then(
            oficiais => commit('getAllSuccess', oficiais),
            error => commit('getAllFailure', error)
          )
        })
      },
      error => {
        commit('updateFailure', error)
        dispatch('alert/error', error, { root: true })
      }
    )
  },

  delete ({ commit }, id) {
    commit('deleteRequest', id)
    oficialService.delete(id).then(
      oficial => commit('deleteSuccess', id),
      error => commit('deleteSuccess', { id, error: error.toString() })
    )
  }
}
