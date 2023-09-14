<template>
    <div class="">
        <new-nav-bar></new-nav-bar>
        <RouterView />
        <footer>
            <footer-design></footer-design>
        </footer>
    </div>
</template>

<script setup>
import newNavBar from './components/mainUi/newNavBar.vue'
import FooterDesign from './components/mainUi/FooterDesign.vue'
import { RouterView } from 'vue-router'
</script>
