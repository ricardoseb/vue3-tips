<template>
  <ul>
    <li
        v-for="item in items"
        :key="item"
    >
<!--      manda el strong que esta en el padre-->
      <slot :item="item"/>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  items: {
    type: Array
  }
})
</script>

<style scoped>

</style>