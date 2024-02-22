<template>
  <button
    :class="{ 'big-button': data.big, 'small-button': !data.big }"
  ></button>
</template>
<script setup>
defineProps({
  data: Object,
});
</script>
