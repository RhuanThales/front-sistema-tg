export default {

  getAllRequest (state) {
    state.all = {
      items: []
    }
  },
  getAllSuccess (state, atiradores) {
    state.all = { items: atiradores.result }
  },
  getAllFailure (state, error) {
    state.all = { error }
  },

  getPorPelotaoRequest (state) {
    state.all = {
      items: []
    }
  },
  getPorPelotaoSuccess (state, atiradores) {
    state.all = { items: atiradores.result }
  },
  getPorPelotaoFailure (state, error) {
    state.all = { error }
  },

  getMonitoresRequest (state) {
    state.monitores = {
      items: []
    }
  },
  getMonitoresSuccess (state, atiradores) {
    state.monitores = { items: atiradores.result }
  },
  getMonitoresFailure (state, error) {
    state.monitores = { error }
  },

  registerRequest (state, atirador) {
    state.status = { registering: true }
  },
  registerSuccess (state, atirador) {
    state.status = {}
  },
  registerFailure (state, error) {
    state.status = {}
  },

  deleteRequest (state, id) {
    // add 'deleting:true' property to user being deleted
    state.all.items = state.all.items.map(
      atirador => (atirador.idAtirador === id ? { ...atirador, deleting: true } : atirador)
    )
  },
  deleteSuccess (state, id) {
    // remove deleted user from state
    state.all.items = state.all.items.filter(atirador => atirador.idAtirador !== id)
  },
  deleteFailure (state, { id, error }) {
    state.all.items = state.items.map(atirador => {
      if (atirador.idAtirador === id) {
        // make copy of user without 'deleting:true' property
        const { deleting, ...atiradorCopy } = atirador
        // return copy of user with 'deleteError:[error]' property
        return { ...atiradorCopy, deleteError: error }
      }
      return atirador
    })
  }
}
