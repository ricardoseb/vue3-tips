<template>
  <Child>
<!--   esto es equivalante a v-slot:default-->
    <template #default>
      <!--     This will be applied to the default slot.-->
    </template>
  </Child>
  <div class="divider"></div>
  <ScopedSlotList :items="items">
    <template v-slot="{ item }">
      <strong>{{ item }}</strong>
    </template>
  </ScopedSlotList>
  <div class="divider"></div>
  <SlotWithTransition>
    <div v-if="isThisTrue" key="true">
      This is true.
    </div>
    <div v-else key="false">
      This is false.
    </div>
  </SlotWithTransition>
</template>

<script setup>
import {ref} from "vue";

const items = ref(["TV", "Radio", "Horno"])
const isThisTrue = ref(true)
</script>

<style scoped>

</style>