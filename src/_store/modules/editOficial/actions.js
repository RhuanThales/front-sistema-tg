import { oficialService } from '../../../_services'
import { router } from '../../../_helpers'

export default {
  getOficialEdit ({ commit }, oficial) {
    commit('getOficial', oficial)
  },

  update ({ dispatch, commit }, oficial) {
    commit('updateRequest', oficial)
    // console.log('CADASTRANDO Pelotao NOVO' + user)
    oficialService.update(oficial).then(
      oficial => {
        commit('updateSuccess', oficial)
        router.push('/oficial')
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
