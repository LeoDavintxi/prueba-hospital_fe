import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Registro from './components/Registro.vue'

const routes = [{
        path: '/',
        name: 'root',
        component: App
    },
    {
        path: '/user/registro',
        name: "registro",
        component: Registro
    }
    {
        path: '/consultar/pacientes',
        name: "consultaPacientes",
        component: ConsultaPacientes
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router