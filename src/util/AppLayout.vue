<template>
  <div class="min-h-screen">
    <div class="fixed top-0 right-0 left-0 z-50">
      <Navigation />
    </div>

    <div class="mt-24 flex min-h-screen">  
      <div class="fixed left-0 top-16 h-full w-1/6 z-40 ">  
        <Sidebar />
      </div>
      <div class="ml-[16.666667%] w-5/6 py-8 px-4">  
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
import Sidebar from "./Sidebar.vue";

export default {
  name: "AppLayout",
  components: { Navigation, Sidebar },
};
</script>