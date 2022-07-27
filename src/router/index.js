import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from "../views/layout.vue"
Vue.use(VueRouter)
const routes = [{
        path: '/',
        redirect: layout
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login.vue')
    },
    {
        path: '/layout',
        name: 'layout',
        component: layout,
        children: [{
            path: '/user',
            name: 'user',
            component: () => import('../views/UserManagement/user.vue'),
        }, {
            path: '/vip',
            name: 'vip',
            component: () => import('../views/UserManagement/userVIP.vue'),
        }, {
            path: '/vvip',
            name: 'vvip',
            component: () => import('../views/UserManagement/userVVIP.vue'),
        }, ]
    },
    {
        path: '/404',
        name: '404',
        component: () => import('../components/404.vue')
    }

]
const router = new VueRouter({
    routes
})
export default router