<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
 
import vuecard from "../../assets/common/vuecard.txt?raw"
import aiproj from "../../assets/common/aiproj.txt?raw"
import primeparser from "../../assets/common/primeparser.txt?raw"
import films from "../../assets/common/films.txt?raw"
import digitstart from "../../assets/common/digitstart.txt?raw"
import cryptonit from "../../assets/common/cryptonit.txt?raw"
import weatherparser from "../../assets/common/weatherparser.txt?raw"
import tracker from "../../assets/common/tracker.txt?raw"
import spaceship from "../../assets/common/spaceship.txt?raw"

const projectLinks :Record<string, {header: string, img: string, text: string }> = {
    vueCard: {
        header: "Bussiness Card (Vue)",
        img: "/static/pictures/VeidgeSilesDeShadow.png",
        text: vuecard
    },

    aiProj: {
        header: "AI PDF Analyser",
        img: "/static/pictures/git_ai_tg.png",
        text: aiproj
    },

    primeParser: {
        header: "Prime Parser",
        img: "/static/pictures/prime_parser_pict.png",
        text: primeparser
    },

    films: {
        header: 'Приложение "КиноВитрина"',
        img: "/static/pictures/films_pict.jpg",
        text: films
    },

    digitStart: {
        header: 'Сайт "Цифровой старт"',
        img: "/static/pictures/digit_start_pict.png",
        text: digitstart
    },

    cryptonit: {
        header: 'Шифратор "Cryptonit"',
        img: "/static/pictures/cryptonit_pict.png",
        text: cryptonit
    },

    weatherParser: {
        header: "Weather Parser",
        img: "/static/pictures/weather_parser_pict.png",
        text: weatherparser
    },

    tracker: {
        header: "Achievement Tracker",
        img: "/static/pictures/achievement_trackerpng.png",
        text: tracker
    },

    spaceship: {
        header: "Игра Spaceship",
        img: "/static/pictures/spaceship_pict.png",
        text: spaceship
    }
}

const route = useRoute()

const info = computed(() => {
    if (typeof route.params.id === "string"
        && projectLinks[route.params.id] != undefined) {
        return projectLinks[route.params.id]
    }
    else {
        return undefined
    }
})

console.log(info.value?.text)

</script>

<template>
    <div class="block_cont">
        <div class="block_proj">
            <div class="left_cont">
                <h3>
                    {{ info?.header }}
                </h3>
                <div class="img_cont">
                    <img :src ="info?.img" alt="">
                </div>
            </div>
            <div class="right_cont" v-html="info?.text">
    
            </div>
        </div>
    </div>
</template>

<style scoped>
    img {
        /* width: 100%; */
        max-width: 450px;
        max-height: 600px;
    }

    a {
        margin: 1em;
    }

    .block_cont {
        justify-items: center;
    }

    .block_proj {
        display: flex;
        width: 90%;
        padding: 1.5em;
        margin-top: 2em;
        justify-content: center;
    }

    .left_cont {
        width: 40%;
        margin: 1em 0em 0em 1em;
        text-align: center;
    }

    .right_cont {
        width: 60%;
        padding: 2em 0em 0em 2em;
    }

    .p_proj {
        margin: 0px;
    }

    @media (width < 800px) {
        img {
            max-width: 600px;
        }

        .block_proj {
            display: block;
        }

        .left_cont {
            width: 100%;
            margin: 1em;
        }

        .right_cont {
            width: 100%;
            padding: 1em;
            margin: 1em 0em 0em 0em;
        }
    }

</style>