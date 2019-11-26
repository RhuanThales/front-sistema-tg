import { frequenciaService } from '../../../_services'

export default {
  getAll ({ commit }) {
    commit('getAllRequest')
    frequenciaService.getAll().then(
      frequencia => commit('getAllSuccess', frequencia),
      error => commit('getAllFailure', error)
    )
  },
  getFrequenciasPorAtirador ({ commit }, crAtirador) {
    commit('getFrequenciasPorAtiradorRequest')
    frequenciaService.getFrequenciasPorAtirador(crAtirador).then(
      frequencia => commit('getFrequenciasPorAtiradorSuccess', frequencia),
      error => commit('getFrequenciasPorAtiradorFailure', error)
    )
  }
}
