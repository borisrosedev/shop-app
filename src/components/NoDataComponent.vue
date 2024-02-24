<template>
  <section class="no-data-component">
    <p>{{ textContent }}</p>
  </section>
</template>
<script setup>
defineProps({
  textContent: String,
});
</script>
<style lang="scss" scoped>
.no-data-component {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: var(--secondary-color);
}
</style>
