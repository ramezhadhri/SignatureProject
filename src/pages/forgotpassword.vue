<template>
  <div class="flex flex-col justify-center items-center">
    
    <div class="flex justify-center my-4">
      <button class="text-7xl font-bold text-gray-600 text-center mb-4" @click="pushroute">
        Elise<span class="text-yellow-500">SIGN</span>
      </button>
    </div>
    <div v-if="codeview" class="flex flex-col">
      <div
        class="bg-gray-100 flex flex-col justify-center py-8 mx-auto my-8 border border-black border-2 px-8"
      >
        <h1 class="text-lg fond-bold text-center">
          Veuillez entrer le code récu sur votre téléphone pour valider votre
          signature
        </h1>
        <div class="flex gap-x-3 justify-center my-4">
          <input
            v-for="(pin, index) in pinValues"
            :key="index"
            v-model="pinValues[index]"
            type="text"
            class="block w-12 h-12 text-center border border-gray-200 rounded-md sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            :autofocus="index === 0"
            maxlength="1"
            @input="moveFocus(index)"
            ref="pinInput"
          />
        </div>
        <button @click="handle()" class="py-2 px-4 bg-yellow-500 my-2">
          Valider
        </button>
      </div>
    </div>
    <div v-if="passview" class="grid grid-cols-1 gap-6 max-w-2xl w-full p-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="flex flex-col">
          <h1 class="mb-2 text-lg font-semibold text-gray-800">
            Nouveau mot de passe:
          </h1>
          <input
            type="password"
            class="py-2.5 sm:py-3 px-4 block w-full border border-gray-300 rounded-md sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            placeholder="Nouveau mot de passe"
            v-model="password"
            @input="checkPasswordStrength"
          />
          <div class="flex mt-2 -mx-1">
            <div
              v-for="(segment, index) in segments"
              :key="index"
              :class="['h-2 flex-auto rounded-full mx-1', segment]"
            ></div>
          </div>

          <div class="mt-3">
            <span class="text-sm text-gray-800">Niveau:</span>
            <span class="text-sm font-semibold text-gray-800">{{
              strengthLevelText
            }}</span>
          </div>

          <h4 class="my-2 text-sm font-semibold text-gray-800">
            Votre mot de passe doit contenir:
          </h4>
          <ul class="space-y-1 text-sm text-gray-500">
            <li
              v-for="(status, key) in passwordMeetsCriteria"
              :key="key"
              :class="[
                'flex items-center gap-x-2',
                { 'text-teal-500': status },
              ]"
            >
              <span v-if="status"> ✅ </span>
              <span v-else>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </span>
              {{ criteriaText[key] }}
            </li>
          </ul>
        </div>

        <div class="flex flex-col">
          <h1 class="mb-2 text-lg font-semibold text-gray-800">
            Confirmer le mot de passe:
          </h1>
          <input
            type="password"
            class="py-2.5 sm:py-3 px-4 block w-full border border-gray-300 rounded-md sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            placeholder="Confirmer le mot de passe"
            v-model="confirmPassword"
            @input="validatePassword"
          />
          <p v-if="errorMessage" class="mt-2 text-sm text-red-500">
            {{ errorMessage }}
          </p>
        </div>
      </div>
      <button class="py-4 px-8 bg-yellow-500 text-black my-8">Modifier mot de passe</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ForgotPassword",
  data() {
    return {
      passview: false,
      codeview: true,
      pinValues: ["", "", "", ""],
      password: "",
      confirmPassword: "",
      errorMessage: "",
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
      const levels = [
        "Vide",
        "Faible",
        "Moyen",
        "Fort",
        "Très fort",
        "Super fort",
      ];
      return levels[this.strengthLevel];
    },
    segments() {
      return Array(5)
        .fill(null)
        .map((_, index) => {
          return index < this.strengthLevel
            ? "bg-teal-500 opacity-100"
            : "bg-blue-500 opacity-50";
        });
    },
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
    validatePassword() {
      if (this.confirmPassword && this.password !== this.confirmPassword) {
        this.errorMessage = "Les mots de passe ne correspondent pas.";
      } else {
        this.errorMessage = "";
      }
    },
    handle() {
      this.codeview = false;
      this.passview = true;
    },
    moveFocus(index) {
      if (
        this.pinValues[index].length === 1 &&
        index < this.pinValues.length - 1
      ) {
        this.$nextTick(() => {
          this.$refs.pinInput[index + 1].focus();
        });
      } else if (this.pinValues[index].length === 0 && index > 0) {
        this.$nextTick(() => {
          this.$refs.pinInput[index - 1].focus();
        });
      }
    },
    
  },
};
</script>
