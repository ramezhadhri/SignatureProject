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
import Forgotpassword from "../pages/forgotpassword.vue";
import Verfieremail from "../pages/verfieremail.vue";
import SignerExistant from "../pages/signerExistant.vue";

const routes = [
   
    {
        path: "/home",
        component: AppLayout,
        children: [
          {
            path: "/home",
            component: HomePage, 
            meta: { requiresAuth: true }
          },{
            path: "/demande_signature",
            component:DemandeSignature ,
            meta: { requiresAuth: true }
          },{
            path: "/info",
            component:Informations ,
            meta: { requiresAuth: true }
          },{
            path: "/password",
            component:Password ,
            meta: { requiresAuth: true }

          },{
            path: "/signature",
            component:Signature ,
            meta: { requiresAuth: true }
          },{
            path: "/certifdigigo",
            component:Digigo ,
            meta: { requiresAuth: true }
          },{
            path: "/signer",
            component:Signer ,
            meta: { requiresAuth: true }
          },{
             path: '/view-document/:id',
             component: ViewDocument,
             props: true ,
             meta: { requiresAuth: true }
          },{
            path: '/document/:id',
            component: Document,
            props: true ,
            meta: { requiresAuth: true }
         },{
          path: '/contactus',
          component: Contactus,
          props: true ,
          meta: { requiresAuth: true }
       },{
        path: '/signer-existant',
        component: SignerExistant,
        props: true ,
        meta: { requiresAuth: true }
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
      },{
        path: "/forgot-password",
        component: Forgotpassword,
      },{
        path: "/verify-email",
        component: Verfieremail,
      }
      
 
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("authToken");

  if (to.meta.requiresAuth && !token) {
    next("/login");  
  } else if ((to.path === "/login" || to.path === "/signup" || to.path === "/") && token) {
    next("/home"); 
  } else {
    next();
  }
});


export default router;