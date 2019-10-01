export default {
  success (state, message) {
    state.type = 'alert-success'
    state.message = message
  },
  error (state, message) {
    state.type = 'alert-danger'
    state.message = message
  },
  clear (state) {
    state.type = null
    state.message = null
  }
}
