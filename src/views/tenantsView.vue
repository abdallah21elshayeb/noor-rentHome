<template>
  <div class="grid place-items-center space-y-10 pt-20 pb-8 h-full">
    <carousel-design
      :img-slides="slidesImgs"
      :full-img-width="true"
      :auto-slide="true"
      class="pt-4"
    ></carousel-design>
    <div
      :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
      class="w-full lg:w-2/3 drop-shadow-2xl grid grid-col-1 rounded-xl p-4 items-center bg-mainBlue"
    >
      <p class="text-4xl font-bold text-fontColor mb-8">{{ $t('tenantPage.intro') }}</p>
      <div class="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-2 w-full">
        <div class="gap-4 p-2">
          <label for="fullName" :class="labelStyle1"
            >{{ $t('tenantPage.name') }} <span class="text-red-600">*</span></label
          >
          <input
            type="text"
            :class="inputStyle"
            v-model="fullName"
            :placeholder="$t('tenantPage.name')"
          />
        </div>
        <div class="gap-4 p-2">
          <label for="email" :class="labelStyle1"
            >{{ $t('tenantPage.email') }} <span class="text-red-600">*</span></label
          >
          <input type="email" :class="inputStyle" v-model="email" placeholder="Example@gmail.com" />
        </div>
        <div class="gap-4 p-2">
          <label for="days" :class="labelStyle1"
            >{{ $t('tenantPage.phone') }} <span class="text-red-600">*</span></label
          >
          <input type="text" :class="inputStyle" v-model="phone" placeholder="**********" />
        </div>
        <div class="gap-4 p-2">
          <label for="feg-check" :class="labelStyle1"
            >{{ $t('tenantPage.location') }} <span class="text-red-600">*</span>
          </label>
          <dropdown-design
            :input-st="false"
            :placeholder="$t('tenantPage.location')"
            :options="$i18n.locale == 'en' ? uaeCities : uaeCitiesAr"
            @input="handleUaeCitiesValue"
          ></dropdown-design>
        </div>

        <div class="gap-4 p-2">
          <div>
            <label for="days" :class="labelStyle1"
              >{{ $t('tenantPage.price') }} <span class="text-red-600">*</span>
              <span class="text-sm text-white">({{ $t('tenantPage.day') }})</span>
            </label>
            <div class="relative mb-4 flex flex-wrap items-stretch bg-white rounded-lg border">
              <input
                type="text"
                class="relative m-0 -ml-0.5 block w-[1px] min-w-0 flex-auto bg-transparent border-none px-3 py-[0.25rem]"
                v-model="price"
                :placeholder="$t('tenantPage.price')"
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
        </div>
        <div class="gap-4 p-2">
          <div>
            <label for="days" :class="labelStyle1"
              >{{ $t('tenantPage.rental') }} <span class="text-red-600">*</span></label
            >
            <div class="relative mb-4 flex flex-wrap items-stretch bg-white rounded-lg border">
              <input
                type="text"
                class="relative m-0 -ml-0.5 block w-[1px] min-w-0 flex-auto bg-transparent border-none px-3 py-[0.25rem]"
                v-model="rentalPeriod"
                :placeholder="$t('tenantPage.rental')"
              />
              <dropdown-design
                :class="{
                  'z-[2] flex whitespace-nowrap px-6 pb-[6px] pt-2 border-l-2  hover:bg-neutral-500 hover:bg-opacity-10 focus:z-[3]':
                    $i18n.locale == 'en',
                  'z-[2] flex whitespace-nowrap px-6 pb-[6px] pt-2  border-r-2 hover:bg-neutral-500 hover:bg-opacity-10 focus:z-[3]':
                    $i18n.locale == 'ar'
                }"
                :input-st="true"
                :placeholder="$t('tenantPage.pUnit')"
                :options="$i18n.locale == 'en' ? period : periodAr"
                @input="handlePeriodValue"
              ></dropdown-design>
            </div>
          </div>
        </div>
        <div class="gap-4 p-2">
          <label for="days" :class="labelStyle1">{{ $t('tenantPage.image') }}</label>
          <button
            @click="openUploadModal"
            class="text-black text-sm lg:text-lg bg-white hover:bg-sky-800 p-2 w-2/3 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-bold rounded text-center lg:text-center"
          >
            {{ $t('tenantPage.image') }}
          </button>
          <div class="text-white" v-if="this.imageUrl.length > 0">
            <p>{{ this.imageUrl.length }} {{ $t('tenantPage.UploadedImages') }}</p>
          </div>
        </div>
      </div>
      <div>
        <label for="description" :class="labelStyle1"
          >{{ $t('tenantPage.description') }} <span class="text-red-600">*</span></label
        >
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="5"
          v-model="description"
          :class="inputStyle"
          :placeholder="$t('tenantPage.descriptionPlaceholder')"
        ></textarea>
      </div>
      <div>
        <label for="message" :class="labelStyle1">{{ $t('tenantPage.msg') }}</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="5"
          v-model="message"
          :class="inputStyle"
          :placeholder="$t('tenantPage.msgPlaceholder')"
        ></textarea>
      </div>
      <div
        v-if="formIsValid === false"
        class="bg-red-300 border-red-600 border-2 text-center my-8 py-4 rounded-xl"
      >
        <p class="text-sm px-4 text-white lg:text-2xl">{{ $t('tenantPage.errorMsg') }}</p>
      </div>
      <div class="grid place-items-center">
        <button
          type="button"
          class="text-fontColor text-sm lg:text-xl bg-greenLight hover:bg-sky-800 mt-6 p-6 w-1/3 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-bold rounded-full px-3 py-2.5 text-center lg:text-center dark:focus:ring-yellow-900"
          @click="saveProperties"
        >
          {{ $t('tenantPage.submit') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import dropdownDesign from '../components/mainUi/dropdownDesign.vue'
import carouselDesign from '../components/mainUi/carouselDesign.vue'
import { savePropertiesStore } from '../stores/properties/saveProperties'

export default {
  components: {
    dropdownDesign,
    carouselDesign
  },
  data() {
    return {
      fullName: '',
      email: '',
      phone: '',
      citySelected: null,
      currencySelected: null,
      periodSelected: null,
      description: '',
      price: '',
      rentalPeriod: '',
      message: '',
      imageUrl: [],
      formIsValid: true,
      slidesImgs: [
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1546412414-8035e1776c9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      ],
      currency: ['USD', 'AED'],
      currencyAr: ['دولار', 'درهم'],
      period: ['Week', 'Month', 'Year'],
      periodAr: ['أسبوع', 'شهر', 'سنة'],
      uaeCities: [
        'Abu Dhabi',
        'Dubai',
        'Sharjah',
        'Al Ain',
        'Ras Al Khaimah',
        'Fujairah',
        'Ajman',
        'Umm Al Quwain',
        'Khor Fakkan',
        'Dibba Al-Fujairah',
        'Dibba Al-Hisn',
        'Khawr Kalba',
        'Madinat Zayed',
        'Al Gharbia'
      ],
      uaeCitiesAr: [
        'أبوظبي',
        'دبي',
        'الشارقة',
        'العين',
        'رأس الخيمة',
        'الفجيرة',
        'عجمان',
        'أم القيوين',
        'خور فكان',
        'دبا الفجيرة',
        'دباالحسن',
        'كلباء',
        'مدينة زايد',
        'الغربية'
      ],

      labelStyle: 'mb-2 block text-xl font-bold text-red-800',
      labelStyle1: 'mb-2 block text-md font-bold text-greenLight lg:text-xl',
      inputStyle:
        'block w-full h-2/3 flex-grow rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
    }
  },

  methods: {
    handleUaeCitiesValue(value) {
      this.citySelected = value
    },
    handleCurrencyValue(value) {
      this.currencySelected = value
    },
    handlePeriodValue(value) {
      this.periodSelected = value
    },
    openUploadModal() {
      window.cloudinary
        .createUploadWidget(
          {
            cloudName: 'dymlvgina',
            uploadPreset: 'ery4cdeb'
          },
          (error, result) => {
            if (!error && result && result.event === 'success') {
              this.imageUrl.push(result.info.secure_url)
            }
          }
        )
        .open()
    },
    async saveProperties() {
      this.formIsValid = true

      if (
        this.fullName === '' ||
        this.email === '' ||
        !this.email.includes('@') ||
        this.phone === '' ||
        this.citySelected === '' ||
        this.description === '' ||
        this.price === '' ||
        this.rentalPeriod === ''
      ) {
        this.formIsValid = false
        return
      }

      const propertiesStore = savePropertiesStore()

      const payload = {
        fullName: this.fullName,
        email: this.email,
        phone: this.phone,
        location: this.citySelected.target.value,
        description: this.description,
        price: this.price + this.currencySelected.target.value,
        rentalPeriod: this.rentalPeriod + this.periodSelected.target.value,
        images: this.imageUrl,
        message: this.message
      }

      await propertiesStore.saveProperties(payload)
      if (propertiesStore.okayResponse) {
        const redirectUrl = '/' + (this.$route.query.redirect || 'home')
        this.$router.replace(redirectUrl)
      }
    }
  }
}
</script>
