<template>
  <main class="main home__main">
    <TitleComponent :text-content="'Page d\'accueil'" h-type="h1" />
    <section class="home__animation">
        <CubeComponent />
    </section>
    <section class="home__message">
      <MessageComponent
        :title="'Bienvenue'"
        :content="'Art Féminin vous accueille avec joie sur son application web. En espérant que vous trouviez ce que vous cherchez. Nous vous espérons la meilleure des visites.'"
      />
    </section>

    <section class="home__actions">
      <ButtonComponent
        :is-big="false"
        :text-content="'Découvrir nos oeuvres d\'art'"
        @click="onDiscoverClick"
      />
      <ButtonComponent
        :is-big="false"
        :text-content="'Vous inscrire'"
        @click="onLoginClick"
      />
    </section>
  </main>
</template>
<script setup>
import MessageComponent from "../components/MessageComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import { useRouter } from "vue-router";
import TitleComponent from "../components/TitleComponent.vue";
import CubeComponent from "../components/extra/CubeComponent.vue";

const router = useRouter();

const onDiscoverClick = () => {
  router.push("/products");
};

const onLoginClick = () => {
  router.push("/login");
};
</script>
<style lang="scss" scoped>
.home {
  &__main {
    flex-direction: column;
  }

  &__message {
    width: 500px;
    align-self: center;
    margin: 30px 0;

  }

  &__animation {

    height: 200px;
    display: flex;
    justify-content: center;
    align-self: center;
    

  }


  &__actions {
    margin-block: 10px;
    align-self: center;
    width: 500px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
