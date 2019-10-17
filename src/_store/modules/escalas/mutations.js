export default {

  getAllRequest (state) {
    state.all = {
      items: []
    }
  },
  getAllSuccess (state, escalas) {
    state.all = { items: escalas.result }
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
    state.all.items = state.all.items.map(
      escala => (escala.idEscala === id ? { ...escala, deleting: true } : escala)
    )
  },
  deleteSuccess (state, id) {
    state.all.items = state.all.items.filter(escala => escala.idEscala !== id)
  },
  deleteFailure (state, { id, error }) {
    console.log('Deu ruim => ' + error)
    state.all.items = state.items.map(escala => {
      if (escala.idEscala === id) {
        const { deleting, ...escalaCopy } = escala
        return { ...escalaCopy, deleteError: error }
      }
      return escala
    })
  }
}
