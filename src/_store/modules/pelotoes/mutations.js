export default {

  getAllRequest (state) {
    state.all = {
      items: []
    }
  },
  getAllSuccess (state, pelotoes) {
    state.all = { items: pelotoes }
  },
  getAllFailure (state, error) {
    state.all = { error }
  },

  registerRequest (state, pelotao) {
    state.status = { registering: true }
  },
  registerSuccess (state, pelotao) {
    state.status = {}
  },
  registerFailure (state, error) {
    state.status = {}
  },

  deleteRequest (state, id) {
    // add 'deleting:true' property to user being deleted
    state.all.items.result = state.all.items.result.map(
      pelotao => (pelotao.id === id ? { ...pelotao, deleting: true } : pelotao)
    )
  },
  deleteSuccess (state, id) {
    // remove deleted user from state
    state.all.items.result = state.all.items.result.filter(pelotao => pelotao.id !== id)
  },
  deleteFailure (state, { id, error }) {
    state.all.items.result = state.items.result.map(pelotao => {
      if (pelotao.id === id) {
        // make copy of user without 'deleting:true' property
        const { deleting, ...pelotaoCopy } = pelotao
        // return copy of user with 'deleteError:[error]' property
        return { ...pelotaoCopy, deleteError: error }
      }
      return pelotao
    })
  }
}
