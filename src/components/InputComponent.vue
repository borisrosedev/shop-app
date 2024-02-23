<template>
  <article
    class="input-component input-component--type-text"
    v-if="data.type !== 'select' && data.type !== 'textarea'"
  >
    <label :for="data.name"></label>
    <input :id="data.name" :placeholder="data.placeholder" :type="data.type" @input="(e) => inputHandler(e,data.name)"/>
  </article>
  <article
    class="input-component input-component--type-textarea"
    v-if="data.type == 'textarea'"
  >
    <label :for="data.name"></label>
    <textarea :id="data.name" :placeholder="data.placeholder" @input="(e) => inputHandler(e,data.name)"></textarea>
  </article>
  <article
    v-if="data.type == 'select'"
    class="input-component input-component--type-selector"
  >
    <CustomedSelector :data="data" :input-handler="inputHandler"/>
  </article>
</template>
<script setup>
import CustomedSelector from "./CustomedSelector.vue";

defineProps({
  data: Object,
  inputHandler:Function
});
</script>
<style lang="scss" scoped>

.input-component {
  margin-block: 10px;
}

</style>
