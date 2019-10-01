import { usuarioService } from '../../../_services'
import { router } from '../../../_helpers'

export default {
  getUsuarioEdit ({ commit }, usuario) {
    commit('getUsuario', usuario)
  },

  update ({ dispatch, commit }, usuario) {
    commit('updateRequest', usuario)
    // console.log('CADASTRANDO USUARIO NOVO' + user)
    usuarioService.update(usuario).then(
      usuario => {
        commit('updateSuccess', usuario)
        router.push('/usuarios')
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
