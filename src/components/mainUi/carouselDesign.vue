<template>
  <div class="relative w-full h-96 overflow-hidden">
    <transition-group name="carousel-slide" mode="out-in">
      <div v-for="(slide, index) in slides" :key="index" :class="slideClasses(index)">
        <img :src="slide" :alt="'Slide ' + (index + 1)" class="w-full h-full object-cover" />
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

    <div class="flex justify-center mt-80">
      <div v-for="(slide, index) in slides" :key="index" :class="paginationClasses(index)"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1546412414-8035e1776c9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        // Add more slide images here
      ],
      currentSlide: 0
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
    setInterval(this.nextSlide, 6000) // Auto-advance slides every 3 seconds
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
