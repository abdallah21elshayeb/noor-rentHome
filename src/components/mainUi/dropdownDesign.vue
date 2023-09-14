<template>
  <div>
    <label for="feg-check" :class="labelStyle"
      >{{ title }} <span class="text-red-600">*</span></label
    >
    <select
      id="feg-check"
      :class="inputStyle"
      :value="selectedValues"
      @input="emitInputEvent($event.target.value)"
    >
      <option hidden disabled selected value>{{ placeholder }}</option>
      <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ['title', 'placeholder', 'options', 'selectedValue'],
  data() {
    return {
      selectedValues: '',
      labelStyle: 'mb-2 block text-xl font-bold text-greenLight',
      labelStyle1: 'mb-2 block text-xl font-bold text-gray-900',
      inputStyle:
        'block w-full h-2/3 flex-grow rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 '
    }
  },
  methods: {
    emitInputEvent(value) {
      this.selectedValues = value,
      this.$emit('input', value)
    }
  }
}
</script>
