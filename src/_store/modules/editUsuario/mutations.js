import { router } from '../../../_helpers'

export default {
  getUsuario (state, usuario) {
    state.usuarioEdit = usuario
    router.push('/editarUsuario')
  },
  updateRequest (state, usuario) {
    state.status = { registering: true }
  },
  updateSuccess (state, usuario) {
    state.status = {}
  },
  updateFailure (state, usuario) {
    state.status = {}
  }
}
