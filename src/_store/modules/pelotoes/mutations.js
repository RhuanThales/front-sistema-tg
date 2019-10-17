export default {

  getAllRequest (state) {
    state.all = {
      items: []
    }
  },
  getAllSuccess (state, pelotoes) {
    state.all = { items: pelotoes.result }
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

  updateRequest (state, pelotao) {
    state.status = { registering: true }
  },
  updateSuccess (state, pelotao) {
    state.status = {}
  },
  updateFailure (state, pelotao) {
    state.status = {}
  },

  deleteRequest (state, id) {
    // add 'deleting:true' property to user being deleted
    state.all.items = state.all.items.map(
      pelotao => (pelotao.idPelotao === id ? { ...pelotao, deleting: true } : pelotao)
    )
  },
  deleteSuccess (state, id) {
    // remove deleted user from state
    state.all.items = state.all.items.filter(pelotao => pelotao.idPelotao !== id)
  },
  deleteFailure (state, { id, error }) {
    state.all.items = state.items.map(pelotao => {
      if (pelotao.idPelotao === id) {
        // make copy of user without 'deleting:true' property
        const { deleting, ...pelotaoCopy } = pelotao
        // return copy of user with 'deleteError:[error]' property
        return { ...pelotaoCopy, deleteError: error }
      }
      return pelotao
    })
  }
}
