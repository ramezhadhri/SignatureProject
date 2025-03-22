<template>
  <div>
    <h1 class="text-center text-3xl font-bold my-16">Mes Informations:</h1>
    <div class="grid grid-cols-12 gap-24 px-16">
      <div class="col-span-6 flex flex-col justify-start">
        <h1 class="font-bold my-2 text-lg">Prénom:</h1>
        <input
          type="text"
          class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500"
          placeholder="prénom"
          :disabled="isDisabled"
          :readonly="isReadonly"
          v-model="prenom"
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
        <div class="flex items-center border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500">
          <label class="mx-2">
            <img width="40" height="40" src="https://img.icons8.com/color/48/tunisia.png" alt="tunisia" />
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
    <div class="flex justify-center">
      <button
        type="button"
        class="py-4 px-16 bg-yellow-600 my-8 text-xl rounded-xl font-bold"
        @click="toggleEdit"
      >
        {{ isEditing ? "Enregistrer" : "Modifier" }}
      </button>
    </div>
  </div>
</template>

<script>
import { jwtDecode } from 'jwt-decode';

export default {
  name: "Information",
  data() {
    return {
      isEditing: false,
      isDisabled: true,
      isReadonly: true,
      prenom: "", // Initialize as empty strings to prevent "undefined" in inputs
      nom: "",
      email: "",
      telephone: "",
      userinfo: null,
    };
  },
  mounted() {
    this.myinfo();
  },
  methods: {
    toggleEdit() {
      this.isEditing = !this.isEditing;
      this.isDisabled = !this.isDisabled;
      this.isReadonly = !this.isReadonly;
    },
    myinfo() {
      const token = localStorage.getItem("authToken");
      if (token) {
        try {
          console.log("token info:" + token);
          this.userinfo = jwtDecode(token);
          console.log("userinfo:" + this.userinfo);

          
          this.email = this.userinfo.email || ""; 
          this.prenom = this.userinfo.prenom || "";
          this.nom = this.userinfo.nom || "";
          this.telephone = this.userinfo.phone || "";
        } catch (error) {
          console.error("Invalid token:", error);
          localStorage.removeItem("authToken");
          this.$router.push("/");
        }
      } else {
        console.log("No token found");
         this.$router.push("/");
      }
    },
  },
};
</script>