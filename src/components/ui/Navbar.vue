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
                <nav>
                    <RouterLink :to="object.link" v-for="object in navbarObjects">
                        {{ object.text }}
                    </RouterLink>
                </nav>
            </div>
            <button class="nav-btn">&#9776;</button>
        </div>
    </div>
</template>

<style scoped>
    a {
        padding: 0.5em;
        margin: 0em;
        text-decoration: none;
        color: var(--text-color-bright);
        font-size: 12pt;
        font-family: "Zen Antique", serif;
        font-weight: bold;
    }

    .navbar {
        display: flex;
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        box-sizing: border-box;
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

    nav>a {
        display: block;
        box-sizing: border-box;
        padding: 0.9em;
    }

    nav {
        display: flex;
        justify-content: space-between;
        text-align: center;
    }

    .nav-btn {
        display: none;
    }

    @media (max-width: 800px) {
        .navbar {
            justify-content: end;
        }

        /* .riseup {
            width: 35%;
        } */
        .navbar_cont {
            display: flex;
            width: 90%;
            justify-content: end;
            text-align: center;
        }

        .link_lst {
            display: none;
            margin-top: 55px;
            transition: right 0.3s;
        }

        .nav-btn {
            display: block;
            font-size: 1.6em;
            padding-left: 10px;
            padding-right: 15px;
            padding-bottom: 3px;
            border: none;
            background-color: var(--text-color-dark);
            color: var(--text-color-bright);
            cursor: pointer;
        }

        .navbar_cont:hover nav {
            display: block;
            position: absolute;
            right: 1px;
            top: 0px;
            background-color: var(--navbar-background-color);
        }

        .navbar_cont:hover .link_lst {
            display: block;
            position: absolute;
            right: 1px;
            top: 0px;
            /* background-color: rgb(190, 50, 50); */
        }


    }
</style>