<template>
  <div class="grid place-items-center">
    <div class="flex flex-col items-center h-full w-full gap-10">
      <div class="h-1/3 w-full">
        <img src="../assets/imgs/dubai.jpg" alt="dubai" class="h-full w-full object-cover" />
      </div>
      <main-view-details></main-view-details>
    </div>
  </div>
</template>

<script>
import mainViewDetails from "../components/viewsComponent/mainViewDetails.vue";
export default {
  components: {
    mainViewDetails,
  }
}
</script>
