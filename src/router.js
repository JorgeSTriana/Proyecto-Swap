import Vue from 'vue';
import Router from 'vue-router';
/* import Login from '@views/auth/Login'; */
import Swap from '@/views/Swap'
import Error from '@/views/Error404';
import Perfil from '@/views/Perfil';
import Cambio from '@/views/Cambio';
import Login from '@/views/Login';



Vue.use(Router);

export default new Router({
/* const router = new Router({  */  //para login
    mode: 'history',       //parte de configuracion de vue 
    routes:[
        {
            path: '/Swap',
            name: 'swap',
            component: Swap
        },
        {
            path: '*',     //cada ruta es un objeto path ruta a donde me dirijo despues del /
            name: 'Error',
            component: Error
        },
        {
            path: '/Perfil',     //cada ruta es un objeto path ruta a donde me dirijo despues del /
            name: 'perfil',
            component: Perfil
        },
        
        {
            path: '/Cambio',     //cada ruta es un objeto path ruta a donde me dirijo despues del /
            name: 'Cambio',
            component: Cambio
        },

        {
            path: '/Login',     //cada ruta es un objeto path ruta a donde me dirijo despues del /
            name: 'Login',
            component: Login
        },
        /* {
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
        } */
    ]
});

/* router.beforeEach((to, from, next)=>{
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

 */