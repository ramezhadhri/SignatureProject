<template>
  <div>
    <div class="flex flex-col justify-center ">
      
      <div class="flex flex-col justify-center">
        <h1 class="text-center text-2xl font-bold">Certificat DIGIGO</h1>
        <!-- <p class="text-center text-gray-700 my-4">
          ajouter votre email digigo pour 
        </p> -->
        <img :src="DigigoLOGO" alt="DiGIGO" class="w-48 mx-auto mt-8" />
      </div>
   
      <div class=" flex flex-col justify-center m-auto w-1/2">
        <h1 class="font-bold my-2 text-lg">Email:</h1>
        <input
          type="text"
          class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500"
          placeholder="Email Compte DigiGo"
          :disabled="isDisabled"
          :readonly="isReadonly"
          v-model="nom"
        />
      </div>
    
     
      <button class="py-2 bg-yellow-500 mx-auto w-1/3 my-8">Confirmer</button>
    </div>
  </div>
</template>

<script>
import DigigoLOGO from "../assets/digigilogo.png";

export default {
  name: "certifDigigo",
  data() {
    return {
      DigigoLOGO,
      imagePreview: null,
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>
