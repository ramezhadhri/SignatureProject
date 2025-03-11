<template>
  <div class="relative w-full h-full border-r border-gray-200">
    <div class="absolute top-0 left-0 w-full flex flex-col justify-center items-center">
      <div class="w-full mt-16">
        <div class="w-full">
          <ul class="flex flex-col w-full justify-center px-2">
            <li>
              <div class="flex flex-col justify-center transition-all duration-75">
                <router-link
                  to="/demande_signature"
                  class="text-center text-md px-4 flex  items-center text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 w-full py-2 h-full"
                  
                >
                <img src="https://i.imgur.com/NGuz9Wn.png" class="h-8 mx-2" alt="">
                  Demander  signature
                </router-link>
              </div>
            </li>
            <li>
              <div class="flex flex-col justify-center transition-all duration-75">
                <router-link
                  to="/signer"
                  class="text-center text-md px-4 flex  items-center text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 w-full py-2 h-full"
                  
                >
                <img src="https://i.imgur.com/h6oYtI7.png" class="h-8 mx-2" alt="">
                  Document à signer
                </router-link>
              </div>
            </li>
            <li>
              <div class="flex flex-col justify-center transition-all duration-75">
                <button
                  @click="profil = !profil"
                  class="hs-accordion-toggle w-full text-start flex items-center justify-around  gap-x-3.5 py-2 px-2.5 text-md text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 "
                  
                >
                  
                    <svg class="size-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0-4 4v2"/><path d="m21.7 16.4-.9-.3"/><path d="m15.2 13.9-.9-.3"/><path d="m16.6 18.7.3-.9"/><path d="m19.1 12.2.3-.9"/><path d="m19.6 18.7-.4-1"/><path d="m16.8 12.3-.4-1"/><path d="m14.3 16.6 1-.4"/><path d="m20.7 13.8 1-.4"/></svg>
                  
                  Mon Profile
                  
                  <svg
                    v-show="!profil"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                  <svg
                    v-show="profil"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                  </svg>
                </button>
                <div v-show="profil" class="flex flex-col justify-center">
                  <router-link
                    to="/info"
                    class="text-center text-md px-4 flex  items-center text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 w-full py-2 h-full"
                   
                  >
                  <img src="https://i.imgur.com/CYpM8ri.png" class="h-8 mx-2" alt="">
                    Mes Informations
                  </router-link>
                  <router-link
                    to="/password"
                    class="text-center text-md px-4 flex  items-center text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 w-full py-2 h-full"
                    
                  >
                  <img src="https://i.imgur.com/gFdf3lU.png" class="h-8 mx-2" alt="">
                     Mot de passe
                  </router-link>
                  <router-link
                    to="/signature"
                    class="text-center text-md px-4 flex  items-center text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 w-full py-2 h-full"
                   
                  >
                  <img src="https://i.imgur.com/sipjAkg.png" class="h-10 mx-2" alt="">
                    Ma signature
                  </router-link>
                  <router-link
                    to="/certifdigigo"
                    class="text-center text-md px-4 flex  items-center text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 w-full py-2 h-full"
                   
                  >
                  <img src="https://i.imgur.com/doqjy1g.png" class="h-8 w-10 mx-2" alt="">
                    Certificat DIGIGO
                  </router-link>
                </div>
              </div>
            </li>
            <li>
              <div class="flex flex-col justify-center transition-all duration-75">
                <router-link
                  to="/contactus"
                  class="text-center text-md px-4 flex  items-center text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 w-full py-2 h-full"
                  
                >
                <img src="https://i.imgur.com/Wbc5e8v.png" class="h-8 mx-2" alt="">
                Nous Contacter 
                </router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      profil: false,
    };
  },
 
};
</script>
