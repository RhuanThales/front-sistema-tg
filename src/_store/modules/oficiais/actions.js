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

  delete ({ commit }, id) {
    commit('deleteRequest', id)
    oficialService.delete(id).then(
      oficial => commit('deleteSuccess', id),
      error => commit('deleteSuccess', { id, error: error.toString() })
    )
  }
}
