<script setup lang="ts">

import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import ProjectPage from './ProjectPage.vue';
import SkillsPage from './SkillsPage.vue';
import ContactsPage from './ContactsPage.vue';

dayjs.extend(duration)

const year = dayjs.duration(dayjs().diff(dayjs(new Date(2007, 5, 11)))).years()


</script>

<template>
    <div>
        <h1>VEIDGE SILES 'DE SHADOWS'</h1>
        <h3>тихий обыватель здешних теней и хаосов</h3>
        <h2>Личность</h2>
        <div class="about_info">
            <div class="info_cont">
                <p>Звать Veidge Siles, {{ year }} лет, всё ещё ищет себя по пути, возложенному Судьбой, по кусочкам собирая себя. 
                    Джуниор программист, танкист со стажем 15 лет, в прошлом любитель шутеров и мейнер снайперский винтовок, в настоящем "сдержанный" и "адекватный" геймер, пытающийся получать от игр удовольствие.
                </p>
                <p>
                    Серьёзный и спокойный, "слишком взрослый", строгий, но тихий человек, который при нежелании брать ответственность часто за неё берётся, ведя стадо за собой. 
                    Отрёкся от прошлого, решив изменить как себя, так и свою жизнь, постепенно адаптируется и привыкает к новому сознанию. 
                    Однако прошлое ещё не забыто. 
                    Не привык действовать в команде, зачастую лучше оставить одного и дать разобраться самому. 
                    Не доверяет никому. Не воспринимает чувств как таковых. 
                    Не понимает эмоций (или не хочет их понимать).
                </p>
            </div>
        </div>
        <ProjectPage/>
        <SkillsPage />
        <ContactsPage />
    </div>
</template>

<style scoped>
    h1 {
        text-align: center;
        padding: 2em 0em 0.5em 0em;
        font-family: "Algerian", sans-serif;
        text-shadow: 2px 2px 10px var(--text-color-navbar);
        font-weight: bold;
    }

    h2 {
        text-align: center;
        padding: 1em;
        font-family: 'IntrospectC', sans-serif;
        font-style: italic;
        font-weight: bold;
    }

    h3 {
        text-align: center;
        padding: 0.5em;
        font-family: Science Gothic, serif;
        font-weight: bold;
        margin: 0em;
    }

    p {
        font-size: 14pt;
        text-align: justify;
        margin: 1em;
    }

    .about_info {
        text-align: center;
    }

    .info_cont {
        width: 90%;
        display: inline-block;
    }

    @media (width > 1000px) {
    h1 {
        font-size: 48px;
    }

    h2 {
        font-size: 32px;
    }

    h3 {
        font-size: 26.67px;
    }

}

</style>