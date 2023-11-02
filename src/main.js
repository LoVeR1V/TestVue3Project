import { createApp, VueElement } from "vue";
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import $bus from './utils/Events';
import router from "./routes";

const app = createApp(App)

app.use(router);

// that allows us to add propeties to every component within our application
app.config.globalProperties.$bus = $bus

app.mount('#app');
