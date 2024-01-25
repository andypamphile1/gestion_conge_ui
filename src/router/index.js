import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "../views/LoginView.vue"
import Listeconge from "../view/Listeconge.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path:"/LoginView",
    name:"LoginView",
    component:LoginView
   },
   {
    path:"/Listeconge",
    name:"Listeconge", 
    component:Listeconge
   }
  ]
})

export default router
