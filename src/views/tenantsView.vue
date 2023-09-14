<template>
  <div class="grid place-items-center space-y-10 pt-20 pb-8 h-ful">
    <carousel-design></carousel-design>
    <form class="w-2/3 drop-shadow-2xl grid grid-col-1 rounded-xl p-4 items-center bg-mainBlue">
      <p class="text-4xl font-bold text-fontColor mb-8">Request A Call Back</p>
      <div class="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-2 w-full">
        <div class="gap-4 p-2">
          <label for="fullName" :class="labelStyle1"
            >Full Name <span class="text-red-600">*</span></label
          >
          <input
            type="text"
            :class="inputStyle"
            v-model="FegThresholdDays"
            placeholder="Full Name"
          />
        </div>
        <div class="gap-4 p-2">
          <label for="email" :class="labelStyle1"
            >Email Address <span class="text-red-600">*</span></label
          >
          <input
            type="email"
            :class="inputStyle"
            v-model="FegThresholdDays"
            placeholder="Email Address"
          />
        </div>
        <div class="gap-4 p-2">
          <label for="days" :class="labelStyle1"
            >Phone Number <span class="text-red-600">*</span></label
          >
          <input
            type="text"
            :class="inputStyle"
            v-model="FegThresholdDays"
            placeholder="**********"
          />
        </div>
        <div class="gap-4 p-2">
          <label for="days" :class="labelStyle1"
            >Current Location <span class="text-red-600">*</span></label
          >
          <input type="text" :class="inputStyle" v-model="FegThresholdDays" placeholder="Dubai" />
        </div>
        <div>
          <dropdown-design
            :title="bedRoom"
            :placeholder="bedRoomPlaceholder"
            :options="bedRooms"
            @input="handledBedRoomValue"
          ></dropdown-design>
        </div>
        <div>
          <dropdown-design
            :title="guests"
            :placeholder="guestRoomPlaceholder"
            :options="bedRooms"
            @input="handledGuestRoomValue"
          ></dropdown-design>
        </div>
      </div>
      <div>
        <label for="days" :class="labelStyle1">Message <span class="text-red-600">*</span></label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="5"
          :class="inputStyle"
          placeholder="Write Your Massage Here....."
        ></textarea>
      </div>
      <div class="grid place-items-center">
        <button
          type="button"
          class="text-fontColor text-sm lg:text-xl bg-greenLight hover:bg-sky-800 mt-6 p-6 w-1/3 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-bold rounded-full px-3 py-2.5 text-center lg:text-center dark:focus:ring-yellow-900"
          @click="aa"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import dropdownDesign from '../components/mainUi/dropdownDesign.vue'
import carouselDesign from '../components/mainUi/carouselDesign.vue'
export default {
  components: {
    dropdownDesign,
    carouselDesign
  },
  data() {
    return {
      bedRoom: 'Bedrooms',
      bedRoomPlaceholder: 'Choose the Numbers of Bedrooms',
      bedRooms: [1, 2, 3, 4, 5, 6, 7],
      bedRoomSelected: null,
      guestRoomSelected: null,
      guests: 'Guests',
      guestRoomPlaceholder: 'Choose the Numbers of guests',
      labelStyle: 'mb-2 block text-xl font-bold text-red-800',
      labelStyle1: 'mb-2 block text-xl font-bold text-greenLight',
      inputStyle:
        'block w-full h-2/3 flex-grow rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600  dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
    }
  },

  methods: {
    handledBedRoomValue(value) {
      this.bedRoomSelected = value
    },
    handledGuestRoomValue(value) {
      this.guestRoomSelected = value
    }
  }
}
</script>
