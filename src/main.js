import { createApp, VueElement } from "vue";
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import $bus from './utils/Events';
import router from "./routes";
import $pages from './data';

const app = createApp(App)

app.use(router);

// that allows us to add propeties to every component within our application
app.config.globalProperties.$bus = $bus
// this is going to give us access to our data store directly inside of our components
app.config.globalProperties.$pages = $pages

app.mount('#app');
