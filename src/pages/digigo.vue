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
          <h1 class="font-bold my-2 text-lg">Prénom:</h1>
          <input
            type="text"
            class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500"
            placeholder="prénom"
          />
        </div>
        <div class="col-span-6 flex flex-col justify-start">
          <h1 class="font-bold my-2 text-lg">Nom:</h1>
          <input
            type="text"
            class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500"
            placeholder="Nom"
            :disabled="isDisabled"
            :readonly="isReadonly"
            v-model="nom"
          />
        </div>
        <div class="col-span-6 flex flex-col justify-start">
          <h1 class="font-bold my-2 text-lg">Email:</h1>
          <input
            type="text"
            class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500"
            placeholder="email"
            :disabled="isDisabled"
            :readonly="isReadonly"
            v-model="email"
          />
        </div>
        <div class="col-span-6 flex flex-col justify-start">
          <h1 class="font-bold my-2 text-lg">Téléphone:</h1>
          <div
            class="flex items-center border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500"
          >
            <label class="mx-2">
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/color/48/tunisia.png"
                alt="tunisia"
              />
            </label>
            <input
              type="text"
              class="block w-full text-lg py-3 px-4"
              placeholder="Télephone"
              :disabled="isDisabled"
              :readonly="isReadonly"
              v-model="telephone"
              pattern="[0-9]{8}"
            />
          </div>
        </div>
      </div>
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
    };
  },
};
</script>
