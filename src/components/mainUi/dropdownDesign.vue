<template>
  <div>
   
    <select
      id="feg-check"
      :class="{'bg-transparent border-none focus:border-none': inputSt == true,
    'block w-full h-2/3 flex-grow rounded-lg border border-gray-300 bg-white p-2.5 text-md text-gray-900 focus:border-blue-500 focus:ring-blue-500': inputSt == false}"
      :value="selectedValues"
      @input="emitInputEvent($event.target.value)"
    >
      <option  hidden disabled selected value>{{ placeholder }}</option>
      <option v-for="option in options" :key="option" :value="option" >{{ option }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ['inputSt','placeholder', 'options', 'selectedValue'],
  data() {
    return {
      selectedValues: '',
      labelStyle: 'mb-2 block text-sm font-bold text-greenLight lg:text-xl',
      
      inputStyle:
        'bg-transparent border-none active:border-none'
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
