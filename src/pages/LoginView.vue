<template>

    <main class="main login__main">

        <h1> Login Page </h1>
        <section>
            <FormComponent :inputs="inputs"/>
        </section>
    </main>


</template>
<script setup>
import { onMounted } from "vue";
import FormComponent from "../components/myForm.vue"
import  { useUserStore } from '../stores/user-store'
import { storeToRefs } from 'pinia'

const store = useUserStore();

const { usersGetter } = storeToRefs(store)


const inputs = [
    {
        name:'email',
        placeholder: 'Entrez votre email',
        type: 'email'
    },
    {
        name:'password',
        placeholder: 'Entrez votre mot de passe',
        type: 'password'
    }
]

onMounted(async() => {
    await store.getUsers()
})

</script>
<style lang="scss" scoped>

@mixin FlexBox($dir:row, $align:flex-start, $justif: flex-start){
    display: flex;
    flex-direction: $dir;
    justify-content: $justif;
    align-items: $align;
}

.login__main {

    @include FlexBox(column);
    h1 {

    }
}
</style>