import { createApp } from 'vue'
import App from './App.vue'
import router from './route'

let app = createApp(App).use(router);
app.mount('#app')
