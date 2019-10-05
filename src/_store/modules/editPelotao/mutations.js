import { router } from '../../../_helpers'

export default {
  getPelotao (state, pelotao) {
    state.pelotaoEdit = pelotao
    router.push('/editarPelotao')
  },
  updateRequest (state, pelotao) {
    state.status = { registering: true }
  },
  updateSuccess (state, pelotao) {
    state.status = {}
  },
  updateFailure (state, pelotao) {
    state.status = {}
  }
}
