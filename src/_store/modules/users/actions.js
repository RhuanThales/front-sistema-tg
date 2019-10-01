import { userService } from '../../../_services'

export default {
  getAll ({ commit }) {
    commit('getAllRequest')
    userService.getAll()
      .then(
        users => commit('getAllSuccess', users),
        error => commit('getAllFailure', error)
      )
  },
  delete ({ commit }, id) {
    commit('deleteRequest', id)
    userService.delete(id)
      .then(
        user => commit('deleteSuccess', id),
        error => commit('deleteSuccess', { id, error: error.toString() })
      )
  }
}
