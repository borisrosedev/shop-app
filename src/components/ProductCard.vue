<template>
  <article class="product-card product-card--small" v-if="isSmall == true">
    <figure><img :src="data.url" :alt="data.title" /></figure>
    <section>
      <h3>{{ data.title }}</h3>
      <small>{{ data.price }} €</small>
      <RouterLink :to="'/products/' + data.id"></RouterLink>
    </section>
  </article>

  <article class="product-card product-card--big" v-else>
    <figure>
      <img :src="data.url" :alt="data.title" />
      <small>{{ data.price }} €</small>
    </figure>
    <section>
      <h3>{{ data.title }}</h3>
      <section>
        <p>{{ data.description }}</p>
      </section>s
    </section>
  </article>
</template>
<script setup>
import { RouterLink } from "vue-router";

defineProps({
  isSmall: Boolean,
  data: Object,
});
</script>
