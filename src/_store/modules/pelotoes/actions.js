import { pelotaoService } from '../../../_services'
import { router } from '../../../_helpers'

export default {

  getAll ({ commit }) {
    commit('getAllRequest')
    pelotaoService.getAll().then(
      pelotoes => commit('getAllSuccess', pelotoes),
      error => commit('getAllFailure', error)
    )
  },

  register ({ dispatch, commit }, usuario) {
    commit('registerRequest', usuario)
    pelotaoService.register(usuario).then(
      usuario => {
        commit('registerSuccess', usuario)
        router.push('/pelotoes')
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
    pelotaoService.delete(id).then(
      sistema => commit('deleteSuccess', id),
      error => commit('deleteSuccess', { id, error: error.toString() })
    )
  }
}
