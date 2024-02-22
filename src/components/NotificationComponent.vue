<template>
  <Teleport to="body">
    <Transition>
      <aside class="notification-component" v-if="isVisible">
        <h3>{{ title }}</h3>
        <p>{{ content }}</p>
      </aside>
    </Transition>
  </Teleport>
</template>
<script setup>
defineProps({
  title: String,
  content: String,
  isVisible:Boolean
});

</script>
<style scoped lang="scss">
.notification-component {
  display: flex;
  flex-direction: column;
  border: solid red 1px;
  box-shadow: 1px 1px 5px gray;
  position: absolute;
  bottom: 10px;
  right: 0;
  left: 0;
  align-self: center;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
