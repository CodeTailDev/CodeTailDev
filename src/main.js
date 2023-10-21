import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './components/Router'


// import axios from 'axios'

const app = createApp(App)
// app.config.globalProperties.Axios = axios
// app.config.globalProperties.axios = axios

app.use(router)
app.mount('#app')

