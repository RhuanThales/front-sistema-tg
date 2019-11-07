import { chamadaService } from '../../../_services'
import { router } from '../../../_helpers'

export default {

  getAll ({ commit }) {
    commit('getAllRequest')
    chamadaService.getAll().then(
      chamadas => commit('getAllSuccess', chamadas),
      error => commit('getAllFailure', error)
    )
  },

  register ({ dispatch, commit }, atirador) {
    commit('registerRequest', atirador)
    chamadaService.register(atirador).then(
      atirador => {
        commit('registerSuccess', atirador)
        router.push('/chamadas')
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

  confirmarChamada ({ dispatch, commit }, idChamada) {
    commit('confirmarChamadaRequest', idChamada)
    chamadaService.confirmarChamada(idChamada).then(
      chamada => {
        commit('confirmarChamadaSuccess', idChamada)
        // router.push('/chamadas')
        setTimeout(() => {
          dispatch('alert/success', 'Registration successful', { root: true })
          chamadaService.getAll()
        })
      },
      error => {
        commit('confirmarChamadaFailure', error)
        dispatch('alert/error', error, { root: true })
      }
    )
  },

  delete ({ commit }, id) {
    commit('deleteRequest', id)
    chamadaService.delete(id).then(
      atirador => commit('deleteSuccess', id),
      error => commit('deleteSuccess', { id, error: error.toString() })
    )
  }
}
