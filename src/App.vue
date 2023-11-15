<template> 
    <navbar

    ></navbar>
  
    <router-view></router-view>

    <!-- <page-viewer
    v-if="pages.length > 0" 
    :page = "pages[activePage]"
    ></page-viewer> -->

    
        <!-- creating  a custom event (instead of ":" we use "@") that in CreatePage -->
    <!-- <create-page
        @page-created = "pageCreated"
    ></create-page> -->
</template>

<script>
import PageViewer from './components/PageViewer.vue';
import Navbar from './components/Navbar.vue';
import CreatePage from './components/CreatePage.vue';

export default {
    components: { 
        Navbar,
        PageViewer,
        CreatePage
    },
      methods: {
        pageCreated(pageObj) {
            this.pages.push(pageObj); //add new page in navbar (pages.json)
        }
      }  
}
</script>

