<template>
  <div>
    <div class="bg-zinc-300 rounded shadow overflow-hidden">
      <div class="flex items-center justify-between py-2 px-6">
        <div>
          <span class="text-lg font-bold text-gray-800">{{ monthNames[month] }}</span>
          <span class="ml-1 text-lg text-gray-600 font-normal">{{ year }}</span>
        </div>
        <div class="border rounded-lg px-1" style="padding-top: 2px">
          <button
            type="button"
            class="leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center"
            :class="{ 'cursor-not-allowed opacity-25': month == 0 }"
            :disabled="month == 0 ? true : false"
            @click="
              month--;
              getNoOfDays()
            "
          >
            <svg
              class="h-6 w-6 text-gray-500 inline-flex leading-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div class="border-r inline-flex h-6"></div>
          <button
            type="button"
            class="leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1"
            :class="{ 'cursor-not-allowed opacity-25': month == 11 }"
            :disabled="month == 11 ? true : false"
            @click="
              month++;
              getNoOfDays()
            "
          >
            <svg
              class="h-6 w-6 text-gray-500 inline-flex leading-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="-mx-1 -mb-1">
        <div class="hidden md:grid md:grid-cols-7">
          <div v-for="(day, index) in dayNames" :key="index" class="col-span-1">
            <div class="px-2 py-2">
              <div class="text-gray-600 text-sm uppercase tracking-wide font-bold text-center">
                {{ day }}
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-4 md:grid-cols-7 lg:grid-cols-7 border-t border-l">
          <div v-for="blankDay in blankDays" :key="blankDay" class="col-span-1">
            <div class="text-center border-r border-b px-4 pt-2 h-32"></div>
          </div>
          <div v-for="(date, index) in noOfDays" :key="index" class="col-span-1">
            <div class="px-4 pt-2 border-r border-b relative h-32">
              <div
                @click="userType === 'user' ? null : showEventModal(date)"
                :class="{
                  'inline-flex w-6 h-6 items-center justify-center text-center leading-none rounded-full transition ease-in-out duration-100':
                    userType === 'user',
                  'inline-flex w-6 h-6 items-center justify-center text-center cursor-pointer leading-none rounded-full transition ease-in-out duration-100':
                    userType === 'admin',
                  'bg-blue-500 text-white': isToday(date) == true,
                  'text-gray-700 hover:bg-blue-200': isToday(date) == false
                }"
              >
                {{ date }}
              </div>
              <div class="overflow-y-auto mt-1">
                <div
                  v-for="event in events.filter(
                    (e) =>
                      new Date(e.profitDate).toDateString() ===
                      new Date(year, month, date).toDateString()
                  )"
                  :key="event"
                >
                  <div
                    class="px-2 py-1 rounded-lg mt-1 overflow-hidden border border-blue-200 text-blue-800 bg-blue-100"
                  >
                    <p class="text-sm">{{ event.profitValue }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      style="background-color: rgba(0, 0, 0, 0.8)"
      class="fixed z-40 top-0 right-0 left-0 bottom-0 h-full w-full"
      v-if="openEventModal"
    >
      <div class="p-4 max-w-xl mx-auto relative left-0 right-0 overflow-hidden mt-24">
        <div
          class="shadow absolute right-0 top-0 w-10 h-10 rounded-full bg-white text-gray-500 hover:text-gray-800 inline-flex items-center justify-center cursor-pointer"
          @click="openEventModal = !openEventModal"
        >
          <svg class="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"
            />
          </svg>
        </div>

        <div class="shadow rounded-lg bg-white overflow-hidden w-full block p-8">
          <h2 class="font-bold text-2xl mb-6 text-gray-800 border-b pb-2">Add Profit Details</h2>

          <div class="mb-4">
            <label class="text-gray-800 block mb-1 font-bold text-sm tracking-wide"
              >profit of day</label
            >
            <div class="relative mb-4 flex flex-wrap items-stretch bg-white rounded-lg border">
              <input
                type="text"
                class="relative m-0 -ml-0.5 block w-[1px] min-w-0 flex-auto bg-transparent border-none px-3 py-[0.25rem]"
                v-model="profitValue"
              />
              <dropdown-design
                :class="{
                  'z-[2] flex whitespace-nowrap px-6 pb-[6px] pt-2 border-l-2 hover:bg-neutral-500 hover:bg-opacity-10 focus:z-[3]':
                    $i18n.locale == 'en',
                  'z-[2] flex whitespace-nowrap px-6 pb-[6px] pt-2 border-r-2 hover:bg-neutral-500 hover:bg-opacity-10 focus:z-[3]':
                    $i18n.locale == 'ar'
                }"
                :input-st="true"
                :placeholder="$t('tenantPage.currency')"
                :options="$i18n.locale == 'en' ? currency : currencyAr"
                @input="handleCurrencyValue"
              ></dropdown-design>
            </div>
          </div>

          <div class="mb-4">
            <label class="text-gray-800 block mb-1 font-bold text-sm tracking-wide"
              >date of day</label
            >
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              type="text"
              v-model="profitDate"
              readonly
            />
          </div>

          <div class="mt-8 text-right">
            <button
              type="button"
              class="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded-lg shadow-sm mr-2"
              @click="openEventModal = !openEventModal"
            >
              cancel
            </button>
            <button
              type="button"
              class="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-700 rounded-lg shadow-sm"
              @click="addEvent()"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loginDataStore } from '../../stores/auth/login'
import { adminRolesStore } from '../../stores/admin/adminRole'
import dropdownDesign from './dropdownDesign.vue'
export default {
  props: {
    idEvent: String,
    eventsReceived: Array
  },
  components: {
    dropdownDesign
  },
  data() {
    return {
      month: '',
      year: '',
      noOfDays: [],
      blankDays: [],
      currencySelected: null,
      currency: ['USD', 'AED'],
      currencyAr: ['دولار', 'درهم'],
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      id: this.idEvent,
      events: this.eventsReceived,
      profitValue: '',
      profitDate: '',
      openEventModal: false
    }
  },
  mounted() {
    let today = new Date()
    this.month = today.getMonth()
    this.year = today.getFullYear()
    this.datepickerValue = new Date(this.year, this.month, today.getDate()).toDateString()
  },
  computed: {
    monthNames() {
      return [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
    },
    dayNames() {
      return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    userType() {
      const authStore = loginDataStore()
      return authStore.userType
    }
  },
  methods: {
    handleCurrencyValue(value) {
      this.currencySelected = value
    },
    isToday(date) {
      const today = new Date()
      const d = new Date(this.year, this.month, date)
      return today.toDateString() === d.toDateString()
    },
    showEventModal(date) {
      this.openEventModal = true
      this.profitDate = new Date(this.year, this.month, date).toDateString()
    },
    async addEvent() {
      const dailyProfitData = adminRolesStore()
      if (this.profitValue == '') {
        return
      }
 
      this.events.push({
          profitDate: this.profitDate,
          profitValue: this.profitValue + ' ' + this.currencySelected.target.value
        })
      // const existingValueIndex = this.events.findIndex(
      // (e) => {
  
      //   return (
      //     new Date(e.profitDate).toDateString() ===
      //     new Date(this.year, this.month, this.profitDate).toDateString()
      //   )
      // }
      // )
      // console.log(existingValueIndex);
      // if (existingValueIndex !== -1) {
        
      //   this.events.splice(existingValueIndex, 1, {
      //     profitDate: this.profitDate,
      //     profitValue: this.profitValue + ' ' + this.currencySelected.target.value
      //   })
      // } else {
        
      //   this.events.push({
      //     profitDate: this.profitDate,
      //     profitValue: this.profitValue + ' ' + this.currencySelected.target.value
      //   })
      // }

      const payload = {
        id: this.id,
        dailyProfit: this.events
      }
      await dailyProfitData.setDailyProfit(payload)
      this.profitValue = ''
      this.profitDate = ''
      this.openEventModal = false
    },

    getNoOfDays() {
      let daysInMonth = new Date(this.year, this.month + 1, 0).getDate()

      let dayOfWeek = new Date(this.year, this.month).getDay()

      let blankDaysArray = []

      for (let i = 1; i <= dayOfWeek; i++) {
        blankDaysArray.push(i)
      }

      let daysArray = []
      for (let i = 1; i <= daysInMonth; i++) {
        daysArray.push(i)
      }

      this.blankDays = blankDaysArray
      this.noOfDays = daysArray
    }
  }
}
</script>
