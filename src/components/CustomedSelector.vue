<template>
  <div class="customed-selector">
    <section>
      <div class="customed-selector__choice-container"></div>
      <ul class="customed-selector__options-container" v-if="areOptionsVisible">
        <li
          v-for="(el, index) in data.options"
          :key="index"
          @click="clickHandler(el)"
        >
          {{ el }}
        </li>
      </ul>
    </section>

    <div class="customed-selector__icon-container">
      <font-awesome-icon :icon="['fas', 'chevron-down']" @click="chevronHandler"/>
    </div>
  </div>
</template>
<script setup>
defineProps({
  data: Object,
  clickHandler: Function,
});

const areOptionsVisible = ref(false)

const chevronHandler = () => {
    areOptionsVisible.value = !areOptionsVisible.value
}
</script>
<style lang="scss" scoped>
.customed-selector {
    display: flex;
    flex-direction: column;
}


</style>
