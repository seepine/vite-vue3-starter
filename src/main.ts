import { createApp } from 'vue'

import App from './App.vue'
import router from './router/index'
import store from './store/index'
import axios from './utils/axios'

window.axios = axios

createApp(App).use(store).use(router).mount('#app')
