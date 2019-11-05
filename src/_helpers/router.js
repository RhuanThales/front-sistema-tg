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
import DetalharPelotaoPage from '../views/pelotao/DetalharPelotaoPage'
import OficialPage from '../views/oficial/OficialPage'
import CadastrarOficialPage from '../views/oficial/CadastrarOficialPage'
import EscalaPage from '../views/escala/EscalaPage'
import CadastrarEscalaPage from '../views/escala/CadastrarEscalaPage'
import EditarEscalaPage from '../views/escala/EditarEscalaPage'
import DetalharEscalaPage from '../views/escala/DetalharEscalaPage'
import AtiradorPage from '../views/atirador/AtiradorPage'
import CadastrarAtiradorPage from '../views/atirador/CadastrarAtiradorPage'
import EditarAtiradorPage from '../views/atirador/EditarAtiradorPage'
import DetalharAtiradorPage from '../views/atirador/DetalharAtiradorPage'
import ChamadaPage from '../views/chamada/ChamadaPage'
import RegistrarChamadaPage from '../views/chamada/RegistrarChamadaPage'
import EditarChamadaPage from '../views/chamada/EditarChamadaPage'
import DeclaracaoPrestacaoServicoPage from '../views/declaracao/DeclaracaoPrestacaoServico'
import DeclaracaoServicoPermanenciaPage from '../views/declaracao/DeclaracaoServicoPermanencia'
import DeclaracaoServico24HorasPage from '../views/declaracao/DeclaracaoServico24Horas'
import DeclaracaoServicoNoturnoPage from '../views/declaracao/DeclaracaoServicoNoturno'
import DeclaracaoServicoFaculdadePage from '../views/declaracao/DeclaracaoServicoFaculdade'
import DeclaracaoOficioCircularPage from '../views/declaracao/DeclaracaoOficioCircular'
import ModeloDeclaracaoPage from '../views/declaracao/ModeloDeclaracaoPage'

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
    { path: '/pelotoes', name: 'Gerênciar Pelotões', component: PelotaoPage },
    { path: '/cadastrarPelotao', name: 'Cadastrar Pelotão', component: CadastrarPelotaoPage },
    { path: '/informacaoPelotao', name: 'Detalhes do Pelotão', component: DetalharPelotaoPage },
    // Oficial
    { path: '/oficiais', name: 'Gerênciar Oficiais', component: OficialPage },
    { path: '/cadastrarOficial', name: 'Cadastrar Oficial', component: CadastrarOficialPage },
    // Escala
    { path: '/escalas', name: 'Gerênciar Escalas', component: EscalaPage },
    { path: '/cadastrarEscala', name: 'Cadastrar Escala', component: CadastrarEscalaPage },
    { path: '/editarEscala', name: 'Editar Escala', component: EditarEscalaPage },
    { path: '/informacaoEscala', name: 'Detalhes da Escala', component: DetalharEscalaPage },
    // Atirador
    { path: '/atiradores', name: 'Gerênciar Atiradores', component: AtiradorPage },
    { path: '/cadastrarAtirador', name: 'Cadastrar Atirador', component: CadastrarAtiradorPage },
    { path: '/editarAtirador', name: 'Editar Atirador', component: EditarAtiradorPage },
    { path: '/informacoesAtirador', name: 'Informações do Atirador', component: DetalharAtiradorPage },
    // Chamada
    { path: '/chamadas', name: 'Chamadas Realizadas', component: ChamadaPage },
    { path: '/registrarChamada', name: 'Registro de Presença', component: RegistrarChamadaPage },
    { path: '/editarChamada', name: 'Editar Presença', component: EditarChamadaPage },
    // Declarações
    { path: '/modeloDeclaracao', name: 'Modelo Declaração', component: ModeloDeclaracaoPage },
    { path: '/prestacaoServico', name: 'Prestação de Serviço Militar', component: DeclaracaoPrestacaoServicoPage },
    { path: '/servicoPermanencia', name: 'Serviço de Permanência', component: DeclaracaoServicoPermanenciaPage },
    { path: '/servico24Horas', name: 'Serviço 24 horas', component: DeclaracaoServico24HorasPage },
    { path: '/servicoNoturno', name: 'Serviço Noturno', component: DeclaracaoServicoNoturnoPage },
    { path: '/servicoFaculdade', name: 'Declaração de Serviço para Faculdade', component: DeclaracaoServicoFaculdadePage },
    { path: '/oficioCircular', name: 'Oficio Circular Empregador - Empresa', component: DeclaracaoOficioCircularPage },
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
