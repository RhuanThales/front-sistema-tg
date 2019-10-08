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

  register ({ dispatch, commit }, pelotao) {
    commit('registerRequest', pelotao)
    pelotaoService.register(pelotao).then(
      pelotao => {
        commit('registerSuccess', pelotao)
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

  update ({ dispatch, commit }, pelotao) {
    commit('updateRequest', pelotao)
    // console.log('CADASTRANDO Pelotao NOVO' + user)
    pelotaoService.update(pelotao).then(
      pelotao => {
        commit('updateSuccess', pelotao)
        // router.push('/pelotao')
        setTimeout(() => {
          dispatch('alert/success', 'Registration successful', { root: true })
          commit('getAllRequest')
          pelotaoService.getAll().then(
            pelotoes => commit('getAllSuccess', pelotoes),
            error => commit('getAllFailure', error)
          )
        })
      },
      error => {
        commit('updateFailure', error)
        dispatch('alert/error', error, { root: true })
      }
    )
  },

  delete ({ commit }, id) {
    commit('deleteRequest', id)
    pelotaoService.delete(id).then(
      pelotao => commit('deleteSuccess', id),
      error => commit('deleteSuccess', { id, error: error.toString() })
    )
  }
}
