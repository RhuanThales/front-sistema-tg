import { userService } from '../../../_services'
import { router } from '../../../_helpers'

export default {
  login ({ dispatch, commit }, { email, senha }) {
    commit('loginRequest', { email })
    userService.login(email, senha)
      .then(
        user => {
          commit('loginSuccess', user)
          router.push('/')
        },
        error => {
          commit('loginFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  logout ({ commit }) {
    userService.logout()
    commit('logout')
  },
  register ({ dispatch, commit }, user) {
    commit('registerRequest', user)
    userService.register(user)
      .then(
        user => {
          commit('registerSuccess', user)
          router.push('/home')
          setTimeout(() => {
            dispatch('alert/success', 'Registration successful', { root: true })
          })
        },
        error => {
          commit('registerFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  }
}
