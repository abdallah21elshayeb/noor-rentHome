<template>
  <div class="grid place-items-center">
    <div class="flex flex-col items-center h-full w-full gap-10">
      <div class="h-1/2 w-full">
        <img src="../assets/imgs/noorFoundation.jpg" alt="Noor Foundation" class="h-full w-full" />
      </div>

      <div class="flex rounded-3xl bg-gray-50 h-full w-2/3 flex-col items-center top-3/4">
        <p class="text-2xl m-4 text-yellow-600 lg:text-5xl">{{$t('nav.about')}}</p>
        <p class="text-xl m-4 text-yellow-400 lg:text-3xl">{{$t('aboutPage.about')}}</p>
      </div>
    </div>
  </div>
  <!-- <div class=" opacity-70 w-1/5 h-1/3 rounded-lg text-center"><img src="../assets/imgs/paper.png" alt="paper">
  <p class="flex top-2 text-xl text-yellow-600 lg:text-5xl" v-html="$t('nav.about')"></p></div> -->
</template>

<script>
export default {}
</script>
