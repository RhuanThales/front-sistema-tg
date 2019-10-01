import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home'
import LoginPage from '../views/login/LoginPage'
import NotFound from '../views/home/404'
import UsuarioPage from '../views/usuario/UsuarioPage'
import CadastrarUsuarioPage from '../views/usuario/CadastrarUsuarioPage'
import EditarUsuarioPage from '../views/usuario/EditarUsuarioPage'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home Page', component: Home },
    { path: '/404', name: '404', component: NotFound },
    { path: '/login', component: LoginPage },
    { path: '/usuarios', name: 'Gerênciar Usuários', component: UsuarioPage },
    { path: '/cadastrarUsuario', name: 'Cadastrar Usuário', component: CadastrarUsuarioPage },
    { path: '/editarUsuario', name: 'Editar Usuário', component: EditarUsuarioPage },
    { path: '*', redirect: '/404' }
  ]
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('usuario')
  if (authRequired && !loggedIn) {
    return next('/login')
  }
  next()
})
