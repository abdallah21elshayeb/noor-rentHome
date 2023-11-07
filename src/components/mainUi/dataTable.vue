<template>
  <div class="flex justify-center w-full">
    <div class="relative overflow-x-auto shadow-md rounded-lg">
      <!-- table of data -->
      <table class="w-full text-sm text-left text-gray-700">
        <thead class="text-xs text-gray-700 uppercase bg-zinc-500" >
          <tr>
            <th scope="col" class="px-6 py-3 text-center text-white">#</th>
            <th scope="col" class="px-6 py-3 text-center text-white">{{ $t('profilePage.requests') }}</th>
            <th scope="col" class="px-6 py-3 text-center text-white">{{ $t('profilePage.status') }}</th>
            <th scope="col"  class="px-6 py-3 text-center text-white">{{ $t('adminData.dailyProfit') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="dataTable.length === 0">
            <td colspan="3" class="px-6 py-4 font-medium text-gray-400 text-center">{{ $t('profilePage.noRequest') }}</td>
          </tr>
          <tr v-if="isLoading == true">
            <td colspan="3" class="px-6 py-4 font-medium text-gray-400 text-center"><loader-design /> </td>
          </tr>

          <tr class="bg-slate-900 border-b" v-for="(request, i) in dataTable" :key="request">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-300 whitespace-nowrap text-center"
            >
              {{ i + 1 }}
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-300 whitespace-nowrap text-center"
            >
              {{ request.location }}
            </th>
            <td class="px-6 py-4 grid justify-center items-center">
              <stepper-bar v-if="$i18n.locale === 'en'" :currentStep="request.status" :steps="stepperSteps"></stepper-bar>
              <stepper-bar v-else :currentStep="request.status" :steps="stepperStepsAr"></stepper-bar>
            </td>
            <td v-if="request.status == 4" class="px-6 py-4 font-medium text-gray-300 whitespace-nowrap text-center">
              <button
                @click="openCalendarModel[i] = !openCalendarModel[i]"
                class="bg-gray-300 px-6 py-2 rounded-md text-black"
              >
                {{ $t('adminData.dailyProfit') }}
              </button>
            </td>
            <div
              style="background-color: rgba(0, 0, 0, 0.8)"
              class="fixed z-40 top-0 right-0 left-0 bottom-0 h-full w-full overflow-y-scroll"
              v-if="openCalendarModel[i]"
            >
              <div
                class="shadow absolute right-10 top-10 w-10 h-10 rounded-full bg-white text-gray-500 hover:text-gray-800 inline-flex items-center justify-center cursor-pointer"
                @click="openCalendarModel[i] = !openCalendarModel[i]"
              >
                <svg
                  class="fill-current w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"
                  />
                </svg>
              </div>
              <calendar-design
                :id-event="request._id"
                :events-received="request.dailyProfit"
                class="p-4 max-w-lg mx-auto relative left-0 right-0 mt-24 lg:max-w-4xl"
              ></calendar-design>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import stepperBar from './stepperBar.vue'
import loaderDesign from './loaderDesign.vue'
import calendarDesign from './calendarDesign.vue'
import { savePropertiesStore } from '../../stores/properties/saveProperties'
export default {
  components: {
    stepperBar,
    calendarDesign,
    loaderDesign
  },
  data() {
    return {
      stepperSteps: [
        { title: 'Pending' },
        { title: 'Review' },
        { title: 'Communicate with you' },
        { title: 'Preview the home' },
        { title: 'Completed' }
      ],
      stepperStepsAr: [
        { title: 'قيد الانتظار' },
        { title: 'مراجعة' },
        { title: 'التواصل معك' },
        { title: 'معاينة المنزل' },
        { title: 'تم القبول' }
      ],
      dataTable: [],
      openCalendarModel: [],
      isLoading: false,
    }
  },
  methods: {
    async getUserProperties() {
      this.isLoading = true
      const propertiesStore = savePropertiesStore()
      await propertiesStore.getProperties()

      this.dataTable = propertiesStore.getPropertiesDataResponse
      this.isLoading = false
    }
  },
  mounted() {
    this.getUserProperties()
  }
}
</script>
