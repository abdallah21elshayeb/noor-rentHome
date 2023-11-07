<template>
  <div class="grid">
    <div class="h-full w-full gap-10" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
      <div
        class="h-96 bg-gradient-to-r from-slate-400 to-slate-900 grid place-items-center justify-center"
      >
        <p class="text-white text-xl lg:text-4xl">{{ $t('profilePage.welcome') }} {{ userData }}</p>
      </div>

      <div class="my-10 mx-auto p-5 max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-7xl ">
        <p class="text-xl text-center mb-7 lg:text-5xl">{{ $t('profilePage.yourRequest') }}</p>
        <admin-table></admin-table>
      </div>
    </div>
  </div>
</template>

<script>
import adminTable from '../components/mainUi/adminTable.vue'
import { loginDataStore } from '../stores/auth/login'
export default {
  components: {
    adminTable
  },
  data() {
    return {}
  },
  computed: {
    userData() {
      const authStore = loginDataStore()
      return authStore.userName
    }
  }
}
</script>
