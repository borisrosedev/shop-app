<template>
  <main class="main products__main">
    <section class="products__list">
      <ProductCard />
    </section>
  </main>
</template>
<script setup>
import { onMounted } from "vue";
import ProductCard from "../components/ProductCard.vue";
import { loadProducts, state } from "../stores/harlem/products-store";

onMounted(async() => {
  await loadProducts()
})
</script>
<style scoped lang="scss">
.products {
  &__main {
    display: flex;
    border: solid green 2px;
  }

  &__list {
    border: solid red 2px;
  }
}
</style>
