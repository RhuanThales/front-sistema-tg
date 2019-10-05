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
      atirador => (atirador.id === id ? { ...atirador, deleting: true } : atirador)
    )
  },
  deleteSuccess (state, id) {
    // remove deleted user from state
    state.all.items.result = state.all.items.result.filter(atirador => atirador.id !== id)
  },
  deleteFailure (state, { id, error }) {
    state.all.items.result = state.items.result.map(atirador => {
      if (atirador.id === id) {
        // make copy of user without 'deleting:true' property
        const { deleting, ...pelotaoCopy } = atirador
        // return copy of user with 'deleteError:[error]' property
        return { ...pelotaoCopy, deleteError: error }
      }
      return atirador
    })
  }
}
