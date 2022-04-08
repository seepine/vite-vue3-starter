<script setup lang="ts">
import { ref } from 'vue'
import axios from '@/utils/axios'

const response = ref()

const startRequest = () => {
  axios.get('/').then((res) => {
    response.value = res
  })
}
</script>

<template>
  <div>Response: <br />{{ response }}</div>
  <div>
    <button @click="startRequest">Start Request</button>
  </div>
</template>
