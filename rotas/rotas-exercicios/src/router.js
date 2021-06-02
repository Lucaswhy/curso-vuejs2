import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/inicio';
//import Usuario from './components/usuario/Usuario'
// import Menu from './components/template/Menu'
//import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
//import UsuarioEditar from './components/usuario/UsuarioEditar'

Vue.use(Router);
//Carregar em partes
const Usuario = () => import(/* webpackChunkName: "usuario" */'./components/usuario/Usuario');
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioLista');
const UsuarioEditar = () => import('./components/usuario/UsuarioEditar');

const router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition;
        else if (to.hash) return { selector: to.hash };
        else return { x: 0, y: 0 };
    },
    // return { x: 0, y: 1000 }
    routes: [{
        name: 'inicio',
        path: '/',
        component: Inicio,
        // components: {
        //     default: Inicio,
        //     menu: Menu
        // }
    }, {
        path: '/usuario',
        component: Usuario,
        //Para duplicar componentes, transformo isso em uma propriedade com atributos e envio os componentes para serem renderizados com o router-view
        // components: {
        //     default: Usuario,
        //     menu: MenuAlt //(nome do import do arquivo)
        //     menuInferior: MenuAlt // transforma em classe no router-view
        // }, 
        props: true,
        children: [
            { path: '', component: UsuarioLista },
            {
                path: ':id', component: UsuarioDetalhe, props: true,
                beforeEnter: (to, from, next) => {
                    console.log("antes da rota -> usuário detalhe");
                    next();
                }
            },
            { path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario' },
        ]
    }, {
        path: '/redirecionar',
        redirect: '/usuario'
    }, {
        path: '*',
        redirect: '/'
    }]
})

router.beforeEach((to, from, next) => {
    console.log('Antes das rotas -> global');
    // if (to.path !== '/usuario') next('/usuario');
    // else next();
    //next('false');
    next();
})

export default router