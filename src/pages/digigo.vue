<template>
  <div>
    <div class="flex flex-col justify-center ">
      
      <div class="flex flex-col justify-center">
        <h1 class="text-center text-2xl font-bold">Certificat DIGIGO</h1>
        <p class="text-center text-gray-700 my-4">
          Veuillez remplir le formulaire ci dessous pour compléter votre demande
          d'un certificat DigiGO
        </p>
        <img :src="DigigoLOGO" alt="DiGIGO" class="w-48 mx-auto my-8" />
      </div>
      <div class="grid grid-cols-12 gap-8 px-16">
        <div class="col-span-6 flex flex-col justify-start">
          <h1 class="font-bold my-2 text-lg">type de piéce d"identité:</h1>
          <select class="py-3 px-4 pe-9 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none ">
  
  <option selected="">CIN</option>
  <option>Pasport</option>
  
</select>
        </div>
        <div class="col-span-6 flex flex-col justify-start">
          <h1 class="font-bold my-2 text-lg">Numéro de piéce d'identité:</h1>
          <input
            type="number"
            class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500"
            placeholder="Numéro de péce d'identité"
            
          />
        </div>
        
      </div>
      <div>
        <div class="flex items-center justify-center w-2/3 my-8 mx-auto ">
  <label
    for="dropzone-file"
    class="flex flex-col items-center justify-center w-full h-64  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
  >
    <div v-if="!imagePreview" class="flex flex-col items-center justify-center pt-5 pb-6">
      <svg
        class="w-8 h-8 mb-4 text-gray-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 16"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
        />
      </svg>
      <p class="mb-2 text-sm text-gray-500">
        <span class="font-semibold">Click to upload</span> or drag and drop
      </p>
      <p class="text-xs text-gray-500">
        SVG, PNG, JPG, JPEG (MAX. 800x400px)
      </p>
    </div>
    
    <img v-if="imagePreview" :src="imagePreview" alt="Signature Preview" class="max-w-full max-h-full object-contain" />
    <input
      id="dropzone-file"
      type="file"
      class="hidden"
      accept=".png, .jpg, .jpeg, .svg"
      @change="handleFileUpload"
    />
  </label>
</div>
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
