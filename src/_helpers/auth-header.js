export function authHeader () {
  let user = JSON.parse(localStorage.getItem('usuario'))
  if (user && user.value.token) {
    return { 'Authorization': 'Bearer ' + user.value.token }
  } else {
    return {}
  }
}
