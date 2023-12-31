import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './components/Router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

