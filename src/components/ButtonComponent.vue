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

  transition: all 500ms ease-in-out;

  &:hover {
    background-color: var(--primary-color);
  }
}

</style>
