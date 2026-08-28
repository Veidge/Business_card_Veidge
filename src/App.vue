<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Navbar from "./components/ui/Navbar.vue"
import AboutPage from './components/pages/AboutPage.vue';
import ProjectPage from './components/pages/ProjectPage.vue';
import ContactsPage from "@/components/pages/ContactsPage.vue";

</script>

<template>
  <Navbar />
  <RouterView />
  <ContactsPage/>
</template>

<style scoped>

</style>
