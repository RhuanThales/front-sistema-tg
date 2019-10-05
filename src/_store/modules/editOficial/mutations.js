import { router } from '../../../_helpers'

export default {
  getOficial (state, oficial) {
    state.oficialEdit = oficial
    router.push('/editarOficial')
  },
  updateRequest (state, oficial) {
    state.status = { registering: true }
  },
  updateSuccess (state, oficial) {
    state.status = {}
  },
  updateFailure (state, oficial) {
    state.status = {}
  }
}
