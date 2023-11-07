<template>
  <div class="grid space-y-48 pt-20 lg:space-y-0">
    <div
      class="grid grid-cols-1 justify-center items-center space-y-20 px-6 bg-blueLight md:grid-cols-2 md:space-y-24 md:space-x-6 lg:grid-cols-2"
    >
      <div class="flex justify-center items-center lg:h-full">
        <img src="../assets/imgs/management.png" alt="income" class="h-2/3 object-cover" />
      </div>
      <div class="flex justify-center items-center h-1/3 lg:h-full lg:w-2/3 lg:pb-20">
        <div
          :class="{
            'text-center lg:text-left': $i18n.locale === 'en',
            'text-center lg:text-right': $i18n.locale === 'ar'
          }"
        >
          <p class="mt-8 text-2xl font-serif font-bold text-mainBlue lg:text-4xl">
            {{ $t('landlord.paragraph1title') }}
          </p>
          <p class="mt-4 text-lg lg:text-2xl">
            {{ $t('landlord.paragraph1content') }}
          </p>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 px-10 drop-shadow-2xl md:grid-cols-2 lg:grid-cols-2">
      <div class="flex justify-center items-center h-1/3 lg:h-full lg:w-2/3">
        <div
          :class="{
            'text-center lg:text-left': $i18n.locale === 'en',
            'text-center lg:text-right': $i18n.locale === 'ar'
          }"
        >
          <p class="m-8 text-2xl font-serif font-bold text-mainBlue lg:text-4xl">
            {{ $t('landlord.paragraph2title') }}
          </p>
          <span class="flex text-lg p-6 lg:text-2xl" ><svg style="color: rgb(10, 18, 82)" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-bar-right mr-6" viewBox="0 0 16 16" > <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z" fill="#0a1252" ></path></svg >{{ $t('landlord.paragraph2content1') }}</span >
          <span class="flex text-lg p-6 lg:text-2xl" ><svg style="color: rgb(10, 18, 82)" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-bar-right mr-6" viewBox="0 0 16 16" > <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z" fill="#0a1252" ></path></svg >{{ $t('landlord.paragraph2content2') }}</span >
          <span class="flex text-lg p-6 lg:text-2xl" ><svg style="color: rgb(10, 18, 82)" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-bar-right mr-6" viewBox="0 0 16 16" > <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z" fill="#0a1252" ></path></svg >{{ $t('landlord.paragraph2content3') }}</span >
          <span class="flex text-lg p-6 lg:text-2xl" ><svg style="color: rgb(10, 18, 82)" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-bar-right mr-6" viewBox="0 0 16 16" > <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z" fill="#0a1252" ></path></svg >{{ $t('landlord.paragraph2content4') }}</span >
          <span class="flex text-lg p-6 lg:text-2xl" ><svg style="color: rgb(10, 18, 82)" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-bar-right mr-6" viewBox="0 0 16 16" > <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z" fill="#0a1252" ></path></svg >{{ $t('landlord.paragraph2content5') }}</span >
        </div>
      </div>
      <div class="flex justify-center items-center h-2/3 lg:h-full">
        <img src="../assets/imgs/challenges.png" alt="income" class="h-full object-cover" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components:{
    
  },
  data() {
    return {
      challenges: []
    }
  },
  
  watch: {
    '$i18n.locale' : 'challengesFn'
  },
  methods: {
    challengesFn() {
      if (this.$i18n.locale === 'en') {
        this.challenges = [
          'Annual rental demand reduced',
          'Drop in annual rental prices',
          'Increase in leasing cycle gaps (3-6 months)',
          'Market over supply',
          'Low ROI'
        ]
      } else {
        this.challenges = [
        "انخفض الطلب على الإيجار السنوي",
        "انخفاض أسعار الإيجارات السنوية",
        "زيادة فجوات دورة التأجير (3-6 أشهر)" ,
        "فائض العرض في السوق",
        "عائد استثمار منخفض" 
        ]
      }
    }
  }
}
</script>
