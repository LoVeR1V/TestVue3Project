<template>
    <!-- we use v-if to check to see if we have a page and display that information-->
    <div v-if="page" class="container">
        <h1 class="emphasize">{{ page.pageTitle }}</h1>
        <p>{{ page.content }}</p>
    </div>
</template>

<script> 
export default {
    props: ['index'], 
    created() {       
        this.page = this.$pages.getSinglePage(this.index);
        // adding a watcher to fix a bug 
        // we adding a watcher programmatically  and use route params
        // but I'll use second way to fix a bug
        // this.$watch(() => this.$route.params, (newParams, prevParams) => {
        //     this.page = this.$pages.getSinglePage(newParams.index);
        // })
    },
    data() {
        return {
            page: null
        };
    }, 
    watch: {
        index(newIndex,oldIndex) {
            this.page = this.$pages.getSinglePage(newIndex);
        }
    }
}
</script>

<style scoped>
.emphasize {
    color: blueviolet;
}
</style>

