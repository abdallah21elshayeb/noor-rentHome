<template>
  <nav
    :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
    class="bg-opacity-20 backdrop-filter backdrop-blur-sm h-22 py-2 bg-gray-900 fixed w-full z-20 top-0 left-0"
  >
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
      <!-- Your logo and other content here -->
      <RouterLink to="/" class="flex items-center justify-center h-16">
        <img src="../../assets/imgs/noor.png" class="h-20 w-20 mr-3" alt="logo" />
        <!-- <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">NOOR</span> -->
      </RouterLink>

      <div class="flex md:order-2">
        <button
          @click="toggleMenu"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          :aria-expanded="isMenuOpen ? 'true' : 'false'"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <!-- Your SVG path data for the menu icon -->
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      <div
        :class="{
          hidden: !isMenuOpen,
          flex: isMenuOpen
        }"
        class="items-center bg-gray-400 bg-opacity-40 p-4 rounded justify-between w-full md:w-auto md:order-1 md:flex"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col w-full text-center items-center md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:align-end"
        >
          <!-- Your menu items -->
          <li>
            <RouterLink
              to="/"
              @click="toggleMenu"
              :class="{
                'block py-4  text-white lg:text-2xl lg:ml-8 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400 md:p-0':
                  $i18n.locale === 'ar',
                'block py-4 text-white lg:text-2xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400 md:p-0':
                  $i18n.locale === 'en'
              }"
              aria-current="page"
            >
              {{ $t('nav.home') }}</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/landlords"
              @click="toggleMenu"
              class="block py-4 text-white lg:text-2xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400 md:p-0"
              aria-current="page"
            >
              {{ $t('nav.landlords') }}</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/tenants"
              @click="toggleMenu"
              class="block py-4 text-white lg:text-2xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400 md:p-0"
              aria-current="page"
            >
              {{ $t('nav.tenants') }}</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/about"
              @click="toggleMenu"
              class="block py-4 text-white lg:text-2xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400 md:p-0"
              aria-current="page"
            >
              {{ $t('nav.about') }}</RouterLink
            >
          </li>
          <li
          
            class="block py-4 pl-3 pr-4 text-white lg:text-2xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400 md:p-0"
          >
            <language-dropdown  class="z-20 " />
          </li>
          <li class="block py-4 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">
            <profile-dropdown />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import LanguageDropdown from './languageDropdown.vue'
import profileDropdown from './profileDropdown.vue'

export default {
  components: {
    LanguageDropdown,
    profileDropdown
  },
  data() {
    return {
      isMenuOpen: false
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
        this.isMenuOpen = false
      }
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>
