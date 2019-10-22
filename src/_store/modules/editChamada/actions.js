import { chamadaService } from '../../../_services'
import { router } from '../../../_helpers'

export default {
  getChamadaEdit ({ commit }, chamada) {
    commit('getChamada', chamada)
  },

  update ({ dispatch, commit }, chamada) {
    commit('updateRequest', chamada)
    chamadaService.update(chamada).then(
      chamada => {
        commit('updateSuccess', chamada)
        router.push('/chamadas')
        setTimeout(() => {
          dispatch('alert/success', 'Registration successful', { root: true })
        })
      },
      error => {
        commit('updateFailure', error)
        dispatch('alert/error', error, { root: true })
      }
    )
  }
}
