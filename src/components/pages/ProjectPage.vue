<script setup lang="ts">
import { ref } from 'vue';

const projectObjects = [
    {name: 'Bussiness Card (Vue)', 
    imgSource: "static/pictures/VeidgeSilesDeShadow.png",
    id: "/vueCard",
    isCompleted: false},

    {name: 'AI PDF-Analyser', 
    imgSource: "/static/pictures/ai_pdf_logo.png",
    id: "/aiProj",
    isCompleted: false},

    {name: 'Prime Parser', 
    imgSource: "/static/pictures/warf_parser_ic.png",
    id: "/primeParser",
    isCompleted: true},

    {name: 'Приложение "КиноВитрина"', 
    imgSource: "/static/pictures/films_logo.jpg",
    id: "/films",
    isCompleted: true},

    {name: 'Сайт "Цифровой старт"', 
    imgSource: "/static/pictures/digit_start_logo.png",
    id: "/digitStart",
    isCompleted: true},

    {name: 'Шифратор "Cryptonit"', 
    imgSource: "/static/pictures/cryptonit_full.png",
    id: "/cryptonit",
    isCompleted: true},

    {name: 'Weather Parser', 
    imgSource: "/static/pictures/weather_parser_logo.png",
    id: "/weatherParser",
    isCompleted: true},

    {name: 'Achievement Tracker', 
    imgSource: "/static/pictures/achievement_tracker_logo.png",
    id: "/tracker",
    isCompleted: true},
    
    {name: 'Игра Spaceship', 
    imgSource: "/static/pictures/shapeship_logo.png",
    id: "/spaceship",
    isCompleted: true},

]
</script>

<template>
    <h2>Портфолио</h2>
    <div class="projects">
        <h3>Текущие проекты</h3>
        <div class="act_projects">
            <div class="block_cont">
                <div class="proj_cont">
                    <RouterLink :to="project.id" 
                        v-for="project in projectObjects.filter(p => !p.isCompleted)" >
                        <div class="proj_card">
                            <div class="proj_img">
                                <img :src="project.imgSource" alt=""> 
                            </div>
                            <div class="proj_text">
                                <h5> {{ project.name }} </h5>
                                <span>Подробнее</span>
                            </div>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
        <h3>Завершённые проекты</h3>
        <div class="past_projects">
            <div class="block_cont">
                <div class="proj_cont">
                    <RouterLink :to="project.id" 
                        v-for="project in projectObjects.filter(p => p.isCompleted)" >
                        <div class="proj_card">
                            <div class="proj_img">
                                <img :src="project.imgSource" alt=""> 
                            </div>
                            <div class="proj_text">
                                <h5> {{ project.name }} </h5>
                                <span>Подробнее</span>
                            </div>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>

</template>

<style>
    img {
        /* max-width: 330px; */
        width: 100%;
    }

    a {
        text-decoration: none;
    }

    h3 {
        margin: 1em 0em;
    }

    h5 {
        color: var(--text-color-light);
        font-weight: bold;
    }

    span {
        color: var(--text-color-bright);
        margin-bottom: 5px;
        font-weight: bold;
    }

    .projects {
        text-align: center;
    }

    .act_projects {
        text-align: center;
    }

    .proj_cont {
        display: flex;
        width: 90%;
        justify-content: center;
        flex-wrap: wrap;
        padding: 1em;
        padding-top: 2.5em;
        margin: auto;
        gap: 10px 20px;
        background: var(--background-wood-dark);
        border-radius: 1.5em;
        box-shadow: 0px 0px 2.5px 0px rgba(0, 0, 0, 0.5);
    }

    .proj_card {
        display: flex;
        width: 550px;
        height: 300px;
        background: var(--background-white);
        margin: 0.5em;
        border-style: solid;
        border-radius: 1.5em;
        border-color: var(--outline-color);
        box-shadow: 0px 0px 2.5px 0px rgba(0, 0, 0, 0.5);

    }

    .proj_img {
        width: 50%;
        margin: 1em;
    }

    .proj_text {
        width: 50%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        text-align: justify;
        padding: 1em;
    }

    .router-link {
        text-decoration: none;
    }

    @media (width < 700px) {
        .proj_card {
            display: inline-block;
            width: 90%;
            height: 375px;
            justify-items: center;
            position: relative;
        }

        .proj_img {
            width: 93.75%;
            height: 60%;
            text-align: center;
            margin: 0.5em;
        }

        .proj_text {
            width: 90%;
            position: absolute;
            bottom: 0;
            text-align: left;

        }

        img {
            width: 100%;
        }
    }

    /* @media (width < 350px) {
        .proj_card {
            display: inline-block;
            height: 375px;
            width: 90%;
            justify-content: center;
        }
    } */


</style>