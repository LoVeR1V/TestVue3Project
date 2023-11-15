<template>
    <li>
        <router-link 
            :to = "`/${index}`"
            class="nav-link"
            :class="{activeClasses, 'emphasize': isActive }" 
            aria-current="page"   
            :title="`${page.link.text}`"  
            >{{ page.link.text }} </router-link>
    </li>
</template>

<script>
export default {
    //added 'index' as a property
    props: ['page','index', 'isActive'],
    computed: {
        activeClasses(){
            return {
                active: this.isActive,
                emphasize: this.isActive,
            };
        }
    }
}
</script>

<style scoped>
.emphasize{
    text-decoration: underline !important;
}
</style>