<template>
  <form class="form-component">
    <TitleComponent :h-type="title.hType" :text-content="title.textContent" />
    <section class="form-component__inputs">
      <InputComponent v-for="(input, i) in inputs" :key="i" :data="input"/>
    </section>
    <section class="form-component__actions">
      <ButtonComponent :text-content="'Valider'" />
    </section>
  </form>
</template>
<script setup>
import TitleComponent from "./TitleComponent.vue";
import InputComponent from "./InputComponent.vue";
import ButtonComponent from "./ButtonComponent.vue";

defineProps({
  title: Object,
  inputs: Array,
});
</script>
<style lang="scss" scoped>
.form-component {
  display: flex;
  flex-direction: column;
  border: solid peru 2px;
  padding: 10px;

  &__inputs {
    border: solid purple 2px;
  }

  &__actions {
    margin-top: 10px;
  }
}
</style>
