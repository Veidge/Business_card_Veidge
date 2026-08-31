<script setup lang="ts">
import { computed } from 'vue';

import GithubLogo from "@/assets/pictures/github_git_icon_145985.svg";
import GmailLogo from "@/assets/pictures/gmail_new_logo_icon_159149.svg";
import SteamLogo from "@/assets/pictures/steam_icon_135152.svg";
import DiscordLogo from "@/assets/pictures/discord_icon_130958.svg";
import YandexMailLogo from "@/assets/pictures/Yandex_Mail_icon.svg";


const linksImages = [
    {link: "https://github.com/Veidge",
    src: GithubLogo,
    alt: "https://github.com/Veidge",
    isOff: true},

    {link: "mailto:alex.chesnokov.2007@gmail.com?body=Связи осуществляется с персонального сайта Veidge.",
    src: "src/assets/pictures/gmail_new_logo_icon_159149.svg",
    alt: "alex.chesnokov.2007@gmail.com",
    isOff: true},

    {link: "https://steamcommunity.com/profiles/76561198131288506/",
    src: "src/assets/pictures/steam_icon_135152.svg",
    alt: "https://steamcommunity.com/profiles/76561198131288506/",
    isOff: false},

    {link: "https://discord.com/users/760091035296333894",
    src: "src/assets/pictures/discord_icon_130958.svg",
    alt: "https://discord.com/users/760091035296333894",
    isOff: false},

    {link: "mailto:veidge.siles@yandex.ru?body=Связи осуществляется с персонального сайта Veidge.",
    src: "src/assets/pictures/Yandex_Mail_icon.svg",
    alt: "veidge.siles@yandex.ru",
    isOff: true}
]

const isOfficial = computed(() => {
    return linksImages.filter(l => l.isOff)
})

const isCommercial = computed(() => {
    return linksImages.filter(l => !l.isOff)
})

</script>

<template>
    <div class="contacts_block">
        <div class="contacts_cont">
            <div class="left_official">
                <a v-for="(link, id) in isOfficial" :href="link.link" :key="id">
                    <img :src="link.src" :alt="link.alt">
                </a>
            </div>
            <div class="right_commercial">
                <a v-for="(link, id) in isCommercial" :href="link.link" :key="id">
                    <img :src="link.src" :alt="link.alt">
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    img {
        width: 45px;
    }

    a {
        margin: 0em;
        padding: 1.25em 0.25em 0em 0.25em;
    }

    .contacts_block {
        background: var(--background-bottom);
        padding: 1em;
        justify-items: center;
    }

    .contacts_cont {
        display: flex;
        width: 90%;
        justify-content: space-between;
        margin: 1em 0;
    }

    @media (width < 340px) {
        .contacts_block {
            padding-inline: 0;

        }
    }


</style>