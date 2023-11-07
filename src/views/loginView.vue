<template>
  <div
    class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12"
  >
    <alert-box :show="isLoading" :title="$t('loginPage.loading') + '.....'" fixed>
      <loader-design />
    </alert-box>
    <div
      class="relative bg-gray-200 px-6 pb-8 pt-10 shadow-xl ring-1 rounded-md ring-gray-900/5 sm:mx-auto sm:w-1/3"
    >
      <div class="mx-auto max-w-md">
        <div class="flex justify-center">
          <img src="../assets/imgs/noor.png" class="h-40" alt="Noor" />
        </div>
        <div
          :class="{
            'divide-y divide-gray-300/50 text-center lg:text-left': $i18n.locale === 'en',
            'divide-y divide-gray-300/50 text-center lg:text-right': $i18n.locale === 'ar'
          }"
        >
          <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
            <p class="text-2xl">{{ $t('loginPage.sign') }}</p>
            <div>
              <div>
                <form>
                  <div class="space-y-4">
                    <div class="relative">
                      <div
                        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                          <path
                            d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        v-model="email"
                        :placeholder="$t('loginPage.email')"
                        class="block w-full rounded-lg border-none p-4 pl-10 text-sm text-gray-900 shadow-xl focus:outline-none focus:ring focus:ring-gray-300"
                      />
                    </div>
                    <div class="relative">
                      <div
                        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                          <path
                            d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
                          />
                        </svg>
                      </div>
                      <input
                        v-model="password"
                        :type="passwordType"
                        :placeholder="$t('loginPage.password')"
                        class="block w-full rounded-lg border-none p-4 pl-10 text-sm text-gray-900 shadow-xl focus:outline-none focus:ring focus:ring-gray-300"
                      />
                      <button @click.prevent="handlePassword" class="absolute top-4 right-3">
                        <span v-if="passwordType == 'password'">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 576 512"
                          >
                            <path
                              d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
                            />
                          </svg>
                        </span>
                        <span v-else>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 640 512"
                          >
                            <path
                              d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                    <p v-if="!formIsValid">
                      {{ $t('loginPage.warning') }}
                    </p>
                    <div class="flex justify-center">
                      <button
                        type="button"
                        @click="login"
                        class="w-1/2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 lg:text-xl"
                      >
                        {{ $t('loginPage.log') }}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <a href="#" class="hover:text-blue-500">{{ $t('loginPage.forget') }}</a>
          </div>
          <div class="pt-8 text-base font-semibold leading-7">
            <p class="text-gray-900">{{ $t('loginPage.haveAccount') }}</p>
            <p>
              <router-link to="/register" class="text-sky-500 hover:text-sky-600"
                >{{ $t('loginPage.signUp') }} &rarr;</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loginDataStore } from '../stores/auth/login'
import loaderDesign from '../components/mainUi/loaderDesign.vue'
import alertBox from '../components/mainUi/alertBox.vue'
export default {
  components: {
    loaderDesign,
    alertBox
  },
  data() {
    return {
      password: '',
      email: '',
      passwordType: 'password',
      showPassword: false,
      isError: false,
      isLoading: false,
      formIsValid: true,
      errorMessage: ''
    }
  },

  methods: {
    handlePassword() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
    },

    async login() {
      this.formIsValid = true
      if (this.email === '' || this.password === '') {
        this.formIsValid = false
        return
      }
      this.isLoading = true

      const authStore = loginDataStore()
      const payload = {
        email: this.email,
        password: this.password
      }

      await authStore.login(payload)
      if (!authStore.noPath) {
        const redirectUrl = '/' + (this.$route.query.redirect || 'home')
        this.$router.replace(redirectUrl)
      }

      this.isLoading = false
    },
  }
}
</script>
