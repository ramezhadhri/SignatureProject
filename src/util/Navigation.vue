<template>
  <div>
    <nav class="rounded border border-gray-200 bg-white h-16">
      <div class="px-8 w-full flex items-center justify-between">
        <RouterLink to="/home" class="flex items-center mx-2">
          <h1 class="text-4xl font-bold text-gray-600">
            Elise<span class="text-yellow-500">SIGN</span>
          </h1>
        </RouterLink>

        <div class="flex items-center gap-2">
          <div class="hidden w-auto items-center justify-between lg:flex">
            <ul
              class="flex flex-col rounded-lg border border-gray-100 p-2 dark:border-gray-700 md:mt-0 md:flex-row md:border-0 md:text-sm md:font-medium"
            >
              
            <li ref="dropdownContainer">
    <div class="flex items-center">
      <span
        class="inline-flex mx-2 items-center justify-center size-[46px] rounded-full bg-gray-500 font-semibold text-white leading-none"
      >
        {{ initials }}
      </span>
      <div class="relative flex flex-col justify-center">
        <button
          @click="toggleProfile"
          class="font-semibold text-gray-600 flex hover:bg-gray-200 py-2 px-2 rounded-xl"
        >
          {{ fullName }}
          <svg
            v-show="!profile"
            class="w-6 h-6 mx-2 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            v-show="profile"
            class="w-6 h-6 mx-2 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        <div
          v-show="profile"
          class="absolute top-12 right-0 mt-2 p-8 border border-gray-200 rounded-lg shadow-lg bg-white z-30 flex flex-col justify-center"
        >
          <h1 class="text-lg font-bold text-center my-4">
            {{ fullName }}
          </h1>
          <h2 class="text-md text-center text-gray-500 my-4">
            {{ email }}
          </h2>
          <button class="py-2 border border-gray-400 rounded-xl my-4">
            Déconnexion
          </button>
        </div>
      </div>
    </div>
  </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import { ChevronDownIcon } from "@heroicons/vue/24/outline";
import { h } from "vue";
//import NavModal from "../components/NavModal.vue";

export default {
  name: "Navigation",
  components: { RouterLink, ChevronDownIcon },
  data() {
    return {
      profile: false,
      fullName: "Hadhri Ramez", 
      email: "hadhriramez0@gmail.com",
    };
  },
  computed: {
  initials() {
    const nameParts = this.fullName.trim().split(" ");
    if (nameParts.length >= 2) {
      return `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase();
    }
    return nameParts[0][0].toUpperCase();
  }
},
methods: {
    toggleProfile() {
      this.profile = !this.profile;
    },
    closeDropdown(event) {
      if (this.$refs.dropdownContainer && !this.$refs.dropdownContainer.contains(event.target)) {
        this.profile = false;
      }
    },
    logout() {
      this.$router.push("/");
    },
  },
  mounted() {
    document.addEventListener("click", this.closeDropdown);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeDropdown);
  },

};
</script>
