<template>
  <section class="message-component">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
  </section>
</template>
<script setup>
defineProps({
  title: String,
  content: String,
});
</script>
<style scoped lang="scss">
.message-component {
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 5px gray;
  padding: 10px;
}
</style>
