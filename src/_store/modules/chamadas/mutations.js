export default {
  getAllRequest (state) {
    state.all = {
      items: []
    }
  },
  getAllSuccess (state, chamadas) {
    state.all = { items: chamadas.result }
  },
  getAllFailure (state, error) {
    state.all = { error }
  },

  registerRequest (state, chamada) {
    state.status = { registering: true }
  },
  registerSuccess (state, chamada) {
    state.status = { chamada }
  },
  registerFailure (state, error) {
    state.status = { error }
  },

  confirmarChamadaRequest (state, idChamada) {
    state.status = { updating: true }
  },
  confirmarChamadaSuccess (state, idChamada) {
    state.status = {}
    console.log('Id Chamada na mutation => ' + idChamada)
  },
  confirmarChamadaFailure (state, error) {
    state.status = { error }
  },

  deleteRequest (state, id) {
    // add 'deleting:true' property to user being deleted
    state.all.items = state.all.items.map(
      chamada => (chamada.idChamada === id ? { ...chamada, deleting: true } : chamada)
    )
  },
  deleteSuccess (state, id) {
    // remove deleted user from state
    state.all.items = state.all.items.filter(chamada => chamada.idChamada !== id)
  },
  deleteFailure (state, { id, error }) {
    state.all.items = state.items.map(chamada => {
      if (chamada.idChamada === id) {
        // make copy of user without 'deleting:true' property
        const { deleting, ...atiradorCopy } = chamada
        // return copy of user with 'deleteError:[error]' property
        return { ...atiradorCopy, deleteError: error }
      }
      return chamada
    })
  }
}
