let user = JSON.parse(localStorage.getItem('usuario'))
const state = user ? { status: { loggedIn: true }, user, mensagem: '' }
  : { status: {}, user: null, mensagem: '' }

export default {
  state
}
