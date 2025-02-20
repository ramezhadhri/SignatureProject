<template>
  <div class="">
    <h1 class="text-center text-5xl font-bold my-8">Demandez une signature</h1>
    <div class="">
      <div v-if="currentStep === 0" id="step-0">
        <div class="flex flex-col justify-center border border-black border-4">
          <div class="w-full my-8">
            <!-- Stepper -->
            <ul class="relative flex flex-col md:flex-row gap-2 my-4 mx-8">
              <!-- Item -->
              <li
                class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block"
              >
                <div
                  class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle"
                >
                  <span
                    class="size-7 flex justify-center items-center shrink-0 bg-[#2563eb] font-medium text-gray-100 rounded-full"
                  >
                    1
                  </span>
                  <div
                    class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"
                  ></div>
                </div>
                <div class="grow md:grow-0 md:mt-3 pb-5">
                  <span class="block text-sm font-medium text-gray-800">
                    Chargez des documents
                  </span>
                  <p class="text-sm text-gray-500">
                    Chargez vos documents PDF à faire signer
                  </p>
                </div>
              </li>
              <!-- End Item -->

              <!-- Item -->
              <li
                class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block"
              >
                <div
                  class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle"
                >
                  <span
                    class="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full"
                  >
                    2
                  </span>
                  <div
                    class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"
                  ></div>
                </div>
                <div class="grow md:grow-0 md:mt-3 pb-5">
                  <span class="block text-sm font-medium text-gray-800">
                    Saisissez les signataires.
                  </span>
                  <p class="text-sm text-gray-500">
                    Saisissez les signataires qui vont signer votre document.
                  </p>
                </div>
              </li>
              <!-- End Item -->

              <!-- Item -->
              <li
                class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block"
              >
                <div
                  class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle"
                >
                  <span
                    class="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full"
                  >
                    3
                  </span>
                  <div
                    class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"
                  ></div>
                </div>
                <div class="grow md:grow-0 md:mt-3 pb-5">
                  <span class="block text-sm font-medium text-gray-800">
                    Positionnez les signatures
                  </span>
                  <p class="text-sm text-gray-500">
                    Positionnez les signatures à l’endroit souhaité .
                  </p>
                </div>
              </li>
              <li
                class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block"
              >
                <div
                  class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle"
                >
                  <span
                    class="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full"
                  >
                    4
                  </span>
                  <div
                    class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"
                  ></div>
                </div>
                <div class="grow md:grow-0 md:mt-3 pb-5">
                  <span class="block text-sm font-medium text-gray-800">
                    Demandez une signature
                  </span>
                  <p class="text-sm text-gray-500">
                    Envoyez votre demande de signature
                  </p>
                </div>
              </li>
              <!-- End Item -->
            </ul>
            <!-- End Stepper -->
          </div>
          <div class="block">
            <div class="mx-8">
              <h1 class="text-start text-2xl font-bold">
                Chargez vos documents PDF :
              </h1>
            </div>
            <div class="mx-8 my-4 flex items-center">
              <div><h1 class="mx-2">Document PDF :</h1></div>

              <div>
                <input
                  type="file"
                  accept="application/pdf"
                  class="block w-full text-sm text-gray-500 file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:disabled:opacity-50 file:disabled:pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="currentStep === 1" id="step-1">
        <div class="flex flex-col justify-center  border border-black border-4 ">
    <div class=" w-full my-8   "><!-- Stepper -->
<ul class="relative flex flex-col md:flex-row gap-2 my-4 mx-8">
  <!-- Item -->
  <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
    <div class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
      <span class="size-7 flex justify-center items-center shrink-0 bg-[#2563eb] font-medium text-gray-100 rounded-full ">
        1
      </span>
      <div class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden "></div>
    </div>
    <div class="grow md:grow-0 md:mt-3 pb-5">
      <span class="block text-sm font-medium text-gray-800 ">
        Chargez  des documents
      </span>
      <p class="text-sm text-gray-500 ">
        Chargez vos documents PDF à  faire signer 
      </p>
    </div>
  </li>
  

  
  <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
    <div class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
      <span class="size-7 flex justify-center items-center shrink-0 bg-[#2563eb] font-medium text-gray-100 rounded-full ">
        2
      </span>
      <div class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden "></div>
    </div>
    <div class="grow md:grow-0 md:mt-3 pb-5">
      <span class="block text-sm font-medium text-gray-800 ">
        Saisissez les signataires.
      </span>
      <p class="text-sm text-gray-500 ">
        Saisissez les signataires qui vont signer votre document.
      </p>
    </div>
  </li>
  <!-- End Item -->

  <!-- Item -->
  <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
    <div class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
      <span class="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full">
        3
      </span>
      <div class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden "></div>
    </div>
    <div class="grow md:grow-0 md:mt-3 pb-5">
      <span class="block text-sm font-medium text-gray-800 ">
        Positionnez les signatures
      </span>
      <p class="text-sm text-gray-500">
        Positionnez les signatures à l’endroit souhaité .
      </p>
    </div>
  </li>
  <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
    <div class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
      <span class="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full">
        4
      </span>
      <div class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden "></div>
    </div>
    <div class="grow md:grow-0 md:mt-3 pb-5">
      <span class="block text-sm font-medium text-gray-800 ">
        Demandez une signature 
      </span>
      <p class="text-sm text-gray-500">
        Envoyez votre demande de signature 
      </p>
    </div>
  </li>
  <!-- End Item -->
</ul>
<!-- End Stepper --></div>
 <div class="block ">
    <div class="mx-8"><h1 class="text-start text-2xl font-bold">Chargez vos documents PDF :</h1></div>
    <div class=" mx-8  my-4  flex items-center  ">
       <div> <h1 class="mx-2 ">Document PDF :</h1></div>
      
          
         <div> <input
            type="file"
            accept="application/pdf" class="block w-full text-sm text-gray-500 file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:disabled:opacity-50 file:disabled:pointer-events-none "
          /></div>
     
    </div>
 </div>
   
  </div>
      </div>
      <div v-if="currentStep === 2" id="step-2">
        <div class="flex flex-col justify-center  border border-black border-4 ">
    <div class=" w-full my-8   "><!-- Stepper -->
<ul class="relative flex flex-col md:flex-row gap-2 my-4 mx-8">
  <!-- Item -->
  <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
    <div class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
      <span class="size-7 flex justify-center items-center shrink-0 bg-[#2563eb] font-medium text-gray-100 rounded-full ">
        1
      </span>
      <div class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden "></div>
    </div>
    <div class="grow md:grow-0 md:mt-3 pb-5">
      <span class="block text-sm font-medium text-gray-800 ">
        Chargez  des documents
      </span>
      <p class="text-sm text-gray-500 ">
        Chargez vos documents PDF à  faire signer 
      </p>
    </div>
  </li>
  <!-- End Item -->

  <!-- Item -->
  <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
    <div class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
      <span class="size-7 flex justify-center items-center shrink-0 bg-[#2563eb] font-medium text-gray-100 rounded-full ">
        2
      </span>
      <div class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden "></div>
    </div>
    <div class="grow md:grow-0 md:mt-3 pb-5">
      <span class="block text-sm font-medium text-gray-800 ">
        Saisissez les signataires.
      </span>
      <p class="text-sm text-gray-500 ">
        Saisissez les signataires qui vont signer votre document.
      </p>
    </div>
  </li>
  <!-- End Item -->

  <!-- Item -->
  <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
    <div class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
      <span class="size-7 flex justify-center items-center shrink-0 bg-[#2563eb] font-medium text-gray-100 rounded-full">
        3
      </span>
      <div class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden "></div>
    </div>
    <div class="grow md:grow-0 md:mt-3 pb-5">
      <span class="block text-sm font-medium text-gray-800 ">
        Positionnez les signatures
      </span>
      <p class="text-sm text-gray-500">
        Positionnez les signatures à l’endroit souhaité .
      </p>
    </div>
  </li>
  <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
    <div class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
      <span class="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full">
        4
      </span>
      <div class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden "></div>
    </div>
    <div class="grow md:grow-0 md:mt-3 pb-5">
      <span class="block text-sm font-medium text-gray-800 ">
        Demandez une signature 
      </span>
      <p class="text-sm text-gray-500">
        Envoyez votre demande de signature 
      </p>
    </div>
  </li>
  <!-- End Item -->
</ul>
<!-- End Stepper --></div>
 <div class="block ">
    <div class="mx-8"><h1 class="text-start text-2xl font-bold">Chargez vos documents PDF :</h1></div>
    <div class=" mx-8  my-4  flex items-center  ">
       <div> <h1 class="mx-2 ">Document PDF :</h1></div>
      
          
         <div> <input
            type="file"
            accept="application/pdf" class="block w-full text-sm text-gray-500 file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:disabled:opacity-50 file:disabled:pointer-events-none "
          /></div>
     
    </div>
 </div>
   
  </div>
      </div>
      <div v-if="currentStep === 3" id="step-3">
        <div class="flex flex-col justify-center  border border-black border-4 ">
    <div class=" w-full my-8   "><!-- Stepper -->
<ul class="relative flex flex-col md:flex-row gap-2 my-4 mx-8">
  <!-- Item -->
  <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
    <div class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
      <span class="size-7 flex justify-center items-center shrink-0 bg-[#2563eb] font-medium text-gray-100 rounded-full ">
        1
      </span>
      <div class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden "></div>
    </div>
    <div class="grow md:grow-0 md:mt-3 pb-5">
      <span class="block text-sm font-medium text-gray-800 ">
        Chargez  des documents
      </span>
      <p class="text-sm text-gray-500 ">
        Chargez vos documents PDF à  faire signer 
      </p>
    </div>
  </li>
  <!-- End Item -->

  <!-- Item -->
  <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
    <div class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
      <span class="size-7 flex justify-center items-center shrink-0 bg-[#2563eb] font-medium text-gray-100 rounded-full">
        2
      </span>
      <div class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden "></div>
    </div>
    <div class="grow md:grow-0 md:mt-3 pb-5">
      <span class="block text-sm font-medium text-gray-800 ">
        Saisissez les signataires.
      </span>
      <p class="text-sm text-gray-500 ">
        Saisissez les signataires qui vont signer votre document.
      </p>
    </div>
  </li>
  <!-- End Item -->

  <!-- Item -->
  <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
    <div class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
      <span class="size-7 flex justify-center items-center shrink-0 bg-[#2563eb] font-medium text-gray-100 rounded-full">
        3
      </span>
      <div class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden "></div>
    </div>
    <div class="grow md:grow-0 md:mt-3 pb-5">
      <span class="block text-sm font-medium text-gray-800 ">
        Positionnez les signatures
      </span>
      <p class="text-sm text-gray-500">
        Positionnez les signatures à l’endroit souhaité .
      </p>
    </div>
  </li>
  <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
    <div class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
      <span class="size-7 flex justify-center items-center shrink-0 bg-[#2563eb] font-medium text-gray-100 rounded-full">
        4
      </span>
      <div class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden "></div>
    </div>
    <div class="grow md:grow-0 md:mt-3 pb-5">
      <span class="block text-sm font-medium text-gray-800 ">
        Demandez une signature 
      </span>
      <p class="text-sm text-gray-500">
        Envoyez votre demande de signature 
      </p>
    </div>
  </li>
  <!-- End Item -->
</ul>
<!-- End Stepper --></div>
 <div class="block ">
    <div class="mx-8"><h1 class="text-start text-2xl font-bold">Chargez vos documents PDF :</h1></div>
    <div class=" mx-8  my-4  flex items-center  ">
       <div> <h1 class="mx-2 ">Document PDF :</h1></div>
      
          
         <div> <input
            type="file"
            accept="application/pdf" class="block w-full text-sm text-gray-500 file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:disabled:opacity-50 file:disabled:pointer-events-none "
          /></div>
     
    </div>
 </div>
   
  </div>
      </div>
    </div>

    <div class="flex justify-between mx-8 my-4">
      <button
        class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
        @click="prevStep"
        :disabled="currentStep === 0"
      >
        <svg
          class="shrink-0 size-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M19 12H5"></path>
          <path d="m12 19-7-7 7-7"></path>
        </svg>
        Etape Précédente
      </button>
      <button
        class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        @click="nextStep"
        :disabled="currentStep === steps.length - 1"
      >
        Etape Suivante
        <svg
          class="shrink-0 size-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: "DemandeSignature",
  data() {
    return {
      currentStep: 0,
      steps: [
        { id: "step-0" },
        { id: "step-1" },
        { id: "step-2" },
        { id: "step-3" },
      ],
      
    };
  },
  methods: {
    nextStep() {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
      }
    },
  },
};
</script>

<style scoped>
.stepper-container {
  text-align: center;
  padding: 20px;
}
.buttons {
  margin-top: 20px;
}
button {
  margin: 5px;
  padding: 10px;
  cursor: pointer;
}
</style>
