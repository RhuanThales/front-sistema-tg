import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home'
import LoginPage from '../views/login/LoginPage'
import NotFound from '../views/home/404'
import UsuarioPage from '../views/usuario/UsuarioPage'
import CadastrarUsuarioPage from '../views/usuario/CadastrarUsuarioPage'
import EditarUsuarioPage from '../views/usuario/EditarUsuarioPage'
import PelotaoPage from '../views/pelotao/PelotaoPage'
import CadastrarPelotaoPage from '../views/pelotao/CadastrarPelotaoPage'
import OficialPage from '../views/oficial/OficialPage'
import CadastrarOficialPage from '../views/oficial/CadastrarOficialPage'
import EscalaPage from '../views/escala/EscalaPage'
import CadastrarEscalaPage from '../views/escala/CadastrarEscalaPage'
import EditarEscalaPage from '../views/escala/EditarEscalaPage'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home Page', component: Home },
    { path: '/404', name: '404', component: NotFound },
    { path: '/login', component: LoginPage },
    // Usuarios
    { path: '/usuarios', name: 'Gerênciar Usuários', component: UsuarioPage },
    { path: '/cadastrarUsuario', name: 'Cadastrar Usuário', component: CadastrarUsuarioPage },
    { path: '/editarUsuario', name: 'Editar Usuário', component: EditarUsuarioPage },
    // Pelotao
    { path: '/pelotoes', name: 'Gerênciar Pelotoes', component: PelotaoPage },
    { path: '/cadastrarPelotao', name: 'Cadastrar Pelotao', component: CadastrarPelotaoPage },
    // Oficial
    { path: '/oficiais', name: 'Gerênciar Oficiais', component: OficialPage },
    { path: '/cadastrarOficial', name: 'Cadastrar Oficial', component: CadastrarOficialPage },
    // Escala
    { path: '/escalas', name: 'Gerênciar Escalas', component: EscalaPage },
    { path: '/cadastrarEscala', name: 'Cadastrar Oficial', component: CadastrarEscalaPage },
    { path: '/editarEscala', name: 'Editar Escala', component: EditarEscalaPage },
    // Pagina 404
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
