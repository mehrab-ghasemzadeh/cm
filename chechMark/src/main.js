import { registerPlugins } from '@/plugins'
import App from './App.vue'
import { createApp } from 'vue'
import routes from './router/routes.js'
const app = createApp(App)
app.use(routes)
registerPlugins(app)

app.mount('#app')
