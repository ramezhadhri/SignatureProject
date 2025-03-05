<template>
    <div class="flex flex-col items-center justify-center">
      <div class="grid grid-cols-1 gap-6 max-w-2xl w-full p-4">
  
        <div class="flex flex-col">
          <h1 class="mb-2 text-lg font-semibold text-gray-800">Mot de passe actuel:</h1>
          <input type="password"
            class="py-2.5 sm:py-3 px-4 block w-full border border-gray-300 rounded-md sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            placeholder="Mot de passe actuel" />
        </div>
  
  
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  
          <div class="flex flex-col">
            <h1 class="mb-2 text-lg font-semibold text-gray-800">Nouveau mot de passe:</h1>
            <input type="password"
              class="py-2.5 sm:py-3 px-4 block w-full border border-gray-300 rounded-md sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Nouveau mot de passe" v-model="password" @input="checkPasswordStrength" />
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
              <li v-for="(status, key) in passwordMeetsCriteria" :key="key" :class="['flex items-center gap-x-2', { 'text-teal-500': status }]">
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
              placeholder="Confirmer le mot de passe" />
          </div>
        </div>
      </div>
      <button class="py-4 px-8 bg-yellow-500 text-black my-8">Modifier mot de passe</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "Password",
    data() {
      return {
        password: "",
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
      methods:{
          validatePassword() {
          if (this.newPassword !== this.confirmPassword) {
            this.errorMessage = 'Passwords do not match.';
          } else {
            this.errorMessage = '';
           
          }
        },
      }
    },
    methods: {
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
    },
  };
  </script>