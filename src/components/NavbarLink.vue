<template>
    <li>
        <router-link 
            :to = "`/${index}`"
            class="nav-link"
            active-class="active empahasize"           
            aria-current="page"   
            :title="`${page.link.text}`"  
            >{{ page.link.text }} </router-link>
    </li>
</template>

<script>
export default {
    //added 'index' as a property
    props: ['page','index'],
    
}
</script>
