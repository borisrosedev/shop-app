<template>
  <main class="main success__main">
    <ValidationResultCard
      :is-successful="true"
      :result-content="'Félicitations ! Votre commande est validée. Vous recevrez un mail de confirmation dans quelques instants'"
    />
  </main>
</template>
<script setup>
import ValidationResultCard from "../components/ValidationResultCard.vue";
</script>
<style lang="scss" scoped></style>
