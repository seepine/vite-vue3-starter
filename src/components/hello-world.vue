<script setup lang="ts">
import { ref, withDefaults } from 'vue'

// const props = defineProps<{ msg: string }>()
const props = withDefaults(defineProps<{ msg: string; tips?: string }>(), {
  tips: 'this is default msg'
})
const emit = defineEmits<{
  (event: 'change', p_count: number): void
}>()

const count = ref(0)
// eslint-disable-next-line no-console
console.log('props', props)

const handleChange = () => {
  count.value += 1
  emit('change', count.value)
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="handleChange">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <p>
    <a href="/vuex"> Vuex </a>
    |
    <a href="/axios">Axios</a>
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
