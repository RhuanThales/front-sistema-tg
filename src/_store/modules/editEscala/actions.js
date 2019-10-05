import { escalaService } from '../../../_services'
import { router } from '../../../_helpers'

export default {
  getPelotaoEdit ({ commit }, escala) {
    commit('getEscala', escala)
  },

  update ({ dispatch, commit }, escala) {
    commit('updateRequest', escala)
    // console.log('CADASTRANDO Pelotao NOVO' + user)
    escalaService.update(escala).then(
      escala => {
        commit('updateSuccess', escala)
        router.push('/escala')
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
