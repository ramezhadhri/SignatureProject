<template>
  <Navigation/>
  <main class=" container mx-auto flex flex-1 px-4  pb-8 2xl:px-24"><router-view/></main>
    
</template>
<script>
import Navigation from "./Navigation.vue"
export default {
  name: "AppLayout",
  components:{Navigation},
}
</script>