<script setup lang="ts">
import { ref } from 'vue';


const navbarObjects = ref([
    {text: "О себе", link: "/"}, 
    {text: "Портфолио", link: "/projects"}, 
    {text: "Контакты", link: "/contacts"}
])

</script>

<template>
    <div class="navbar">
        <div class="navbar_cont">
            <div class="link_lst">
                <RouterLink :to="object.link" v-for="object in navbarObjects">
                    {{ object.text }}
                </RouterLink>
            </div>

        </div>
    </div>
</template>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Science+Gothic&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');


    .navbar {
        display: flex;
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 55px;
        justify-content: center;
        align-items: center;
        background-color: var(--navbar-background-color);
    }

    .navbar_cont {

        text-align: center;
        padding: 0.5em;
    }

    .link_lst {
        text-align: center;
    }

    .link_lst>a {
        padding: 1em;
        text-decoration: none;
        color: var(--text-color-bright);
        font-size: 12pt;
        font-family: "Zen Antique", serif;
        font-weight: bold;
    }
</style>