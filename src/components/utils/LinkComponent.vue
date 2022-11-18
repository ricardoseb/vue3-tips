<template>
  <a
      :href="url"
      v-bind:[targetAttr]="'_blank'"
  >
    <slot />
  </a>
</template>

<script setup>
import { computed } from 'vue';
const { newTab } = defineProps({
  newTab: {
    type: Boolean,
    default: false,
  },
  url: {
    type: String,
    required: true,
  },
});
// If newTab === false set this to null
const targetAttr = computed(() => newTab ? 'target' : null);
</script>

<style scoped>

</style>