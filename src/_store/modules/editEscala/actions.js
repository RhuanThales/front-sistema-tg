import { escalaService } from '../../../_services'
import { router } from '../../../_helpers'

export default {
  getEscalaEdit ({ commit }, escala) {
    commit('getEscala', escala)
  },
  getEscalaInfo ({ commit }, escala) {
    commit('getEscalaInfos', escala)
  },
  update ({ dispatch, commit }, escala) {
    commit('updateRequest', escala)
    escalaService.update(escala).then(
      escala => {
        commit('updateSuccess', escala)
        router.push('/escalas')
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
