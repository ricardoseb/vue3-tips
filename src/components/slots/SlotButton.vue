<template>

  <button class="btn btn-active transition-all duration-700 hover:bg-white">
    <slot/> <!-- slot outlet -->
  </button>

</template>

<script setup>

</script>

<!--Aplica style al contenido del slot-->
<style scoped>
/* Add margin to <h1> tags within the slot */
:slotted(h1) {
  margin: 15px 5px;
}

</style>