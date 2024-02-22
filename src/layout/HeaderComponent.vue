<template>
  <header class="app__header">
    <figure>
      <img src="../assets/coffee.png" alt="logo du shop" />
    </figure>
    <nav>
      <ul>
        <li @click="routeHandler('house')">
          <font-awesome-icon :icon="['fas', 'house']" />
        </li>
        <li @click="routeHandler('store')">
          <font-awesome-icon :icon="['fas', 'store']" />
        </li>
        <li @click="routeHandler('bag')">
          <font-awesome-icon :icon="['fas', 'bag-shopping']" />
        </li>

        <li @click="routeHandler('login')">
          <font-awesome-icon :icon="['fas', 'right-to-bracket']" />
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const routeHandler = (name) => {
  switch (name) {
    case "house":
      router.push("/");
      break;
    case "bag":
      router.push("/cart");
      break;
    case "store":
      router.push("/products");
      break;
    case "login":
      router.push("/login");
      break;
    default:
      router.push("/not-found");
      break;
  }
};
</script>
<style lang="scss" scoped>
.app__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8vh;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  border: solid red 2px;
  box-shadow: 1px 1px 5px gray;
}
</style>
