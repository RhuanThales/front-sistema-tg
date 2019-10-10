export default {

  getAllRequest (state) {
    state.all = {
      items: []
    }
  },
  getAllSuccess (state, oficiais) {
    state.all = { items: oficiais.result }
  },
  getAllFailure (state, error) {
    state.all = { error }
  },

  registerRequest (state, oficial) {
    state.status = { registering: true }
  },
  registerSuccess (state, oficial) {
    state.status = {}
  },
  registerFailure (state, error) {
    state.status = {}
  },

  updateRequest (state, oficial) {
    state.status = { registering: true }
  },
  updateSuccess (state, oficial) {
    state.status = {}
  },
  updateFailure (state, oficial) {
    state.status = {}
  },

  deleteRequest (state, id) {
    // add 'deleting:true' property to user being deleted
    state.all.items.result = state.all.items.result.map(
      oficial => (oficial.idOficial === id ? { ...oficial, deleting: true } : oficial)
    )
  },
  deleteSuccess (state, id) {
    // remove deleted user from state
    state.all.items.result = state.all.items.result.filter(oficial => oficial.idOficial !== id)
  },
  deleteFailure (state, { id, error }) {
    state.all.items.result = state.items.result.map(oficial => {
      if (oficial.idOficial === id) {
        // make copy of user without 'deleting:true' property
        const { deleting, ...oficialCopy } = oficial
        // return copy of user with 'deleteError:[error]' property
        return { ...oficialCopy, deleteError: error }
      }
      return oficial
    })
  }
}
