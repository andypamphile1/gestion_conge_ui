import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "../views/LoginView.vue"
import GestionConge from "../views/GestionConge.vue"
import ListeEmploye from "../views/ListeEmploye.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/LoginView"
    },
    {
      path: "/LoginView",
      name: "LoginView",
      component: LoginView
    },
    {
      path: "/GestionConge",
      name: "GestionConge",
      component: GestionConge
    },
    {
      path: "/ListeEmploye",
      name: "ListeEmploye",
      component: ListeEmploye
    }
  ]
})

export default router

