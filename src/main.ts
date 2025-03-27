import { createApp } from 'vue'
import router from './exercises/02-vue-router/router'
import EcommerceApp from './exercises/02-vue-router/EcommerceApp.vue'
import './style.css'

const app = createApp(EcommerceApp)
app.use(router)
app.mount('#app')
