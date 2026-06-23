<script setup lang="ts">

import { ref } from 'vue'

const hardSkills = [
    {
        header: "Backend-разработка",
        exp: "2 года",
        text: "работа с кодом, логикой, алгоритмами (Python 2 года, C# ~10 месяцев, Java ~10 месяцев)"
    },
    {
        header: "Frontend-разработка",
        exp: "0.5 года",
        text: "работа с сайтами и визуальной частью (HTML + CSS), навыки работы с Vue.js"
    },
    {
        header: "DataBase administration",
        exp: "1.5 года",
        text: 'работа с базами данных (NoSQL: ".json" формат, SQL: MS SMS, PostgreSQL, SQLite)'
    },
    {
        header: "Настройка интерфейсов, дизайн",
        exp: "1 год",
        text: "Проектирование и разработка пользовательского интерфейса, анализ стиля и дизайна, подведение итоговой концепции (.xml разметка, HTML + CSS, Tkinter, CustomTkinter, PyQT5)"
    },
    {
        header: "Тестирование",
        exp: "1 год",
        text: "работа над проверкой качества и работоспособности продукта (pytest, selenium, ручное тестирование с тест-кейсами)"
    }
]

const softSkills = [
    {
        header: "Постоянное обучение",
        text: "более глубокое изучение при необходимости и постоянное расширение возможностей"
    },
    {
        header: "Планирование (time management)",
        text: "анализ задач и объёма работ, умение планировать деятельность в соответствии со сроками проекта"
    },
    {
        header: "Лидерство",
        text: "умение распределять задачи и организовывать слаженную работу в команде, при несении ответственности за проект"
    },
    {
        header: "Концентрация",
        text: "фокусирование на работе с самостоятельным изучением всех необходимых основ"
    },
    {
        header: "Спокойствие и рассудительность",
        text: "способность оценивать проект с учётом мелких деталей реализации, разбивать большие работы на мелкие задачи без лишней паники и тревоги"
    },
    {
        header: "Желание работать и совершенствоваться",
        text: "постоянная работа над собой, анализ своих возможностей и многофакторный рост как личности"
    },
    {
        header: "Деловое общение",
        text: "понимание, как и с кем общаться в различных окружениях"
    },
]

</script>

<template>
    <h2>Навыки</h2>
    <div class="block_cont">
        <div class="skills_cont">
            <div class="hard_cont">
                <h3>Профессиональные навыки</h3>
                <h3>Hard skills</h3>
                <div class="hard_skills">
                    <div class="skill_card" v-for="skillInfo in hardSkills">
                        <h5>
                            {{ skillInfo.header }}
                        </h5>
                        <h5>
                            {{ skillInfo.exp }}
                        </h5>
                        <p>
                            {{ skillInfo.text }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="soft_cont">
                <h3>Личностные качества</h3>
                <h3>Soft skills</h3>
                <div class="soft_skills">
                    <div class="skill_card" v-for="skillInfo in softSkills">
                        <h5>
                            {{ skillInfo.header }}
                        </h5>
                        <p>
                            {{ skillInfo.text }}
                        </p>
                    </div>

                </div>

            </div>
        </div>
    </div>


</template>

<style scoped>
    h3 {
        padding: 0em;
        margin: 0.5em;
    }

    h5 {
        color: var(--text-color-light);
        font-weight: bold;
        margin: 0.5em 1em 0em 1em;
    }

    p {
        color: var(--text-color-light);

    }

    .block_cont {
        display: block;
        justify-items: center;
    }

    .skills_cont {
        width: 90%;
        display: flex;
        justify-content: center;
    }

    .hard_cont {
        width: 45%;
        margin-right: 1em;
    }

    .soft_cont {
        width: 55%;
        margin-left: 1em;
    }

    .hard_skills {
        margin-top: 2em;
    }

    .soft_skills {
        margin-top: 2em;
    }

    .skill_card {
        /* border-width: 5px; */
        border-style: solid;
        border-color: #8c402b;
        border-radius: 10px;
        background: var(--background-white);
        margin: 0.75em 0em;
    }

    @media (width < 700px) {
        .skills_cont {
            display: block;
            justify-items: center;
        }
        
        .hard_cont {
            width: 100%;
            margin: 0em 0em 3em 0em;
        }

        .soft_cont {
            width: 100%;
            margin-left: 0em;
        }
    }

    @media (width < 370px) {
        h3 {
            font-size: 18pt;
            margin-inline: 0em;
        }

        h5 {
            margin: 0.5em;
        }

        p {
            margin: 0.5em;
        }
    }


</style>