<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

import aurorite from "../../assets/common/aurorite.txt?raw";
import vuecard from "../../assets/common/vuecard.txt?raw";
import aiproj from "../../assets/common/aiproj.txt?raw";
import primeparser from "../../assets/common/primeparser.txt?raw";
import films from "../../assets/common/films.txt?raw";
import digitstart from "../../assets/common/digitstart.txt?raw";
import cryptonit from "../../assets/common/cryptonit.txt?raw";
import weatherparser from "../../assets/common/weatherparser.txt?raw";
import tracker from "../../assets/common/tracker.txt?raw";
import spaceship from "../../assets/common/spaceship.txt?raw";

import AuroriteLogo from "@/assets/pictures/aurorite-full-dark.svg";
import VeidgeLogo from "@/assets/pictures/VeidgeSilesDeShadow.png";
import AiTGBotLogo from "@/assets/pictures/git_ai_tg.png";
import WarframeParserLogo from "@/assets/pictures/prime_parser_pict.png";
import FilmsLogo from "@/assets/pictures/films_pict.jpg";
import DigitStartLogo from "@/assets/pictures/digit_start_pict.png";
import CryptonitLogo from "@/assets/pictures/cryptonit_pict.png";
import WeatherParserLogo from "@/assets/pictures/weather_parser_pict.png";
import AchievementTrackerLogo from "@/assets/pictures/achievement_trackerpng.png";
import SpaceshipLogo from "@/assets/pictures/spaceship_pict.png";

const projectLinks :Record<string, {header: string, img: string, text: string }> = {
    aurorite: {
        header: "Aurorite",
        img: AuroriteLogo,
        text: aurorite
    },

    vueCard: {
        header: "Business Card (Vue)",
        img: VeidgeLogo,
        text: vuecard
    },

    aiProj: {
        header: "AI PDF Analyser",
        img: AiTGBotLogo,
        text: aiproj
    },

    primeParser: {
        header: "Prime Parser",
        img: WarframeParserLogo,
        text: primeparser
    },

    films: {
        header: 'Приложение "КиноВитрина"',
        img: FilmsLogo,
        text: films
    },

    digitStart: {
        header: 'Сайт "Цифровой старт"',
        img: DigitStartLogo,
        text: digitstart
    },

    cryptonit: {
        header: 'Шифратор "Cryptonit"',
        img: CryptonitLogo,
        text: cryptonit
    },

    weatherParser: {
        header: "Weather Parser",
        img: WeatherParserLogo,
        text: weatherparser
    },

    tracker: {
        header: "Achievement Tracker",
        img: AchievementTrackerLogo,
        text: tracker
    },

    spaceship: {
        header: "Игра Spaceship",
        img: SpaceshipLogo,
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
        max-width: 390px;
        max-height: 390px;
    }

    a {
        margin: 1em;
    }

    p {
        text-align: left;
    }

    .block_cont {
        justify-items: center;
    }

    .block_proj {
        display: flex;
        width: 90%;
        height: 614.5px;
        padding: 1.5em;
        padding-top: 3.5em;
        justify-items: center;
        box-sizing: border-box;
    }

    .left_cont {
        width: 40%;
        margin: 1em 0 0 1em;
        text-align: center;
    }

    .right_cont {
        width: 60%;
        padding: 2em 0 0 2em;
        text-align: left;
    }

    .p_proj {
        margin: 0;
    }

    @media (width < 800px) {
        img {
            max-width: 600px;
        }

        .block_proj {
            display: block;
            height: auto;
        }

        .left_cont {
            width: 100%;
            margin: 1em;
            justify-items: center;
        }

        .right_cont {
            width: 100%;
            padding: 1em;
            margin: 1em 0 0 0;
        }
    }

    @media (width < 550px) {
        img {
            max-width: 400px;
        }
    }

    @media (width < 415px) {
        img {
            max-width: 250px;
        }

        .right_cont {
            padding: 0;
            padding-top: 1em;
        }
    }

</style>