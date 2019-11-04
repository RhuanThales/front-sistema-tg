import { router } from '../../../_helpers'

export default {
  getAtirador (state, atirador) {
    state.atiradorEdit = atirador
    router.push('/editarAtirador')
  },
  getAtiradorInfo (state, atirador) {
    state.atiradorEdit = atirador
    router.push('/informacoesAtirador')
  },
  updateRequest (state, atirador) {
    state.status = { registering: true }
  },
  updateSuccess (state, atirador) {
    state.status = {}
  },
  updateFailure (state, atirador) {
    state.status = {}
  }
}
