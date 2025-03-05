<template>
  <div class="relative w-full h-full border-r  border-gray-200">
    <div
      class="Absolute top-0 left-0 flex flex-col justify-center items-center"
    >
      <!-- <div className="">
        <h1 class="text-lg my-4 text-center font-bold text-gray-600">
          Elise<span class="text-yellow-500">SIGN</span>
        </h1>
      </div> -->
      <div className=" w-full mt-16  ">
        <div class="w-full">
          <ul className=" flex flex-col w-full justify-center ">
            <li class="">
              <div
                class="flex flex-col justify-center transition-all duration-75"
              >
                <router-link
                to="/demande_signature"
                  
                  class="text-lg px-4 flex justify-between items-center  hover:bg-yellow-500  w-full py-2 h-full"
                >
                 
                  Demander une signature
                 
                  


                </router-link>
                
              </div>
            </li>
            <li class="">
              <div
                class="flex flex-col justify-center transition-all duration-75"
              >
                <router-link
                to="/signer"
                  
                  class="text-lg px-4 flex justify-between items-center    hover:bg-yellow-500  w-full py-2 h-full"
                >
                 document à signer 
                </router-link>
                
              </div>
            </li>
            <li class="">
              <div
                class="flex flex-col justify-center transition-all duration-75"
              >
                <button
                  @click="profil = !profil"
                  class="text-xl px-4 flex justify-between items-center    hover:bg-yellow-500  w-full py-2 h-full"
                >
                  <div
                    class="relative w-6 h-6 overflow-hidden bg-gray-100 rounded-full "
                  >
                    <svg
                    
                      class="absolute w-8 h-8 text-gray-400 -left-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  Mon Profile
                  <svg
                  v-show="!profil"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                  <svg  v-show="profil" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>

                </button>
                <div v-show="profil" class="flex flex-col justify-center">
                  <router-link  to="/info" class="text-start text-gray-700 text-md px-4 flex justify-start items-center font-bold  hover:bg-yellow-500  w-full py-2 h-full" 
                    >Mes Informations</router-link
                  >
                  <router-link  class="text-start  text-md px-4 text-gray-700 flex justify-start  items-center font-bold  hover:bg-yellow-500  w-full py-2 h-full" to="/password"
                    >Changer mots de passe</router-link
                  >
                  <router-link class="text-start  text-md px-4 text-gray-700  flexjustify-start  items-center font-bold  hover:bg-yellow-500  w-full py-2 h-full" to="/signature"
                    > Ma signature
                  </router-link>
                  <router-link class="text-start text-md px-4 flex text-gray-700 justify-start  items-center font-bold   hover:bg-yellow-500  w-full py-2 h-fullr" to="/certifdigigo"
                    >Certificat DIGIGO
                  </router-link>
                </div>
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
