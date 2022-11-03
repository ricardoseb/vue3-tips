<template>
<!--  Creating the base slot with a transition -->
  <transition name="fade" mode="out-in" class="transition ease-in-out delay-150 hover:text-2xl">
    <slot></slot>
  </transition>
</template>

<script setup>

</script>

<style scoped>

</style>