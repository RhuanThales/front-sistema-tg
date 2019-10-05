export default {

  getAllRequest (state) {
    state.all = {
      items: []
    }
  },
  getAllSuccess (state, atiradores) {
    state.all = { items: atiradores }
  },
  getAllFailure (state, error) {
    state.all = { error }
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
    state.all.items.result = state.all.items.result.map(
      atirador => (atirador.idAtirador === id ? { ...atirador, deleting: true } : atirador)
    )
  },
  deleteSuccess (state, id) {
    // remove deleted user from state
    state.all.items.result = state.all.items.result.filter(atirador => atirador.idAtirador !== id)
  },
  deleteFailure (state, { id, error }) {
    state.all.items.result = state.items.result.map(atirador => {
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
