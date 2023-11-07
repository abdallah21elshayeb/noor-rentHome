<template>
  <div class="relative">
    <button href="#" @click="toggleVisibility" class="flex items-center">
      <img :src="`/flag_${$i18n.locale}.svg`" alt="flag" class="w-8 h-8" />
      <span :class="{'ml-2': $i18n.locale === 'en','mr-2': $i18n.locale === 'ar'}">{{ $i18n.locale.toUpperCase() }}</span>
    </button>

    <transition name="dropdown-fade" :dir="$i18n.locale == 'ar'? 'ltr' : 'ltr'">
      <ul
        v-if="isVisible"
        ref="dropdown"
        class="absolute normal-case font-normal bottom-0 right-0 sm:bottom-auto sm:left-0  lg:mr-20 bg-white shadow overflow-hidden rounded w-48 border mt-2 py-1 lg:z-20"
      >
        <li>
          <a
            href="#"
            ref="account"
            @click.prevent="setLocale('en')"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
          >
            <img src="/flag_en.svg" alt="english flag" class="w-8 h-8" />
            <span class="text-black ml-3">English</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            ref="account"
            @click.prevent="setLocale('ar')"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
          >
            <img src="/flag_ar.svg" alt="arabic flag" class="w-8 h-8" />
            <span class="text-black ml-3">العربية</span>
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      focusedIndex: 0
    }
  },
  mounted() {
    document.addEventListener('click', this.closeDropdown)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeDropdown)
  },
  methods: {
    closeDropdown(event) {
      if (!this.$el.contains(event.target)) {
        this.isVisible = false
      }
    },
    toggleVisibility() {
      this.isVisible = !this.isVisible
    },
    hideDropdown() {
      ;(this.isVisible = false), (this.focusedIndex = 0)
    },
    setLocale(locale) {
      this.$i18n.locale = locale

      this.hideDropdown()
    }
  }
}
</script>
