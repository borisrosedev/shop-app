<template>
  <main class="main not-found__main">
    <section aria-labelledby="not-found__title" class="not-found__message">
      <h1 id="not-found__title">404</h1>
      <p>La page que vous cherchez n'existe pas</p>

      <router-link to="/"> Revenir à la page d'accueil</router-link>
    </section>
  </main>
</template>
<style scoped lang="scss">
.not-found {
  &__main {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__message {
    opacity: 0;
    animation: messageDown 1000ms ease-in-out 500ms forwards;
    border: solid #f08080 2px;
    padding: 40px;
    box-shadow: 1px 1px 5px gray;
    display: flex;
    flex-direction: column;

    h1 {
      margin: 0;
      text-align: center;
      font-size: 40px;
      color: #f08080;
    }

    a {
      position: relative;
      padding: 0;
      align-self: center;

      &::after {
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 0;
        content: "";
        height: 2px;
        background-color: #000;
        transition: all 500ms ease-in-out;
      }

      &:hover {
        &::after {
          width: 100%;
        }
      }
    }
  }
}

@keyframes messageDown {
  from {
    opacity: 0;
    transform: translateY(-300px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
