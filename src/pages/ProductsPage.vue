<template>
  <main class="main products__main">
    <section class="products__list" v-if="state.products.length">
      <ProductCard v-for="(product,index) in state.products" :data="product" :key="index"/>
    </section>
    <NoDataComponent :text-content="'Aucun produit pour le moment'" v-else></NoDataComponent>
  </main>
</template>
<script setup>
import { onMounted } from "vue";
import ProductCard from "../components/ProductCard.vue";
import { loadProducts, state } from "../stores/harlem/products-store";
import NoDataComponent from "../components/NoDataComponent.vue"

onMounted(async() => {
  console.log('ProductsPage has mounted')
  loadProducts()
    .then(() => {
      console.log(state)
    })

})
</script>
<style scoped lang="scss">
.products {
  &__main {
    display: flex;

 

  
  }

  &__list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 50px;
    width: 100%;
    @media (0 <= width <= 714px) {
      flex-wrap: nowrap;
      flex-direction: column;
      padding: 0;
      border: solid purple 2px;
      justify-content: center;
    }
    
  }
}
</style>
