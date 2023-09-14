<template>
  <div class="relative">
    <button href="#" @click="toggleVisibility" class="flex items-center">
      <img :src="`/flag_${$i18n.locale}.svg`" alt="flag" class="w-8 h-8" />
      <span class="ml-2">{{ $i18n.locale.toUpperCase() }}</span>
    </button>

    <transition name="dropdown-fade">
      <ul
        
        v-if="isVisible"
        ref="dropdown"
        class="absolute normal-case font-normal sm:left-0 lg:right-0 lg:mr-20 bg-white shadow overflow-hidden rounded w-48 border mt-2 py-1 lg:z-20"
      >
      <!-- v-on-clickaway="hideDropdown" -->
        <li>
          <a href="#" ref="account" @click.prevent="setLocale('en')" class="flex items-center px-3 py-3 hover:bg-gray-200">
            <img src="/flag_en.svg" alt="english flag" class="w-8 h-8" />
            <span class="text-black ml-3">English</span>
          </a>
        </li>
        <li>
          <a href="#" ref="account" @click.prevent="setLocale('ar')" class="flex items-center px-3 py-3 hover:bg-gray-200">
            <img src="/flag_ar.svg" alt="arabic flag" class="w-8 h-8" />
            <span class="text-black ml-3">العربية</span>
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
// import { mixin as clickaway } from 'vue-clickaway'
export default {
  // mixins: [clickaway],
  data() {
    return {
      isVisible: false,
      focusedIndex: 0
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible
    },
    hideDropdown() {
      this.isVisible =false,
      this.focusedIndex = 0
    },
    setLocale(locale) {
      this.$i18n.locale = locale;
      // this.$router.push({
      //   params: {lang: locale}
      // });
      this.hideDropdown()
    }
  }
}
</script>
