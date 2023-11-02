<template>   
    <nav 
        :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg' ]"
    >
        <div class="container-fluid">
            <a class="navbar-brand" href="#"> My Vue</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <!-- @actived is a global event bus -->
                <navbar-link
                    v-for="(page, index) in publishedPages" class="nav-item" :key="index" 
                    :page="page"
                    :index="index"
                    :isActive="activePage === index"
                    @actived="$emit('actived')">
                </navbar-link>                   
            </ul>
            <form class="d-flex">
                <button
                class="btn btn-primary"
                @click.prevent="changeTheme()" 
                >ToggleNavbar</button>
            </form>
        </div>
    </nav>   
</template>

<script>
import NavbarLink from './NavbarLink.vue';

export default {
    components: {
        NavbarLink
    },
    created() {
        this.getThemeSetting();
    },
    computed: {
        publishedPages() {
            return this.pages.filter(p => p.published); // it needs to publish a new item in navbar
        }
    },
    props: ['pages', 'activePage'],
            data() {
                return {
                    theme: 'light',
                }
            },
            methods: {
                // method where we can change theme by clicking a button
                changeTheme() {
                    let theme = 'light';

                    if (this.theme == 'light') {
                        theme = 'dark';
                    }

                    this.theme = theme;
                    this.storeThemeSetting();
                },
                // 2 methods where we can store current theme after reload
                storeThemeSetting() {
                    localStorage.setItem('theme', this.theme);
                },
                getThemeSetting() {
                    let theme = localStorage.getItem('theme');

                    if (theme) {
                        this.theme = theme;
                    }
                }
            }
}
</script>