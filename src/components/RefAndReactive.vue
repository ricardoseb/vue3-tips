<template>
  <div class="flex flex-column space-x-3">
  <h1>{{ refBurger.lettuce }}</h1> <h1>{{ lettuce }}</h1>
  <h1>{{ reactiveBurger.lettuce }}</h1> <h1>{{ lechuga }}</h1>
  </div>
</template>

<script setup>
// / Ref — just need to access through `value` property
const refBurger = ref({lettuce: true});
watchEffect(() => console.log(refBurger.value.lettuce));
// Reactive
const reactiveBurger = reactive({lettuce: true});
watchEffect(() => console.log(reactiveBurger.lettuce));

// / Using `ref`
const {lettuce} = toRefs(refBurger.value);
// Using `reactive`
const {lettuce: lechuga} = toRefs(reactiveBurger);

const tomato = ref(true);
const burger = reactive({
// The ref becomes a property of the reactive object
  tomato,
});
// We can watch the reactive object
watchEffect(() => console.log(burger.tomato));
// We can also watch the ref directly
watch(tomato, () => console.log("tomato has changed"));
setTimeout(() => {
// Updating the ref directly will trigger both watchers
// This will log: `false`, 'lettuce has changed'
  tomato.value = false;
}, 500);
</script>

<style scoped>

</style>