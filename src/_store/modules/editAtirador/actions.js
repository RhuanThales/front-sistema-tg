import { atiradorService } from '../../../_services'
import { router } from '../../../_helpers'

export default {
  getAtiradorEdit ({ commit }, atirador) {
    commit('getAtirador', atirador)
  },

  update ({ dispatch, commit }, atirador) {
    commit('updateRequest', atirador)
    atiradorService.update(atirador).then(
      pelotao => {
        commit('updateSuccess', atirador)
        router.push('/atirador')
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
