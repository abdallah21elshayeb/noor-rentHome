<template>
  <div class="grid place-items-center">
    <div class="flex flex-col items-center h-full w-full gap-10">
      <div class="h-screen w-full">
        <img src="../assets/imgs/dubai.jpg" alt="dubai" class="h-full w-full object-cover" />
      </div>
      <div
        class="absolute top-0 left-0 w-full h-screen bg-gradient-to-l from-transparent via-black to-black opacity-60"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center"
      >
        <p class="text-xl lg:text-5xl font-bold font-custom" v-html="$t('mainPage.intro')" />
      </div>

      <main-view-details></main-view-details>
    </div>
  </div>
</template>

<script>
import mainViewDetails from '../components/viewsComponent/mainViewDetails.vue'
import { adminRolesStore } from '../stores/admin/adminRole'

export default {
  components: {
    mainViewDetails
  },

  methods: {
    async adminData() {
      const admin = adminRolesStore()

      await admin.getAllProperties()
    }
  }
}
</script>
