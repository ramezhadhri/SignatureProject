<template>
    <div class="flex flex-col justify-center mx-auto w-1/2 border border-black border-2 p-8">
      <h1 class="text-center font-bold my-4 text-lg">Ajouter une photo de votre signature</h1>
      <div class="flex items-center justify-center w-full">
        <label
          for="dropzone-file"
          v-if="!signatureImg"
          class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
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
          <input
            id="dropzone-file"
            type="file"
            class="hidden"
            accept=".png, .jpg, .jpeg, .svg"
            @change="handleFileUpload"
          />
        </label>
  
        <div v-if="signatureImg" class="flex flex-col justify-center items-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50">
          <img :src="signatureImg" alt="Signature Preview" class="max-w-full max-h-full object-contain" />
        </div>
      </div>
  
      <!-- <button
        v-if="!signatureImg"
        class="my-8 px-8 py-4 bg-yellow-600 text-white rounded-md"
      >
        Ajouter Signature
      </button> -->
  
      
  
      <button
        v-if="signatureImg"
        @click="signatureImg=``"
        class="my-8 px-8 py-4 bg-green-600 text-white rounded-md"
      >
        Update
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        signatureImg: "",
        base64Image: "",
      };
    },
    methods: {
      handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
          const validTypes = ["image/png", "image/jpeg", "image/jpg", "image/svg+xml"];
          if (!validTypes.includes(file.type)) {
            alert("Invalid file type! Please upload PNG, JPG, JPEG, or SVG images.");
            return;
          }
  
          const reader = new FileReader();
          reader.onload = () => {
            this.signatureImg = reader.result;
            this.saveSignature() ;
          };
          reader.readAsDataURL(file);

        }
      },
  
      saveSignature() {
        if (this.signatureImg) {
          

          this.base64Image = this.signatureImg;
          console.log("Base64 Image:", this.base64Image);
          alert(" upload a signature fait avec succes.");
         
        } else {
          alert("Please upload a signature first.");
        }
      },
  
      
    },
  };
  </script>
  
  <style scoped>
  </style>
  