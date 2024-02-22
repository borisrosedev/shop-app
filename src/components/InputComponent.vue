<template>
  <article
    class="input-component input-component--type-text"
    v-if="data.type !== 'select' && data.type !== 'textarea'"
  >
    <label :for="data.name"></label>
    <input :id="data.name" :placeholder="data.placeholder" :type="data.type" />
  </article>
  <article
    class="input-component input-component--type-textarea"
    v-if="data.type == 'textarea'"
  >
    <label :for="data.name"></label>
    <textarea :id="data.name" :placeholder="data.placeholder"></textarea>
  </article>
  <article
    v-if="data.type == 'select'"
    class="input-component input-component--type-selector"
  >
    <CustomedSelector :data="data" :click-handler="data.handler"/>
  </article>
</template>
<script setup>
import CustomedSelector from "./CustomedSelector.vue";

defineProps({
  data: Object,
});
</script>
<style lang="scss" scoped></style>
