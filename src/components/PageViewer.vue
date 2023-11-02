<template>
    <div class="container">
        <h1 class="emphasize"> Page Title </h1>
        <p> content </p>
    </div>
</template>

<script> 
export default {
    props: {
        page : {
            // now we store our content in pages.json so this need to read the content
            type: Object,
            default(rawProps) {
                return {
                    pageTitle: '',
                    content: ''
                };
            }
        }
    },
          
}
</script>

<style scoped>
.emphasize {
    color: blueviolet;
}
</style>

