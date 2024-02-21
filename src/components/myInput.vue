<template>

    <article>
      <label :for="el.name"></label>
      <input :type="el.type" :placeholder="el.placeholder" :id="el.name" />
    </article>

</template>
<script setup>
import { useMount } from '../composables/useMont'

useMount({ name: 'MyInput'});

defineProps({
    el:Object
})



</script>
<style lang="scss" scoped>

@mixin FlexBox($dir:row, $justif: flex-start, $align: flex-start){
    display: flex;
    flex-direction: $dir;
    align-items: $align;
    justify-content: $justif;
}








</style>