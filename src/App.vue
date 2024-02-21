<template>
  <HeaderLayout></HeaderLayout>
  <router-view></router-view>
</template>
<script setup>
import HeaderLayout from './layouts/myHeader.vue';
</script>
<style lang="scss">



.main {
  padding-top: 8vh;
}

</style>