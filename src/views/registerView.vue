<template>
  <div class="flex min-h-screen justify-center pt-16 bg-gray-100 text-gray-900" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
    <div
      class="m-0 flex max-w-screen-xl flex-1 justify-center bg-slate-100 shadow sm:m-10 sm:rounded-lg"
    >
      <div class="p-6 w-full sm:p-12 lg:w-1/2 xl:w-5/12">
        <div>
          <img src="../assets/imgs/noor.png" class="w-32 mx-auto" alt="noor" />
        </div>
        <form>
        <div class="mt-12 flex flex-col items-center">
          <h1 class="text-2xl font-extrabold xl:text-3xl">{{ $t('signUpPage.signUp') }}</h1>
          <div class="mt-8 w-full flex-1">
            <!--<div class="flex flex-col items-center">
               <button
                class="focus:shadow-outline flex w-full max-w-xs items-center justify-center rounded-lg bg-indigo-100 py-3 font-bold text-gray-800 shadow-sm transition-all duration-300 ease-in-out hover:shadow focus:shadow-sm focus:outline-none"
              >
                <div class="rounded-full bg-white p-2">
                  <svg class="w-4" viewBox="0 0 533.5 544.3">
                    <path
                      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                      fill="#4285f4"
                    />
                    <path
                      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                      fill="#34a853"
                    />
                    <path
                      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                      fill="#fbbc04"
                    />
                    <path
                      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                      fill="#ea4335"
                    />
                  </svg>
                </div>
                <span class="ml-4"> Sign Up with Google </span>
              </button>

              <button
                class="focus:shadow-outline mt-5 flex w-full max-w-xs items-center justify-center rounded-lg bg-indigo-100 py-3 font-bold text-gray-800 shadow-sm transition-all duration-300 ease-in-out hover:shadow focus:shadow-sm focus:outline-none"
              >
                <div class="rounded-full bg-white p-1">
                  <svg class="w-6" viewBox="0 0 32 32">
                    <path
                      fill-rule="evenodd"
                      d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                    />
                  </svg>
                </div>
                <span class="ml-4"> Sign Up with GitHub </span>
              </button>
            </div>

            <div class="my-12 border-b text-center">
              <div
                class="inline-block translate-y-1/2 transform bg-white px-2 text-sm font-medium leading-none tracking-wide text-gray-600"
              >
                Or sign up with e-mail
              </div>
            </div> -->

            <div class="mx-auto max-w-xs space-y-4">
              <div class="relative">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                </div>
                <input
                  type="text"
                  v-model="name"
                  :placeholder="$t('signUpPage.name')"
                  class="block w-full rounded-lg border-none p-4 pl-10 text-sm text-gray-900 shadow-xl focus:outline-none focus:ring focus:ring-gray-300"
                />
              </div>
              <div class="relative">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                </div>
                <input
                  type="text"
                  v-model="address"
                  :placeholder="$t('signUpPage.address')"
                  class="block w-full rounded-lg border-none p-4 pl-10 text-sm text-gray-900 shadow-xl focus:outline-none focus:ring focus:ring-gray-300"
                />
              </div>
              <div class="relative">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
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
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                    <path
                      d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
                    />
                  </svg>
                </div>
                <input
                  v-model="password"
                  type="password"
                  :placeholder="$t('loginPage.password')"
                  class="block w-full rounded-lg border-none p-4 pl-10 text-sm text-gray-900 shadow-xl focus:outline-none focus:ring focus:ring-gray-300"
                />
              </div>
              <p v-if="!formIsValid">
                      {{ $t('loginPage.warning') }}
                    </p>
              <button
              type="button"
                        @click="signup"
                class="focus:shadow-outline mt-5 flex w-full items-center justify-center rounded-lg bg-blue-300 py-4 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out hover:bg-indigo-700 focus:outline-none"
              >
                <svg
                  class="-ml-2 h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <span :class="{'ml-4': $i18n.locale === 'en','mr-4': $i18n.locale === 'ar'}">{{ $t('signUpPage.signUp') }} </span>
              </button>
              <div class="pt-8 text-base font-semibold leading-7">
                <p class="text-gray-900">{{ $t('signUpPage.haveAccount') }}</p>
                <p>
                  <router-link to="/login" class="text-sky-500 hover:text-sky-600"
                    >{{ $t('signUpPage.login') }} &rarr;</router-link
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
      </div>
      <div class="hidden flex-1 bg-slate-200 text-center lg:flex lg:justify-center lg:items-center">
        <div class="m-12 w-full bg-contain bg-center bg-no-repeat xl:m-16">
          <img src="../assets/imgs/dubaiHome.png" alt="UAE" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {signUpDataStore} from '../stores/auth/signup';
export default {
  data() {
    return {
      name: '',
      address: '',
      email: '',
      password: '',
      formIsValid: true,
    }
  },

  methods: {
   async signup() {
    this.formIsValid = true
      if (this.name === '' || this.address === '' || this.email === ''|| !this.email.includes('@') || this.password === '' || this.password.length < 6) {
        this.formIsValid = false
        return
      }
      const authStore = signUpDataStore();

      const payload = {
        name: this.name,
        address: this.address,
        email: this.email,
        password: this.password
      }

      await authStore.signup(payload);
      if (!authStore.noPath) {
        const redirectUrl = '/' + (this.$route.query.redirect || 'login')
        this.$router.replace(redirectUrl)
      }
   }
  }
}
</script>
