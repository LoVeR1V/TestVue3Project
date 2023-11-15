<template>
    <!-- we use v-if to check to see if we have a page and display that information-->
    <div v-if="page" class="container">
        <h1 class="emphasize">{{ page.pageTitle }}</h1>
        <p>{{ page.content }}</p>
    </div>
</template>

<script> 
export default {
    created() {
        
        this.page = this.$pages.getSinglePage(this.$route.params.index);
    },
    data() {
        return {
            page: null
        };
    },  
}
</script>

<style scoped>
.emphasize {
    color: blueviolet;
}
</style>

