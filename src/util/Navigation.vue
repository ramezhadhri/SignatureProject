<template>
    
  <div>
    <nav class="rounded border-gray-200 px-2 py-2 md:px-8 md:py-2.5">
      <div class="container mx-auto flex items-center justify-between">
        <RouterLink to="/" class="flex items-center mx-2">
          <img
            loading="eager"
            src="../assets/neoledge_rvb_.png"
            class="h-12 md:h-16 "
            alt="TSYP 12"
          />
          
        </RouterLink>
        
        <div class="flex items-center gap-2">
          <div class="hidden w-auto items-center justify-between lg:flex">
            <ul class="flex flex-col rounded-lg border border-gray-100 p-4 dark:border-gray-700 md:mt-0 md:flex-row md:border-0 md:text-sm md:font-medium">
       <li>
        <router-link to="/" class="block p-4 text-black transition-all duration-75 hover:font-bold ">Home</router-link>

       </li><li>
        <router-link to="/demande_signature" class="block p-4 text-black transition-all duration-75 hover:font-bold ">demande de signature </router-link>
        
       </li>
            </ul>
          </div>

         

         
        </div>
      </div>
      <!-- <NavModal v-if="toggleModal" @close="toggleModal = false" /> -->
    </nav>
  </div>
</template>



 
  
  

<script>

import { RouterLink } from "vue-router";
import { ChevronDownIcon } from "@heroicons/vue/24/outline";
//import NavModal from "../components/NavModal.vue";


export default {
    name:"Navigation",
  components: { RouterLink, ChevronDownIcon },
}
</script>