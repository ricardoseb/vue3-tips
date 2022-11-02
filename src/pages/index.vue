<!--1. A simpler way to pass lots of props-->
<script setup>

import {reactive, ref} from "vue";




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
  <DeepLinking />
  <div class="divider"></div>
  <SlotButton>
    <h1>click me!</h1>
  </SlotButton>
</template>
