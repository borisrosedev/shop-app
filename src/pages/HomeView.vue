<template>
  <main class="main home__main">
    <h1>Home Page</h1>
  </main>
</template>
<script setup>
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  console.log("HomeView page has mounted");
});

onUnmounted(() => {
  console.log("HomeView has been destroyed");
});
</script>
<style lang="scss" scoped>

@mixin FlexBox($dir:row, $align:flex-start, $justif: flex-start){
    display: flex;
    flex-direction: $dir;
    justify-content: $justif;
    align-items: $align;
}



</style>
