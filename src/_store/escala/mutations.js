export default {

  getAllRequest (state) {
    state.all = {
      items: []
    }
  },
  getAllSuccess (state, escalas) {
    state.all = { items: escalas }
  },
  getAllFailure (state, error) {
    state.all = { error }
  },

  registerRequest (state, escala) {
    state.status = { registering: true }
  },
  registerSuccess (state, escala) {
    state.status = {}
  },
  registerFailure (state, error) {
    state.status = {}
  },

  deleteRequest (state, id) {
    // add 'deleting:true' property to user being deleted
    state.all.items.result = state.all.items.result.map(
      escala => (escala.id === id ? { ...escala, deleting: true } : escala)
    )
  },
  deleteSuccess (state, id) {
    // remove deleted user from state
    state.all.items.result = state.all.items.result.filter(escala => escala.id !== id)
  },
  deleteFailure (state, { id, error }) {
    state.all.items.result = state.items.result.map(escala => {
      if (escala.id === id) {
        // make copy of user without 'deleting:true' property
        const { deleting, ...escalaCopy } = escala
        // return copy of user with 'deleteError:[error]' property
        return { ...escalaCopy, deleteError: error }
      }
      return escala
    })
  }
}
