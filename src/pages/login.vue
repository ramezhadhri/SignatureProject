<template>
  <div class="h-full grid grid-cols-12">
    <div class="col-span-6 flex flex-col ">
      <div class="flex justify-center">
        <router-link to="/" class="text-7xl  font-bold text-gray-600 text-center mb-4">
          Elise<span class="text-yellow-500">SIGN</span>
        </router-link>
      </div>
      <div class="flex my-4 justify-center">
        <button
          class="py-2 px-4 rounded-full w-1/3 mx-4 text-xl  text-center font-bold bg-gray-600 text-white"
        >
          J'ai un compte
      </button>
        <router-link to="/signup"
          class="py-2 px-4 rounded-full w-1/3 text-center border border-black border-2 mx-4 text-xl font-bold text-gray-600"
        >
          créer un compte
        </router-link>
      </div>
      <div class="flex flex-col justify-center">
        <h1 class="text-3xl font-bold text-center my-2 text-gray-600">
          Connexion
        </h1>
        <form class="flex flex-col justify-center px-8 w-2/3 mx-auto py-4">

          <label for="email" class="text-lg font-bold my-2 text-gray-600"
            >Email:</label
          >
          <input
            type="email"
            id="email"
            class="py-2 px-4 block w-full border border-gray-200 rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500"
            placeholder="Email"
            v-model="form.email"
          />
          <label for="password" class="text-lg font-bold my-2 text-gray-600"
            >Mot de passe:</label
          >
          <input
            type="password"
            id="password"
            class="py-2 px-4 block w-full border border-gray-200 rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500"
            placeholder="Mot de passe"
            v-model="form.password"
          />
          <router-link to="/forgot-password" class="text-blue-500 text-md mt-1 text-center mt-4">Mot de passe oublié ?</router-link>

          <router-link  to="/home" class="py-2 px-6 bg-yellow-500 text-white text-lg font-bold rounded-lg text-center  mx-auto w-1/2 my-4">
      Se connecter
    </router-link>
        </form>
      </div>
    </div>
    <div
      class="col-span-6 flex flex-col justify-center bg-gray-200 px-4 h-screen w-full"
    >
      <img src="https://i.imgur.com/xjnKQW6.png" alt="" class=" " />
    </div>
  </div>
</template>
<script>
import { RouterLink } from 'vue-router';

export default {
  name: "Login",
  data(){
    return{
        form: {
        
        email: '',
       
        password: '',
      }
    }
  },
  methods:{
   
  }
};
</script>
