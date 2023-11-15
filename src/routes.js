import { createRouter, createWebHashHistory } from "vue-router";
import PageViewer from './components/PageViewer.vue'
import CreatePage from './components/CreatePage.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        // use "?" to make index optional 
        { path: '/:index?', component: PageViewer, props: true },
        { path: '/create', component: CreatePage}
    ]
});

export default router;