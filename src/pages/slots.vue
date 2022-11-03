<template>
  <div class="flex flex-row space-x-10">
  <SlotButton>
    <h1>click me!</h1>
  </SlotButton>
  </div>
  <div class="divider"></div>
  <Parent>
  </Parent>
</template>

<script setup>
import SlotButton from "../components/slots/SlotButton.vue";
import Parent from "../components/slots/Parent.vue";
</script>

<style scoped>

</style>