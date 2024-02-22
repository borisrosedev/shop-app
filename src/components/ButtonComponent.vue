<template>
  <button
    :class="{ 'button button--big': isBig, 'button button--small': !isBig }"
  > {{  textContent }}</button>
</template>
<script setup>
defineProps({
  isBig:Boolean,
  textContent:String

});

</script>
<style lang="scss" scoped>

.button {

  &--big {
    padding: 8px 30px;
  }

  &--small {
    padding: 8px 20px;
  }
}

</style>
