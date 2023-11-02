<template>
    <li>
        <a 
            class="nav-link"
            :class="{activeClasses, 'emphasize': isActive }" 
            aria-current="page" 
            :href="page.link.url"    
            :title="`${page.link.text}`"
            @click.prevent="$bus.$emit('navbarLinkActived', index)"    
            >{{ page.link.text }} </a>
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