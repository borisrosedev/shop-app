<template>
  <main class="main error__main">
    <ValidationResultCard
      :is-successful="false"
      :result-content="'Échec! Votre commande n\'a pas été validée. Nous vous invitons à essayer à nouveau ultérieurement'"
    />
  </main>
</template>
<script setup>
import ValidationResultCard from "../components/ValidationResultCard.vue";
</script>
<style lang="scss" scoped></style>
