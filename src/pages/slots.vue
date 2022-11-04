<template>
  <div class="flex flex-row space-x-10">
    <SlotButton>
      <h1>click me!</h1>
    </SlotButton>
  </div>
  <div class="divider"></div>
  <Parent/>
  <div class="divider"></div>
  <pre>{{ ketchup }}</pre>
  <pre>{{ burger }}</pre>
  <pre>{{ burger.ketchup }}</pre>
  <div class="divider"></div>
  <RouterLink to="/" class="btn btn-link text-xl">To Home</RouterLink>
</template>

<script setup>
import SlotButton from "../components/slots/SlotButton.vue";
import Parent from "../components/slots/Parent.vue";
import useBurger from "../composables/useBurger.js";
import {reactive} from "vue";

const {ketchup} = useBurger();
watchEffect(() => console.log("composable value: ", ketchup.value));
// / Wrap in `reactive` to make it a reactive object
const burger = reactive(useBurger());
watchEffect(() => console.log(burger.ketchup));
</script>

<style scoped>

</style>