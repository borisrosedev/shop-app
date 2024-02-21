<template>
  <form>
    <MyInput v-for="(el, index) in inputs" :key="index" :el="el"></MyInput>
  </form>
</template>
<script setup>
import MyInput from './myInput.vue';

defineProps({
  inputs: {
    type: Array,
    default: [],
  },
});
</script>
<style lang="scss" scoped></style>
