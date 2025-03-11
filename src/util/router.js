import AppLayout from "./AppLayout.vue"
import HomePage from "../pages/Homepage.vue"
import DemandeSignature from "../pages/demande_signature.vue"
import { createRouter, createWebHistory } from "vue-router";
import Suivre_document from "../pages/suivre_document.vue";
import Informations from "../pages/informations.vue";
import Password from "../pages/password.vue";
import Signature from "../pages/signature.vue";
import Digigo from "../pages/digigo.vue";
import Signer from "../pages/signer.vue";
import ViewDocument from "../components/viewDocument.vue";
import Document from "../components/document.vue";
import Welcomepage from "../pages/Welcomepage.vue";
import Signup from "../pages/signup.vue";
import Login from "../pages/login.vue";
import Contactus from "../pages/contactus.vue";

const routes = [
   
    {
        path: "/home",
        component: AppLayout,
        children: [
          {
            path: "/home",
            component: HomePage, 
          },{
            path: "/demande_signature",
            component:DemandeSignature ,
          },{
            path: "/info",
            component:Informations ,
          },{
            path: "/password",
            component:Password ,
          },{
            path: "/signature",
            component:Signature ,
          },{
            path: "/certifdigigo",
            component:Digigo ,
          },{
            path: "/signer",
            component:Signer ,
          },{
             path: '/view-document/:id',
             component: ViewDocument,
             props: true 
          },{
            path: '/document/:id',
            component: Document,
            props: true 
         },{
          path: '/contactus',
          component: Contactus,
          props: true 
       }
        ],
      },
      {
        path: "/",
        component: Welcomepage,
      },
      {
        path: "/signup",
        component: Signup,
      },
      {
        path: "/login",
        component: Login,
      }
      
 
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;