<script setup>
const titulo = ref("titulo")
</script>

<template>
  <BaseHead :title="titulo"/>

  <router-view/>

</template>
<!--Estilos globales-->
<style scoped>
:global(body) {
  margin: 1px;
  padding: 1px;
  font-family: "Bangla Sangam MN";
}
</style>