import { atiradorService } from '../../../_services'
import { router } from '../../../_helpers'

export default {

  getAll ({ commit }) {
    commit('getAllRequest')
    atiradorService.getAll().then(
      pelotoes => commit('getAllSuccess', pelotoes),
      error => commit('getAllFailure', error)
    )
  },

  register ({ dispatch, commit }, atirador) {
    commit('registerRequest', atirador)
    atiradorService.register(atirador).then(
      atirador => {
        commit('registerSuccess', atirador)
        router.push('/atiradores')
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
    atiradorService.delete(id).then(
      atirador => commit('deleteSuccess', id),
      error => commit('deleteSuccess', { id, error: error.toString() })
    )
  }
}
