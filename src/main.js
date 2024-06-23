import './assets/main.css'
import './assets/queries.css'

import { createApp } from 'vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import App from './App.vue'

let app = createApp(App)

app.use(Toast)
app.mount('#app')
