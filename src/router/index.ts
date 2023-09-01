import { createRouter, createWebHistory } from "vue-router"
const routes = [
    {
        path: '/index',
        name: 'index',
        component: () => import('/src/App.vue')
    },
    {
        path: '/self',
        name: 'self',
        component: () => import('/src/App.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
