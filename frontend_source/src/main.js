import './assets/main.css'
import { parseDatetime } from './datetime.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@dbetka/vue-material-icons/dist/index.css'
import materialIcons from '@dbetka/vue-material-icons';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(materialIcons);

app.config.globalProperties.$formatDateTime = parseDatetime;

app.mount('#app')
