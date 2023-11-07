<template>
  <div class="flex items-center space-x-4">
    <div v-for="(step, index) in steps" :key="index" class="flex items-center">
      <div :class="stepClasses(index)">{{ index + 1 }}</div>
      <div class="text-white ml-3">{{ step.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentStep: Number,
    steps: Array,
  },
  methods: {
    stepClasses(index) {
      return [
        'w-8 h-8 flex items-center justify-center rounded-full',
        index <= this.currentStep
          ? 'bg-blue-500 text-white'
          : 'bg-gray-300 text-gray-500',
      ];
    },
  },
};
</script>


