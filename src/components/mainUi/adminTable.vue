<template>
  <div class="flex justify-center w-full">
    <div class="relative overflow-x-auto shadow-md rounded-lg">
      <!-- table of data -->
      <table class="w-full text-sm text-left text-gray-700">
        <thead class="text-xs text-gray-700 uppercase bg-zinc-500">
          <tr>
            <th
              scope="col"
              class="px-6 py-3 text-center text-white"
              v-for="header in headers"
              :key="header"
            >
              {{ $t('adminData.' + header) }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="dataTable.length === 0">
            <td colspan="3" class="px-6 py-4 font-medium text-gray-400 text-center">
              {{ $t('profilePage.noRequest') }}
            </td>
          </tr>
          <tr v-if="isLoading == true">
            <td colspan="3" class="px-6 py-4 font-medium text-gray-400 text-center">
              <loader-design />
            </td>
          </tr>

          <tr class="bg-slate-900 border-b" v-for="(request, i) in dataTable" :key="request">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-300 whitespace-nowrap text-center"
            >
              {{ i + 1 }}
            </th>
            <td class="px-6 py-4 font-medium text-gray-300 whitespace-nowrap text-center">
              {{ request.fullName }}
            </td>
            <td class="px-6 py-4 font-medium text-gray-300 whitespace-nowrap text-center">
              {{ request.email }}
            </td>
            <td class="px-6 py-4 font-medium text-gray-300 whitespace-nowrap text-center">
              {{ request.phone }}
            </td>
            <td class="px-6 py-4 font-medium text-gray-300 whitespace-nowrap text-center">
              {{ request.location }}
            </td>
            <td class="px-6 py-4 font-medium text-gray-300 whitespace-nowrap text-center">
              {{ request.price }}
            </td>
            <td class="px-6 py-4 font-medium text-gray-300 whitespace-nowrap text-center">
              {{ request.rentalPeriod }}
            </td>
            <td class="px-6 py-4 font-medium text-gray-300 whitespace-nowrap text-center">
              {{ request.description }}
            </td>
            <td class="px-6 py-4 font-medium text-gray-300 whitespace-nowrap text-center">
              {{ request.message }}
            </td>
            <td class="px-6 py-4 font-medium text-gray-300 whitespace-nowrap text-center">
              {{ request.status }}

              <button
                type="button"
                class="leading-none rounded-lg mx-2 transition ease-in-out duration-100 inline-flex items-center cursor-pointer bg-gray-200 lg:hover:bg-blue-900 p-1"
                :class="{ 'cursor-not-allowed opacity-25': request.status == 4 }"
                :disabled="request.status == 4 ? true : false"
                @click="
                  request.status++;
                  updateStatus(request._id, request.status)
                "
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                  <path
                    d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                  />
                </svg>
              </button>
              <button
                type="button"
                class="leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer bg-gray-200 lg:hover:bg-blue-900 p-1"
                :class="{ 'cursor-not-allowed opacity-25': request.status == 0 }"
                :disabled="request.status == 0 ? true : false"
                @click="
                  request.status--;
                  updateStatus(request._id, request.status)
                "
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                  <path
                    d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                  />
                </svg>
              </button>
            </td>
            <td class="px-6 py-4 font-medium text-gray-300 whitespace-nowrap text-center">
              <button
                @click="openImagesModel[i] = !openImagesModel[i]"
                class="bg-gray-300 px-6 py-2 rounded-md text-black"
              >
                {{ $t('adminData.image') }}
              </button>
            </td>
            <td class="px-6 py-4 font-medium text-gray-300 whitespace-nowrap text-center">
              <button
                @click="openCalendarModel[i] = !openCalendarModel[i]"
                class="bg-gray-300 px-6 py-2 rounded-md text-black"
              >
                {{ $t('adminData.dailyProfit') }}
              </button>
            </td>
            <div
              style="background-color: rgba(0, 0, 0, 0.8)"
              class="fixed z-40 top-0 right-0 left-0 bottom-0 h-full w-full overflow-hidden"
              v-if="openImagesModel[i]"
            >
              <div
                class="shadow absolute z-50 right-10 top-10 w-10 h-10 rounded-full max-w-md bg-white text-gray-500 hover:text-gray-800 inline-flex items-center justify-center cursor-pointer"
                @click="openImagesModel[i] = !openImagesModel[i]"
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
              <div class="h-full">
                <carousel-design
                  :img-slides="request.images"
                  :auto-slide="false"
                  class="pt-4"
                ></carousel-design>
              </div>
            </div>
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
import loaderDesign from './loaderDesign.vue'
import calendarDesign from './calendarDesign.vue'
import carouselDesign from './carouselDesign.vue'
import { adminRolesStore } from '../../stores/admin/adminRole'
export default {
  components: {
    loaderDesign,
    calendarDesign,
    carouselDesign
  },
  data() {
    return {
      headers: [
        '#',
        'name',
        'email',
        'phone',
        'location',
        'price',
        'rental',
        'description',
        'msg',
        'status',
        'image',
        'dailyProfit'
      ],
      dataTable: [],
      profit: [],
      isLoading: false,
      status: 0,
      openImagesModel: [],
      openCalendarModel: []
    }
  },
  methods: {
    async adminData() {
      this.isLoading = true
      const admin = adminRolesStore()
      await admin.getAllProperties()
      this.dataTable = admin.requestsData
      this.isLoading = false
    },
    async updateStatus(idProp, statusProp) {
      const admin = adminRolesStore()
      await admin.updateStatus(idProp, statusProp)
    }
  },
  mounted() {
    this.adminData()
  }
}
</script>
