export default {

  getAllRequest (state) {
    state.all = {
      items: []
    }
  },
  getAllSuccess (state, usuarios) {
    state.all = { items: usuarios.result }
    // console.log("MUTATIONS => " + JSON.stringify(state.all))
  },
  getAllFailure (state, error) {
    state.all = { error }
  },

  registerRequest (state, usuario) {
    state.status = { registering: true }
  },
  registerSuccess (state, usuario) {
    state.status = {}
  },
  registerFailure (state, error) {
    state.status = {}
  },

  deleteRequest (state, id) {
    // add 'deleting:true' property to user being deleted
    state.all.items = state.all.items.map(
      usuario => (usuario.id === id ? { ...usuario, deleting: true } : usuario)
    )
  },
  deleteSuccess (state, id) {
    // remove deleted user from state
    state.all.items = state.all.items.filter(usuario => usuario.id !== id)
  },
  deleteFailure (state, { id, error }) {
    state.all.items = state.items.map(usuario => {
      if (usuario.id === id) {
        // make copy of user without 'deleting:true' property
        const { deleting, ...usuarioCopy } = usuario
        // return copy of user with 'deleteError:[error]' property
        return { ...usuarioCopy, deleteError: error }
      }
      return usuario
    })
  }
}
