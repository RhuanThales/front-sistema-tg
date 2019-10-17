import { router } from '../../../_helpers'

export default {
  getEscala (state, escala) {
    state.escalaEdit = escala
    router.push('/editarEscala')
  },
  getEscalaInfos (state, escala) {
    state.escalaEdit = escala
    router.push('/informacaoEscala')
  },
  updateRequest (state, escala) {
    state.status = { registering: true }
  },
  updateSuccess (state, escala) {
    state.status = { escala }
  },
  updateFailure (state, error) {
    state.status = { error }
  }
}
