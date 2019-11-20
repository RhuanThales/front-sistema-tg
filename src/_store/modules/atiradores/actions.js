import { atiradorService } from '../../../_services'
import { router } from '../../../_helpers'

export default {

  getAll ({ commit }) {
    commit('getAllRequest')
    atiradorService.getAll().then(
      atiradores => commit('getAllSuccess', atiradores),
      error => commit('getAllFailure', error)
    )
  },

  getPorPelotao ({ commit }, numero) {
    commit('getPorPelotaoRequest')
    atiradorService.getPorPelotao(numero).then(
      atiradores => commit('getPorPelotaoSuccess', atiradores),
      error => commit('getPorPelotaoFailure', error)
    )
  },

  getMonitores ({ commit }) {
    commit('getMonitoresRequest')
    atiradorService.getMonitores().then(
      atiradores => commit('getMonitoresSuccess', atiradores),
      error => commit('getMonitoresFailure', error)
    )
  },

  getDesligados ({ commit }) {
    commit('getDesligadosRequest')
    atiradorService.getDesligados().then(
      atiradores => commit('getDesligadosSuccess', atiradores),
      error => commit('getDesligadosFailure', error)
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
  },

  uploadArquivo ({ dispatch, commit }, arquivo) {
    commit('uploadArquivoRequest', arquivo)
    atiradorService.uploadArquivo(arquivo)
      .then(
        arquivo => {
          commit('uploadArquivoSuccess', arquivo)
          router.push('/atiradores')
          setTimeout(() => {
            dispatch('alert/success', 'Registration successful', { root: true })
          })
        },
        error => {
          commit('uploadArquivoFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  }
}
