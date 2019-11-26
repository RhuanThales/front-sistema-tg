export default {
  getAllRequest (state) {
    state.all = {
      items: []
    }
  },
  getAllSuccess (state, frequencia) {
    state.all = { items: frequencia.result }
  },
  getAllFailure (state, error) {
    state.all = { error }
  },
  getFrequenciasPorAtiradorRequest (state) {
    state.all = {
      items: []
    }
  },
  getFrequenciasPorAtiradorSuccess (state, frequencia) {
    state.all = { items: frequencia.result }
  },
  getFrequenciasPorAtiradorFailure (state, error) {
    state.all = { error }
  }
}
