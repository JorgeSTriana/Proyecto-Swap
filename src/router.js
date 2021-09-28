import Vue from 'vue';
import Router from 'vue-router';
import Login from '@views/auth/Login';
import Swap from '@/views/Swap'
import Perfil from '@components/Perfil';
/* import { component } from 'vue/types/umd'; */


Vue.use(Router);

export default new Router({
/* const router = new Router({  */  //para login
    mode:history,       //parte de configuracion de vue 
    routes:[
        {
            path: '/',
            name: 'swap',
            component: Swap
        },
        {
            path: 'perfil',     //cada ruta es un objeto path ruta a donde me dirijo despues del /
            name: 'perfil',
            component: Perfil
        },
        {
            path: '/user/:id',
            name: 'user-detail',
            component: UserDetail,
            meta:{
                requiresAuth: true,
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
});

router.beforeEach((to, from, next)=>{
    if(to.meta.requiresAuth){
//todo
        console.log(from);
        if(!localStorage.getItem('user')){
            next({
                name: 'login'
            });
        }else{
            next()
        }
    }else{
        next();
    }

});

