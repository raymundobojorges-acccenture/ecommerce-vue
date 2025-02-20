import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './exercises/03-pinia/router'
import EcommerceApp from './exercises/03-pinia/EcommerceApp.vue'
import './style.css'

const app = createApp(EcommerceApp)
app.use(createPinia())
app.use(router)
app.mount('#app')
