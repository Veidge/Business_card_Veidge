import "./assets/main.css"

import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from "vue-router"
import App from './App.vue'
import AboutPage from "./components/pages/AboutPage.vue"
import ProjectPage from "./components/pages/ProjectPage.vue"
import ContactsPage from "./components/pages/ContactsPage.vue"

const routes = [
    { path: "/", component: AboutPage },
    { path: "/projects", component: ProjectPage },
    { path: "/contacts", component: ContactsPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
