<template>
  <article class="product-card product-card--small" v-if="isSmall == true">
    <figure>
      <img :src="data.url" :alt="data.title ? data.title : data.name" />
    </figure>
    <section>
      <h3>{{ data.title ? data.title : data.name }}</h3>
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
      <h3>{{ data.title ? data.title : data.name }}</h3>
      <section class="product-card__description">
        <p>
          {{ data.description }} Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Iste cupiditate et ea, ad nihil voluptatem quod. Cum
          dignissimos nesciunt fugit molestias, aut error reprehenderit ipsa id
          voluptatibus ducimus adipisci delectus!
        </p>
      </section>
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
<style lang="scss" scoped>
.product-card {
  &--small {
    width: 500px;
    height: 400px;
    margin-block: 20px;
    figure {
      height: 40%;
    }
  }

  @media (0 <= width <= 714px) {
    width: 90%;

  }
  &--big {
    box-shadow: 1px 1px 5px gainsboro;
    width: 500px;
    height: 400px;
    margin: 20px;
    background-color: var(--secondary-color);
    @media (0 <= width <= 714px) {
      margin: 20px 0;
    }

    .product-card__description {
      text-overflow: ellipsis;
      overflow-x: hidden;
      white-space: nowrap;
      -webkit-text-cl: ellipsis; /* Ajout de la fin de la propriété */
    }

    & > section {
      padding: 10px;
      display: flex;
      flex-direction: column;
      height: 40%;
    }
    figure {
      display: flex;
      height: 60%;
      position: relative;
      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
      }
      small {
        position: absolute;
        bottom: 0;
        z-index: 5;
        left: 0;
        padding: 5px;
        background-color: var(--primary-color);
      }
    }
  }
}
</style>
