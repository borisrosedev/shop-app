<template>
    <section :class="`validation-result-card ${isSuccessful ? 'validation-result-card--success' : 'validation-result-card--failure' }`">
        <header>
            <font-awesome-icon :icon="isSuccessful ? ['fas', 'circle-check']: ['fas', 'circle-xmark']" />
        </header>
        <section>
            <p> {{  resultContent }}</p>
        </section>
        <footer>
            <router-link to="/"> Revenir à la page d'accueil </router-link>
        </footer>
    </section>
</template>
<script setup>

defineProps({
    isSuccessful:Boolean,
    resultContent: String
})

</script>
<style lang="scss" scoped>
.validation-result-card {
    display: flex;
    flex-direction: column;
    &--success {
        background-attachment: rgb(58, 183, 102);
        color: white;
    }
    &--failure {
        background-attachment: rgb(243, 57, 57);
        color: white;
    }
}
</style>