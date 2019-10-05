import { router } from '../../../_helpers'

export default {
  getPelotao (state, escala) {
    state.escalaEdit = escala
    router.push('/editarPelotao')
  },
  updateRequest (state, escala) {
    state.status = { registering: true }
  },
  updateSuccess (state, escala) {
    state.status = {}
  },
  updateFailure (state, escala) {
    state.status = {}
  }
}
