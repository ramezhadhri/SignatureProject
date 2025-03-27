<template>
  <div class="min-h-screen" @mousemove="resetInactivityTimer" @keypress="resetInactivityTimer" @visibilitychange="handleVisibilityChange">
    <div class="fixed top-0 right-0 left-0 z-50">
      <Navigation />
    </div>

    <div class="mt-12 flex min-h-screen">
      <div class="fixed left-0 top-16 h-full w-1/6 z-40">
        <Sidebar />
      </div>
      <div class="ml-[16.666667%] w-5/6 py-8 px-4">
        <div v-if="sessionExpired" class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-xl font-bold text-gray-800 mb-4">Session Expired</h2>
            <p class="text-gray-600 mb-4">Your session has expired due to inactivity. Please log in again.</p>
            <button @click="logout" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              OK
            </button>
          </div>
        </div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
import Sidebar from "./Sidebar.vue";
import axios from './axios.js';
import { jwtDecode } from 'jwt-decode';

const INACTIVITY_TIMEOUT = 5 * 60 * 1000; // 5 minutes
const AWAY_TIMEOUT = 20 * 60 * 1000; // 20 minutes

export default {
  name: "AppLayout",
  components: { Navigation, Sidebar },
  data() {
    return {
      sessionExpired: false,
      expirationTimeout: null,
      inactivityTimer: null, 
      awayTimer: null,
    };
  },
  mounted() {
    this.checkTokenExpiration();
    this.startInactivityTimer();
    this.startAwayTimer();
    document.addEventListener("visibilitychange", this.handleVisibilityChange);
  },
  beforeUnmount() {
    clearTimeout(this.expirationTimeout);
    clearTimeout(this.inactivityTimer); 
    clearTimeout(this.awayTimer);
    document.removeEventListener("visibilitychange", this.handleVisibilityChange);
  },
  methods: {
    startInactivityTimer() {
      clearTimeout(this.inactivityTimer);
      this.inactivityTimer = setTimeout(() => {
        this.handleSessionExpired();
      }, INACTIVITY_TIMEOUT);
    },
    resetInactivityTimer() {
      clearTimeout(this.inactivityTimer);
      clearTimeout(this.awayTimer);

      if (!this.sessionExpired) {
        this.startInactivityTimer();
        this.startAwayTimer();
      }
    },
    startAwayTimer() {
      clearTimeout(this.awayTimer);
      this.awayTimer = setTimeout(() => {
        this.handleSessionExpired();
      }, AWAY_TIMEOUT);
    },
    handleVisibilityChange() {
      if (document.hidden) {
        console.log("User is away, starting away timer.");
        this.startAwayTimer();
      } else {
        console.log("User is back, resetting inactivity and away timers.");
        this.resetInactivityTimer();
      }
    },
    async checkTokenExpiration() {
      const token = localStorage.getItem('authToken');
      if (!token) {
        this.$router.push('/');
        return;
      }

      try {
        const decodedToken = jwtDecode(token);
        const expirationTime = decodedToken.exp * 1000;
        const now = Date.now();
        const timeLeft = expirationTime - now;

        if (timeLeft <= 0) {
          this.handleSessionExpired();
        } else {
          console.log(`Token will expire in ${timeLeft / 60000} minutes.`);
          this.expirationTimeout = setTimeout(() => {
            this.handleSessionExpired();
          }, timeLeft);
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        this.logout();
      }
    },
    handleSessionExpired() {
      clearTimeout(this.expirationTimeout);
      clearTimeout(this.inactivityTimer);
      clearTimeout(this.awayTimer);

      console.log("Session expired due to inactivity or token expiration!");
      this.sessionExpired = true; 
      localStorage.removeItem("authToken");
      window.location.reload(); 
    },
    logout() {
      this.sessionExpired = false;
      localStorage.removeItem("authToken");
      window.location.reload(); 
    },
  },
};
</script>
