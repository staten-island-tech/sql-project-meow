<script setup>
import NavBar from "../components/NavBar.vue";
import { useLoginStore } from "../stores/login";
import { ref } from "vue";
import { router } from "../router/index";

const loginStore = useLoginStore();
const email = ref("");
const password = ref("");

function submit (){
  console.log(this.$router)
  loginStore.signIn(email.value, password.value)
  router.push('/')
}
</script>

<template>
  <div>
    <nav-bar></nav-bar>
    <div class="align-middle">
      <h1 class="text-center text-3xl">Login</h1>
      <form
        class="flex flex-col w-1/2 m-auto"
        @submit.prevent="submit()"
      >
        <label class="text-xl" for="email">Email</label>
        <input
          id="email"
          class="border-2 border-black p-2 m-2 rounded-lg"
          type="text"
          v-model="email"
        />
        <label class="text-xl" for="pass">Password</label>
        <input
          id="pass"
          class="border-2 border-black p-2 m-2 rounded-lg"
          type="password"
          v-model="password"
        />
        <button
          class="cursor-pointer bg-blue-100 py-2 px-4 rounded-md text-xl mt-8"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>
