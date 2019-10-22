import { router } from '../../../_helpers'

export default {
  getChamada (state, chamada) {
    state.chamadaEdit = chamada
    router.push('/editarChamada')
  },
  updateRequest (state, chamada) {
    state.status = { registering: true }
  },
  updateSuccess (state, chamada) {
    state.status = { chamada }
  },
  updateFailure (state, error) {
    state.status = { error }
  }
}
