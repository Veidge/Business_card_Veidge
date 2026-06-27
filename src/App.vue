<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Navbar from "./components/ui/Navbar.vue"
import AboutPage from './components/pages/AboutPage.vue';
import ProjectPage from './components/pages/ProjectPage.vue';

</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style scoped>

</style>
