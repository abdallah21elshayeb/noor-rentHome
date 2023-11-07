<template>
  <div class="relative w-full h-full overflow-hidden">
    <transition-group name="carousel-slide">
      <div v-for="(slide, index) in slides" :key="index" :class="slideClasses(index)">
        <img :src="slide" :alt="'Slide ' + (index + 1)" :class="imgControl()" />
      </div>
    </transition-group>

    <button
      @click="previousSlide"
      class="absolute top-1/2 left-2 transform -translate-y-1/2 rounded-xl bg-slate-300 text-white z-10"
    >
      <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
        <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" />
      </svg>
    </button>
    <button
      @click="nextSlide"
      class="absolute top-1/2 right-2 transform -translate-y-1/2 rounded-xl bg-slate-300 text-white z-10"
    >
      <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
        <path d="M8.59 7.41L10 6L16 12L10 18L8.59 16.59L13.17 12L8.59 7.41Z" />
      </svg>
    </button>

    <div class="flex justify-center mt-96">
      <div v-for="(slide, index) in slides" :key="index" :class="paginationClasses(index)"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSlides: Array,
    autoSlide: Boolean,
    fullImgWidth: Boolean
  },
  data() {
    return {
      slides:this.imgSlides,
      autoSlides:this.autoSlide,
      fullWidth: this.fullImgWidth,
      currentSlide: 0,
    }
  },
  methods: {
    slideClasses(index) {
      const baseClasses = 'absolute w-full h-full transition-opacity duration-500'
      if (index === this.currentSlide) {
        return `${baseClasses} opacity-100 z-10`
      } else {
        return `${baseClasses} opacity-0 z-0`
      }
    },
    imgControl() {
      if (this.fullWidth === true) {
        return `w-full h-full object-cover`
      } else {
        return `mx-auto my-auto object-contain max-h-full`
      }
    },
    paginationClasses(index) {
      return {
        'w-4 h-4 mx-1 rounded-full': true,
        'bg-white': index === this.currentSlide,
        'bg-gray-300': index !== this.currentSlide,
        'z-10': true // Ensure pagination is on top of the images
      }
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length
    },
    previousSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length
    }
  },
  mounted() {
    if (this.autoSlides === true) {
      setInterval(this.nextSlide, 6000) // Auto-advance slides
    } else {
      this.nextSlide()
    }
  }
}
</script>

<style>
.carousel-slide-enter-active,
.carousel-slide-leave-active {
  transition: opacity 500ms, z-index 500ms;
}

.carousel-slide-enter,
.carousel-slide-leave-to {
  opacity: 0;
}
</style>
