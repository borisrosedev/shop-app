<template>
  <main class="main login__main">
    <TitleComponent
      :h-type="'h1'"
      :text-content="'Page de Connexion/Inscription'"
    />
    <section class="login__form">
      <ul class="login__list">
        <li @click="isLoggingIn = true">Se connecter</li>
        <li @click="isLoggingIn = false">S'inscrire</li>
      </ul>
      <FormComponent
        :title="title"
        :inputs="inputs"
        :form-handler="formHandler"
        :input-handler="inputHandler"
      />
    </section>
  </main>
</template>
<script setup>
import { ref, watch, reactive } from "vue";
import TitleComponent from "../components/TitleComponent.vue";
import FormComponent from "../components/FormComponent.vue";
import { useChecker } from "../composables/useChecker";

const title = {
  hType: "h3",
  textContent: "Remplir les champs",
};

const { checker } = useChecker;

const formFields = reactive({});

const isLoggingIn = ref(true);
const inputs = ref([
  {
    name: "email",
    placeholder: "Entrez votre email",
    type: "email",
    fieldValue: formFields.email
  },
  {
    name: "password",
    placeholder: "Entrez votre mot de passe",
    type: "password",
    fieldValue: formFields.password
  },
]);

const formHandler = () => {
  if (isLoggingIn) {
    if (
      checker(formFields.email, "email") &&
      checker(formFields.password, "password")
    ) {
      console.log("✅ formFields", formFields);
    }
  }
};

const inputHandler = (e, name) => {
  formFields[name] = e.target.value;
  console.log("formFields", formFields);
};

watch(isLoggingIn, (val) => {
  if (val) {
    inputs.value = [
      {
        name: "email",
        placeholder: "Entrez votre email",
        type: "email",
        fieldValue: formFields.email
      },
      {
        name: "password",
        placeholder: "Entrez votre mot de passe",
        type: "password",
        fieldValue: formFields.password
      },
    ];
  } else {
    inputs.value = [
      {
        name: "email",
        placeholder: "Entrez votre email",
        type: "email",
        fieldValue: formFields.email
      },
      {
        name: "password",
        placeholder: "Entrez votre mot de passe",
        type: "password",
        fieldValue: formFields.password
      },
      {
        name: "confirmed-password",
        placeholder: "Confirmer votre mot de passe",
        type: "password",
        fieldValue: formFields.confirmedPassword
      },
    ];
  }
});
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

  &__list {
    display: flex;
    width: 100%;
    box-shadow: 1px 1px 5px gray;
    li {
      width: 50%;
      padding: 6px 0;
      border: solid 1px black;
      text-align: center;
      transition: all 500ms ease-in-out;
      &:hover {
        cursor: pointer;
        background-color: var(--primary-color);
      }
    }
  }
}
</style>
