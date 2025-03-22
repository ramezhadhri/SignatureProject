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
              class="flex flex-col rounded-lg border border-gray-100 p-2  md:mt-0 md:flex-row md:border-0 md:text-sm md:font-medium"
            >
              <li class="mx-4">
                <div class="relative" ref="notificationContainer">
                  <button
                    @click="toggleDropdown"
                    class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white  rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300  "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6 text-gray-700"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                      />
                    </svg>

                    <span class="sr-only">Notifications</span>
                    <div
                      class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 "
                    >
                      {{ notifications.length }}
                    </div>
                  </button>

                  <div
                    v-if="isDropdownOpen"
                    class="absolute right-0 mt-2 w-64 bg-white divide-y divide-gray-100 rounded-lg shadow-lg "
                  >
                    <ul class="py-2 text-sm text-gray-700 ">
                      <li
                        v-if="notifications.length === 0"
                        class="px-4 py-2 text-center text-gray-500"
                      >
                        No new notifications
                      </li>
                      <li
                        v-for="(notification, index) in notifications"
                        :key="index"
                        class="px-4 py-2 hover:bg-gray-100 "
                        @click="signepage"
                      >
                        {{ notification }}
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
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
                      <button
                        @click="logout"
                        class="py-2 border border-gray-400 rounded-xl my-4"
                      >
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
import { jwtDecode } from "jwt-decode";

export default {
  name: "Navigation",
  components: { RouterLink },
  data() {
    return {
      profile: false,
      fullName: "", 
      email: "",
      isDropdownOpen: false,
      notifications: [
        "Hadhri Ramez a vous envoyé un document pour le signer",
        "Hadhri Jasser a vous envoyé un document pour le signer",
      ],
      userinfo: null, 
      token: null
    };
  },
  computed: {
    initials() {
      if (!this.fullName) return ""; 
      const nameParts = this.fullName.trim().split(" ");
      if (nameParts.length >= 2) {
        return `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase();
      }
      return nameParts[0][0].toUpperCase();
    },
  },
  mounted() {
    console.log("Navigation Component mounted");
    this.token = localStorage.getItem("authToken");
    this.connecter();
  },
  methods: {
    connecter() {
      console.log("connecter() method called");

      const token = localStorage.getItem("authToken");
      console.log("Token retrieved from localStorage:", token);

      if (token) {
        try {
          this.userinfo = jwtDecode(token);
          console.log("Decoded userinfo:", this.userinfo);

          
          this.fullName = this.userinfo.prenom +" "+this.userinfo.nom ;
          this.email = this.userinfo.email ;

          console.log("FullName:", this.fullName);
          console.log("Email:", this.email);
        } catch (error) {
          console.error("Invalid token:", error);
          localStorage.removeItem("authToken"); 
          this.$router.push("/"); 
        }
      } else {
        console.log("No token found in localStorage.");
        this.$router.push("/"); 
      }
    },

    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },

    toggleProfile() {
      this.profile = !this.profile;
    },

    closeDropdown(event) {
      if (
        this.$refs.dropdownContainer &&
        !this.$refs.dropdownContainer.contains(event.target)
      ) {
        this.profile = false;
      }
      if (
        this.$refs.notificationContainer &&
        !this.$refs.notificationContainer.contains(event.target)
      ) {
        this.isDropdownOpen = false;
      }
    },

    logout() {
      localStorage.removeItem("authToken");
      this.$router.push("/");
    },

    signepage() {
      this.isDropdownOpen = !this.isDropdownOpen;
      this.$router.push("/signer");
    },
  },
  
  beforeUnmount() {
    document.removeEventListener("click", this.closeDropdown);
  },
};
</script>