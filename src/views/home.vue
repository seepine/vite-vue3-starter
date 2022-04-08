<script setup lang="ts">
import HelloWorld from '@/components/hello-world.vue'
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
const handleChange = (count: number) => {
  // eslint-disable-next-line no-console
  console.log('from HelloWorld event', count)
}
</script>

<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" @change="handleChange" />
  <p>
    <router-link to="/store"> Store </router-link>
    |
    <router-link to="/axios">Axios</router-link>
  </p>
  <div>fullName:{{ userStore.fullName }}</div>
  <div>purePhone:{{ userStore.purePhone }}</div>
  <div>phone:{{ userStore.phone }}</div>
</template>
<style>
a {
  color: #42b983;
}
</style>
