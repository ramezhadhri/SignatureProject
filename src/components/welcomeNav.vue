<template>
    <nav class="rounded border border-gray-200 bg-white   ">
      <div class="px-8 w-full flex items-center justify-between">
        <RouterLink to="/home" class="flex items-center mx-2">
          <h1 class="text-4xl font-bold text-gray-600">
            Elise<span class="text-yellow-500">SIGN</span>
          </h1>
        </RouterLink>

        <div class="flex items-center items-center ">
          <div class="hidden w-auto items-center justify-between lg:flex">
            <ul
              class="flex flex-col rounded-lg border border-gray-100 p-2 dark:border-gray-700 md:mt-0 md:flex-row md:border-0 md:text-sm md:font-medium"
            >
              
              <li>
                <router-link to="/login" class="py-2 px-4 rounded-xl bg-yellow-500 flex items-center  text-lg ">Se connecter</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
</template>
<script>
export default {
    name:"WelcomeNav"
}
</script>