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
         }
        ],
      },
      
 
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;