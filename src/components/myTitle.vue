<template>
    <h1 v-if="hType == 'h1'">{{  titleContent }}</h1>
    <h2 v-if="hType == 'h2'">{{  titleContent }}</h2>
    <h3 v-if="hType == 'h3'">{{  titleContent }}</h3>
    <h4 v-if="hType == 'h4'">{{  titleContent }}</h4>
</template>
<script setup>

defineProps({
    hType: {
        type: String,
        default: 'h1'
    },

    titleContent: {
        type: String,
        default : ''
    }
})

</script>