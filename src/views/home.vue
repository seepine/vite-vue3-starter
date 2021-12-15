<script setup lang="ts">
import HelloWorld from '@/components/hello-world.vue'

const handleChange = (count: number) => {
  // eslint-disable-next-line no-console
  console.log('from HelloWorld event', count)
}
</script>

<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" @change="handleChange" />
</template>
