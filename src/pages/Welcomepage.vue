<template>
    <WelcomeNav/>
    <div class="my-4">
        <div class=" grid grid-cols-12 gap-4 my-8 ">
            <div class="col-span-6 flex flex-col  items-center justify-center">
                <h1 class="text-center text-4xl font-bold ">Signez vos Documents en un clic</h1>
                <h1 class="text-gray-500 text-center mt-4 ">EliseSIGN offre un moyen simple et rapide de signer </h1>
                <h1 class="text-gray-500 text-center">et faire signer électroniquement vos documents</h1>
               
                <router-link to="/signup" class="py-2 px-4 rounded-xl bg-yellow-500 flex items-center  text-lg  my-4" >commencer</router-link>
            </div>
            <div class="col-span-6  ">
                <img src="https://i.imgur.com/xjnKQW6.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import WelcomeNav from '../components/welcomeNav.vue';

export default {
    name:"Welcomepage",
    components:{WelcomeNav}
}
</script>
