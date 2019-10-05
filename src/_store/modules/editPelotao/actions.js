import { pelotaoService } from '../../../_services'
import { router } from '../../../_helpers'

export default {
  getPelotaoEdit ({ commit }, pelotao) {
    commit('getPelotao', pelotao)
  },

  update ({ dispatch, commit }, pelotao) {
    commit('updateRequest', pelotao)
    // console.log('CADASTRANDO Pelotao NOVO' + user)
    pelotaoService.update(pelotao).then(
      pelotao => {
        commit('updateSuccess', pelotao)
        router.push('/pelotao')
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
