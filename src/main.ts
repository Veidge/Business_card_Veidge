import "./assets/main.css"

import { createApp } from 'vue'
import { createMemoryHistory, createRouter, createWebHistory } from "vue-router"
import App from './App.vue'
import AboutPage from "./components/pages/AboutPage.vue"
import ProjectPage from "./components/pages/ProjectPage.vue"
import ContactsPage from "./components/pages/ContactsPage.vue"
import CurrentProject from "./components/pages/CurrentProject.vue"
import SkillsPage from "./components/pages/SkillsPage.vue"

const routes = [
    { path: "/", component: AboutPage },
    { path: "/projects", component: ProjectPage },
    { path: "/contacts", component: ContactsPage },
    { path: "/projects/:id", component: CurrentProject },
    { path: "/skills", component: SkillsPage },
    { path: "/Business_card_Veidge", component: AboutPage },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
