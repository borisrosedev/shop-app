<template>
  <header class="app__header">
    <figure>
      <img src="../assets/painting.png" alt="logo du shop" />
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
  box-shadow: 1px 1px 5px gray;
  background-color: var(--primary-color);
  padding-inline: 10px;
  opacity: 0;
  animation: headerDown 500ms ease-in-out forwards;
  z-index: 10;

  figure {
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 50%;
    border: solid #000 1px;
    img {
      transform: scale(0.8);
    }
  }

  nav ul {
    display: flex;
    li {
      margin-inline: 10px;

      &:hover {
        cursor: pointer;
      }
    }
  }
}

@keyframes headerDown {
  from {
    opacity: 0;
    transform: translateY(-100px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
  
}
</style>
