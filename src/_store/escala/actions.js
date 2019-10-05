import { escalaService } from '../../../_services'
import { router } from '../../../_helpers'

export default {

  getAll ({ commit }) {
    commit('getAllRequest')
    escalaService.getAll().then(
      escalas => commit('getAllSuccess', escalas),
      error => commit('getAllFailure', error)
    )
  },

  register ({ dispatch, commit }, escala) {
    commit('registerRequest', escala)
    escalaService.register(escala).then(
      oficial => {
        commit('registerSuccess', escala)
        router.push('/escalas')
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
    escalaService.delete(id).then(
      escala => commit('deleteSuccess', id),
      error => commit('deleteSuccess', { id, error: error.toString() })
    )
  }
}
