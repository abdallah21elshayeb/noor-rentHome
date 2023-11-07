<template>
  <div>
    <new-nav-bar></new-nav-bar>
    <RouterView />
      <footer-design />
  </div>
</template>

<script>
import newNavBar from './components/mainUi/newNavBar.vue'
import FooterDesign from './components/mainUi/FooterDesign.vue'
import { RouterView } from 'vue-router'
export default {
  components: {
    newNavBar,
    FooterDesign,
    RouterView
  },
}
</script>
