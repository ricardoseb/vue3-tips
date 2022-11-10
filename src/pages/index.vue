<!--1. A simpler way to pass lots of props-->
<script setup>
const user = reactive({
      user: {
        name: 'Anakin',
        profile: 'ani-profile.jpg',
        twitter: '@Tatoo'
      }
    }
)
const colours = ref(['red', 'blue', 'black'])
</script>

<template>
  <User v-bind="user" :colours="colours"/>
  <div class="divider"></div>
  <DeepLinking/>
  <div class="divider"></div>
  <RefAndReactive></RefAndReactive>
  <div class="divider"></div>
  <DynamicClasses></DynamicClasses>
  <div class="combined"></div>
  <RouterLink to="/slots" class="btn btn-link m-5 text-xl"> To Slots</RouterLink>
  <RouterLink to="/utils" class="btn btn-link m-5 text-xl"> To Utils</RouterLink>
</template>
<style>
/*This lets you reuse those styles without having to create a whole new Vue component for them.*/
.combined {
  @apply mx-5 w-1/2 md:mx-0 md:w-auto mb-8 flex justify-end;
}
</style>
