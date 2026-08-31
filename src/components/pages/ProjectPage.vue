<script setup lang="ts">
import { computed, ref } from 'vue';
import ContactsPage from './ContactsPage.vue';
import AuroriteLogo from "@/assets/pictures/aurorite.png";
import VeidgeLogo from "@/assets/pictures/VeidgeSilesDeShadow.png";
import AiTGBotLogo from "@/assets/pictures/ai_pdf_logo.png";
import WarframeParserLogo from "@/assets/pictures/warf_parser_ic.png";
import FilmsLogo from "@/assets/pictures/films_logo.jpg";
import DigitStartLogo from "@/assets/pictures/digit_start_logo.png";
import CryptonitLogo from "@/assets/pictures/cryptonit_full.png";
import WeatherParserLogo from "@/assets/pictures/weather_parser_logo.png";
import AchievementTrackerLogo from "@/assets/pictures/achievement_tracker_logo.png";
import SpaceshipLogo from "@/assets/pictures/shapeship_logo.png";

const projectObjects = [
    {name: 'Aurorite',
    imgSource: AuroriteLogo,
    id: "aurorite",
    isCompleted: false},

    {name: 'Business Card (Vue)',
    imgSource: VeidgeLogo,
    id: "vueCard",
    isCompleted: true},

    {name: 'AI PDF-Analyser', 
    imgSource: AiTGBotLogo,
    id: "aiProj",
    isCompleted: true},

    {name: 'Prime Parser', 
    imgSource: WarframeParserLogo,
    id: "primeParser",
    isCompleted: true},

    {name: 'Мобильная витрина фильмов',
    imgSource: FilmsLogo,
    id: "films",
    isCompleted: true},

    {name: 'Сайт Цифровой старт',
    imgSource: DigitStartLogo,
    id: "digitStart",
    isCompleted: true},

    {name: 'Шифратор Cryptonit',
    imgSource: CryptonitLogo,
    id: "cryptonit",
    isCompleted: true},

    {name: 'Weather Parser', 
    imgSource: WeatherParserLogo,
    id: "weatherParser",
    isCompleted: true},

    {name: 'Achievement Tracker', 
    imgSource: AchievementTrackerLogo,
    id: "tracker",
    isCompleted: true},
    
    {name: 'Игра Spaceship', 
    imgSource: SpaceshipLogo,
    id: "spaceship",
    isCompleted: true},
]

const completed = computed(() => {
    return projectObjects.filter(p => !p.isCompleted)
})

const notCompleted = computed(() => {
    return projectObjects.filter(p => p.isCompleted)
})

</script>

<template>
    <h2>Портфолио</h2>
    <div class="projects">
        <h3>Текущие проекты</h3>
        <div class="act_projects">
            <div class="block_cont">
                <div class="proj_cont">
                    <RouterLink :to="`/projects/${project.id}`" :key="id"
                        v-for="(project, id) in completed" 
                    >
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
                    <RouterLink :to="`/projects/${project.id}`" :key="id" 
                        v-for="(project, id) in notCompleted" 
                    >
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

<style scoped>
    img {
        /* max-width: 330px; */
        width: 100%;
    }

    a {
        text-decoration: none;
    }

    h2 {
        margin-top: 1.5em;
        padding: 0.5em;
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
        margin-bottom: 1.5em;
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