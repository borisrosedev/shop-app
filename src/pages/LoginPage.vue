<template>
  <main class="main login__main">
    <TitleComponent
      :h-type="'h1'"
      :text-content="'Page de Connexion/Inscription'"
    />
    <section class="login__form">
      <ul class="login__list">
        <li>Se connecter</li>
        <li>S'inscrire</li>
      </ul>
      <FormComponent :title="title" :inputs="inputs"/>
    </section>
  </main>
</template>
<script setup>
import TitleComponent from "../components/TitleComponent.vue";
import FormComponent from "../components/FormComponent.vue";

const title = {
  hType: 'h2',
  textContent: 'Remplir les champs'
}

const inputs = [
  {
    name: "email",
    placeholder: "Entrez votre email",
    type: "email",
  },
  {
    name: "password",
    placeholder: "Entrez votre mot de passe",
    type: "password",
  },
];
</script>
<style lang="scss" scoped>

.login {


  &__main {
    display: flex;
    flex-direction: column;
    
    
  }

  &__form {
    width: 500px;
    align-self: center;
  
  
  }
  
  &__list  {
    display: flex;
    width: 100%;
    li {
      width: 50%;
      padding: 6px 0;
      border: solid 1px black;
      text-align: center;
      &:hover {
        cursor: pointer;
     
      }
    }

  }

}

</style>
