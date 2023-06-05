<script setup>
import NavBar from "../components/NavBar.vue";
import { useLoginStore } from "../stores/login";
import { ref } from "vue";

const loginStore = useLoginStore();
const email = ref("");
const password = ref("");
</script>

<template>
  <div>
    <nav-bar></nav-bar>
    <form @submit.prevent="loginStore.signIn(email, password)">
      <input class="border-2 border-black" type="text" v-model="email" />
      <input class="border-2 border-black" type="text" v-model="password" />
      <button type="submit">okok</button>
    </form>
  </div>
</template>
