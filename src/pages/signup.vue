<template>
  <div class=" h-full grid grid-cols-12  ">
    <div class="col-span-6 flex flex-col   ">
      <div class="flex justify-center">
        <router-link to="/" class="text-7xl  font-bold text-gray-600 text-center mb-4">
          Elise<span class="text-yellow-500">SIGN</span>
        </router-link>
      </div>
      <div class="flex my-4 justify-center">
        <router-link to="/login"
          class="py-2 px-4 rounded-full w-1/3 text-center border border-black border-2 mx-4 text-xl font-bold text-gray-600"
        >
          J'ai un compte
        </router-link>
        <button
          class="py-2 px-4 rounded-full w-1/3 mx-4 text-xl  text-center font-bold bg-gray-600 text-white"
          @click="showPasswordForm = true"
        >
          créer un compte
        </button>
      </div>
      <div class="  flex flex-col justify-center" v-if="!showPasswordForm">
        <h1 class="text-3xl font-bold text-center  text-gray-600 ">Inscription</h1>
        <form class="grid grid-cols-2 gap-8 px-8 w-full  py-4" @submit.prevent="onSubmit">
          <div>
            <label for="nom" class="text-lg font-bold my-2 text-gray-600">Nom:</label>
            <input
              type="text"
              id="nom"
              class="py-2 px-4 block w-full border border-gray-200 rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500"
              placeholder="Nom"
              v-model="form.nom"
              required
            />
          </div>

          <div>
            <label for="prenom" class="text-lg font-bold my-2 text-gray-600">Prénom:</label>
            <input
              type="text"
              id="prenom"
              class="py-2 px-4 block w-full border border-gray-200 rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500"
              placeholder="Prénom"
              v-model="form.prenom"
              required
            />
          </div>

          <div>
            <label for="email" class="text-lg font-bold my-2 text-gray-600">Email:</label>
            <input
              type="email"
              id="email"
              class="py-2 px-4 block w-full border border-gray-200 rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500"
              placeholder="Email"
              v-model="form.email"
              required
            />
          </div>

          <div>
            <label for="telephone" class="text-lg font-bold my-2 text-gray-600">Téléphone:</label>
            <input
              type="tel"
              id="telephone"
              class="py-2 px-4 block w-full border border-gray-200 rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500"
              placeholder="Téléphone"
              v-model="form.telephone"
              required
            />
          </div>


          <div>
            <label for="dateNaissance" class="text-lg font-bold my-2 text-gray-600">Date de naissance:</label>
            <input
              type="date"
              id="dateNaissance"
              class="py-2 px-4 block w-full border border-gray-200 rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500 text-gray-600"
              v-model="form.dateNaissance"
              required
            />
          </div>

          <div class="">
            <label for="sexe" class="text-lg font-bold my-2 text-gray-600">Sexe:</label>
            <select
              id="sexe"
              class="py-2 px-4 block w-full border border-gray-200 rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500"
              v-model="form.sexe"
              required
            >
              <option value="">Sélectionner</option>
              <option value="Homme">Homme</option>
              <option value="Femme">Femme</option>
            </select>
          </div>

          <div class="col-span-2 flex justify-center">
            <button type="submit" class="py-2 px-6 bg-yellow-500 text-white text-lg font-bold rounded-lg w-1/2 mt-2">
              S'inscrire
            </button>
          </div>
        </form>
      </div>

      
      <div class="  flex flex-col justify-center" v-if="showPasswordForm">
        <h1 class="text-3xl font-bold text-center  text-gray-600 ">Choisissez votre mot de passe</h1>
        <form class="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 w-full py-4" @submit.prevent="register">
            <div class="flex flex-col">
              <h1 class="mb-2 text-lg font-semibold text-gray-800"> mot de passe:</h1>
              <input type="password"
                class="py-2.5 sm:py-3 px-4 block w-full border border-gray-300 rounded-md sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder=" mot de passe" v-model="password" @input="checkPasswordStrength" />
              <div class="flex mt-2 -mx-1">
                <div v-for="(segment, index) in segments" :key="index" :class="['h-2 flex-auto rounded-full mx-1', segment]">
                </div>
              </div>

              <div class="mt-3">
                <span class="text-sm text-gray-800">Niveau:</span>
                <span class="text-sm font-semibold text-gray-800">{{ strengthLevelText }}</span>
              </div>

              <h4 class="my-2 text-sm font-semibold text-gray-800">Votre mot de passe doit contenir:</h4>
              <ul class="space-y-1 text-sm text-gray-500">
                <li v-for="(status, key) in passwordMeetsCriteria" :key="key"
                  :class="['flex items-center gap-x-2', { 'text-teal-500': status }]">
                  <span v-if="status">
                    ✅
                  </span>
                  <span v-else>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="size-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </span>
                  {{ criteriaText[key] }}
                </li>
              </ul>
            </div>

            <div class="flex flex-col">
              <h1 class="mb-2 text-lg font-semibold text-gray-800">Confirmer le mot de passe:</h1>
              <input type="password"
                class="py-2.5 sm:py-3 px-4 block w-full border border-gray-300 rounded-md sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Confirmer le mot de passe" v-model="confirmPassword" @input="validatePassword" />
              <p v-if="errorMessage" class="mt-2 text-sm text-red-500">{{ errorMessage }}</p>
            </div>

          <div class="col-span-2 flex justify-center">
            <button type="submit"  class="py-2 px-6 bg-yellow-500 text-white text-lg font-bold rounded-lg w-1/2 mt-2">
              Finaliser l'inscription
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="col-span-6 flex flex-col justify-center  bg-gray-200 px-4 h-full min-h-screen w-full">
      <img src="https://i.imgur.com/xjnKQW6.png" alt="" class="">
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      showPasswordForm: false,
      password: "", 
      confirmPassword: "",
      strengthLevel: 0, 
      passwordMeetsCriteria: {  
        minLength: false,
        lowercase: false,
        uppercase: false,
        numbers: false,
        specialCharacters: false,
      },
      criteriaText: { 
        minLength: "Le nombre minimum de caractères est de 8.",
        lowercase: "Doit contenir des minuscules.",
        uppercase: "Doit contenir des majuscules.",
        numbers: "Doit contenir des chiffres.",
        specialCharacters: "Doit contenir des caractères spéciaux.",
      },
      errorMessage: '', 
      form: {
        nom: '',
        prenom: '',
        dateNaissance: '',
        telephone: '',
        email: '',
        sexe: '',
      }
    };
  },
  computed: {
    strengthLevelText() {
      const levels = ["Vide", "Faible", "Moyen", "Fort", "Très fort", "Super fort"];
      return levels[this.strengthLevel];
    },
    segments() { 
      return Array(5)
        .fill(null)
        .map((_, index) => {
          return index < this.strengthLevel ? "bg-teal-500 opacity-100" : "bg-blue-500 opacity-50";
        });
    },

  },
  methods: {
    onSubmit() {
      
      if (!this.form.nom || !this.form.prenom || !this.form.email || !this.form.telephone || !this.form.dateNaissance || !this.form.sexe) {
        alert("Veuillez remplir tous les champs obligatoires.");
        return;
      }
      this.showPasswordForm = true;
    },
    register() {
      
      const registrationData = {
        ...this.form,
        password: this.password,
        confirmPassword: this.confirmPassword,
      };
      if (this.password !== this.confirmPassword) {
        alert("Les mots de passe ne correspondent pas.");
        return;
      }

      
      
      alert("Inscription réussie!");
      
      this.$router.push("/login");
    },
    checkPasswordStrength() { 
      const pwd = this.password;
      let strength = 0;
      this.passwordMeetsCriteria = {
        minLength: pwd.length >= 8,
        lowercase: /[a-z]/.test(pwd),
        uppercase: /[A-Z]/.test(pwd),
        numbers: /[0-9]/.test(pwd),
        specialCharacters: /[^a-zA-Z0-9\s]/.test(pwd),
      };

      strength += this.passwordMeetsCriteria.minLength ? 1 : 0;
      strength += this.passwordMeetsCriteria.lowercase ? 1 : 0;
      strength += this.passwordMeetsCriteria.uppercase ? 1 : 0;
      strength += this.passwordMeetsCriteria.numbers ? 1 : 0;
      strength += this.passwordMeetsCriteria.specialCharacters ? 1 : 0;

      this.strengthLevel = strength;
    },
    validatePassword() {  
      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'Les mots de passe ne correspondent pas.';
      } else {
        this.errorMessage = '';
      }
    },
  },
};
</script>