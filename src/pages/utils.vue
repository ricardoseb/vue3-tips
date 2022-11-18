<template>
  <LinkComponent :url="`http://localhost:5173`" :newTab="true" class="btn btn-link text-xl">New Tab</LinkComponent>
  <AddressForm
      v-model:street-name="streetName"
      v-model:street-number="streetNumber"
      v-model:city="city"
      v-model:country="country"

  />
  <ImageUtil></ImageUtil>
</template>

<script setup>
import ImageUtil from "../components/utils/ImageUtil.vue";
import AddressForm from "../components/utils/AddressForm.vue";
import LinkComponent from "../components/utils/LinkComponent.vue";

const streetName = ref("Calle 13")
const streetNumber = ref(123)
const city = ref("Santiago")
const country = ref("Chile")


</script>

<style scoped>

</style>