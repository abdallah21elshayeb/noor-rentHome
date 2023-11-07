<template>
  <div class="relative" @click="toggleDropdown">
    <!-- Profile button with circular avatar -->
    <button class="w-full text-left border-b-orange-200 flex items-center">
      <div
        v-if="isLoggedIn"
        class="w-10 h-10 bg-blue-500 text-white font-bold rounded-full flex items-center justify-center"
      >
        {{ userDataFirstLetter }}
      </div>
      <div
        v-else
        class="w-10 h-10 bg-blue-500 text-white font-bold rounded-full flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
          <path
            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
          />
        </svg>
      </div>
    </button>

    <!-- Dropdown content -->
    <div
      v-if="isDropdownOpen"
      @click.stop
      class="absolute bottom-0 sm:bottom-auto right-0 mt-2 w-48 py-2 z-50 bg-white border border-gray-300 rounded-lg shadow-lg "
    >
      <ol class="divide-y divide-gray-100">
        <li>
          <p class="block w-full text-center py-4">
            {{ $t('nav.welcome') }}
            <span v-if="isLoggedIn" class="text-blue-500">{{ userData }}</span>
          </p>
        </li>
        <!-- Profile button -->
        <li>
          <RouterLink
            to="/profile"
            @click="toggleDropdown"
            class="block w-full text-left px-4 py-2 hover:bg-gray-100"
            aria-current="page"
          >
            {{ $t('nav.profile') }}</RouterLink
          >
        </li>
        <li v-if="userType === 'admin'">
          <RouterLink
            to="/requests"
            @click="toggleDropdown"
            class="block w-full text-left px-4 py-2 hover:bg-gray-100"
            aria-current="page"
          >
            {{ $t('nav.requests') }}</RouterLink
          >
        </li>
        <!-- Login button -->
        <li v-if="isLoggedIn">
          <button @click="logout" class="block w-full text-left px-4 py-2 hover:bg-gray-100">
            {{ $t('nav.logout') }}
          </button>
        </li>
        <li v-else>
          <RouterLink
            to="/login"
            @click="toggleDropdown"
            class="block w-full text-left px-4 py-2 hover:bg-gray-100"
            aria-current="page"
          >
            {{ $t('nav.login') }}</RouterLink
          >
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import { loginDataStore } from '../../stores/auth/login'
export default {
  data() {
    return {
      isDropdownOpen: false,
      isMenuOpen: false,
      userFirstName: '' // Replace with the first letter of the user's name
    }
  },
  computed: {
    isLoggedIn() {
      const authStore = loginDataStore()
      return authStore.isAuthenticated
    },
    userData() {
      const authStore = loginDataStore()
      return authStore.userName
    },
    userType() {
      const authStore = loginDataStore()
      return authStore.userType
    },
    userDataFirstLetter() {
      const authStore = loginDataStore()
      return authStore.userName1stLetter
    }
  },
  mounted() {
    document.addEventListener('click', this.closeDropdown)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeDropdown)
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    closeDropdown(event) {
      if (!this.$el.contains(event.target)) {
        this.isDropdownOpen = false
      }
    },

    logout() {
      const authStore = loginDataStore()

      authStore.logout()
      this.$router.replace('/home')
    }
  }
}
</script>

<style>
/* Add Tailwind CSS classes here for additional styling */
</style>
