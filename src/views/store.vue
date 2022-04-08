<template>
  <div>fullName:{{ userStore.fullName }}</div>
  <div>purePhone:{{ userStore.purePhone }}</div>
  <div>phone:{{ userStore.phone }}</div>
  <div>
    <button @click="handleChange">Change phone</button>
  </div>
</template>
<script setup lang="ts">
import _ from 'lodash'
import { useUserStore } from '@/store/user'

const userStore = useUserStore()

const handleChange = () => {
  userStore.purePhone = _.random(10000000000, 19999999999).toString()
}
</script>
