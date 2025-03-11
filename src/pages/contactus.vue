<template>
    <section>
      <div class="max-w-8xl mx-auto px-4 lg:px-4">
        <div class="xl:mx-64 2xl:mx-80">
          <h1 class="mb-4 text-4xl font-bold lg:mb-7 lg:text-center lg:text-5xl lg:font-extrabold lg:leading-none">
            {{ title }}
          </h1>
          <p class="mb-10 text-lg font-normal text-gray-500 lg:text-center lg:text-xl">
            Veuillez décrire votre demande ci-dessous.
          </p>
        </div>
      </div>
      <div class="max-w-8xl mx-auto px-4 lg:px-4">
        <div class="mx-auto max-w-3xl rounded-2xl border-2 border-gray-50 p-4 shadow-md lg:p-8">
          <form @submit.prevent="sendEmail">
            <div class="mb-6">
              <label for="first_name" class="mb-2 block text-sm font-medium">First Name</label>
              <input v-model="form.first_name" type="text" id="first_name" name="first_name" required disabled
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div class="mb-6">
              <label for="last_name" class="mb-2 block text-sm font-medium">Last Name</label>
              <input v-model="form.last_name" type="text" id="last_name" name="last_name" required disabled
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div class="mb-6">
              <label for="email" class="mb-2 block text-sm font-medium">Email Address</label>
              <input v-model="form.email" type="email" id="email" name="email" required disabled
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div class="mb-6">
              <label for="subject" class="mb-2 block text-sm font-medium">Subject</label>
              <input v-model="form.subject" type="text" id="subject" name="subject" required
                placeholder="Subject name" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div class="mb-6">
              <label for="message" class="mb-2 block text-sm font-medium">Message</label>
              <textarea v-model="form.message" id="message" name="message" rows="4" required
                placeholder="Your message..." class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
            </div>
            <div class="g-recaptcha" data-sitekey="6LdkuJonAAAAADPOvXrCE1hnLvmqqGP7WMt2oK8s"></div>
            <button :disabled="isSending" class="w-full rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white sm:w-auto">
              <span class="flex items-center justify-center">Send message</span>
            </button>
            <div v-if="isSuccess" class="mt-4 rounded-lg bg-green-50 p-4 text-sm text-green-800" role="alert">
              <span class="font-medium">Message sent!</span> Thank you, we highly value your feedback.
            </div>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  export default {
    name: 'ContactUs',
    setup() {
      const form = ref({
        first_name: '',
        last_name: '',
        email: '',
        subject: '',
        message: ''
      });
      const isSending = ref(false);
      const isSuccess = ref(false);
  
      onMounted(() => {
        
        form.value.first_name = 'Hadhri'; 
        form.value.last_name = 'Ramez'; 
        form.value.email = 'ramezhadhri@ieee.org'; 
      });
  
      const sendEmail = () => {
        isSending.value = true;
        setTimeout(() => {
          isSending.value = false;
          isSuccess.value = true;
        }, 2000);
      };
  
      return { form, isSending, isSuccess, sendEmail, title: 'Contacter nous' };
    }
  };
  </script>
