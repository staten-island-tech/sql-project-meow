<template>
  <div>
    <div v-if="loginStore.loggedIn" class="flex justify-between">
      <div class="m-8">
        <RouterLink class="mx-8" to="/register">Register</RouterLink>
        <RouterLink class="mx-8" to="/login">Login</RouterLink>
      </div>
    </div>
    <div v-else class="flex justify-between">
      <div class="m-8">
        <RouterLink to="/">Home</RouterLink>
      </div>
      <div class="m-8">
        <RouterLink class="mx-8" to="/register">Register</RouterLink>
        <RouterLink class="mx-8" to="/login">Login</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLoginStore } from "../stores/login";
import { RouterLink } from "vue-router";
const loginStore = useLoginStore();
</script>
