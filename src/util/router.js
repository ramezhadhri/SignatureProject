import AppLayout from "./AppLayout.vue"
import HomePage from "../pages/Homepage.vue"
import DemandeSignature from "../pages/demande_signature.vue"
import { createRouter, createWebHistory } from "vue-router";

const routes = [
   
    {
        path: "/",
        component: AppLayout,
        children: [
          {
            path: "",
            component: HomePage, 
          },{
            path: "/demande_signature",
            component:DemandeSignature ,
          }
        ],
      },
      
 
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;