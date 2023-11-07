<template>
  <div class="grid space-y-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div class="flex justify-center items-center h-2/3 lg:h-full">
        <img src="../../assets/imgs/homeIncome.png" alt="income" class="h-full object-cover" />
      </div>
      <div class="flex justify-center items-center h-1/3 lg:h-full lg:w-2/3">
        <div :class="{'text-center lg:text-left': $i18n.locale === 'en','text-center lg:text-right': $i18n.locale === 'ar'}">
          <p class="mt-8 mx-2 text-2xl lg:text-4xl">{{ $t('mainPage.paragraph1title') }}</p> 
          <p class="mt-4 mx-2 text-lg lg:text-2xl">
            {{ $t('mainPage.paragraph1content') }}
          </p>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 p-10 bg-blueLight drop-shadow-2xl md:grid-cols-2 lg:grid-cols-2">
      <div class="flex justify-center items-center h-2/3 lg:h-full">
        <img src="../../assets/imgs/freeMang.png" alt="income" class="h-full object-cover" />
      </div>
      <div class="flex justify-center items-center h-1/3 lg:h-full lg:w-2/3">
        <div :class="{'text-center lg:text-left': $i18n.locale === 'en','text-center lg:text-right': $i18n.locale === 'ar'}">
          <p class="mt-8 text-2xl lg:text-4xl">{{ $t('mainPage.paragraph2title') }}</p>
          <p class="mt-4 text-lg lg:text-2xl">
            {{ $t('mainPage.paragraph2content') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
