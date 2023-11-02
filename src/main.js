import { createApp, VueElement } from "vue";
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import $bus from './utils/Events';

const app = createApp(App)

// that allows us to add propeties to every component within our application
app.config.globalProperties.$bus = $bus

app.mount('#app');
