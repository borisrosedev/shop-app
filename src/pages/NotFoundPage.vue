<template>
  <main class="main not-found__main">
    <section aria-labelledby="not-found__title">
      <h1 id="not-found__title">404</h1>
      <section>
        <p>La page que vous cherchez n'existe pas</p>
      </section>
      <router-link to="/"> Revenir à la page d'accueil</router-link>
    </section>
  </main>
</template>
<style scoped lang="scss">

.not-found__main {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid green 2px;
}

</style>
