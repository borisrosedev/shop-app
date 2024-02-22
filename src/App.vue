<template>
  <HeaderComponent />
  <router-view></router-view>
</template>
<script setup>
import HeaderComponent from './layout/HeaderComponent.vue';


</script>
<style lang="scss">



.main {
  padding-top: 8vh;
  opacity: 0;
  display: flex;
  animation: mainShow 500ms ease-in-out forwards;

}

@keyframes mainShow {
  from {
    opacity: 0;

  }

  to {
    opacity: 1;

  }
  
}

</style>