<template>
  <div class="p-3">
    <div class="flex flex-column text-xl space-x-2 text-secondary">
      <p>{{ props.user.name }}</p>
      <p>{{ props.user.profile }}</p>
      <p>{{ props.user.twitter }}</p>
    </div>
    <div class="flex flex-column text-xl pt-3 space-x-3 text-accent">
      <h1 v-for="{ name, id } in users"
          :key="id">{{ name }}
      </h1>
      <h2 v-for="(movie, index) in [
        'Lion King',
         'Frozen',
          'The Princess Bride'
        ]">
        {{ index + 1 }} - {{ movie }}
      </h2>
      <h3 v-for="(value, key) in {
         name: 'Lion King',
         released: 2019,
         director: 'Jon Favreau',
        }">
        {{ key }}: {{ value }}
      </h3>
    </div>
    <div class="flex flex-column space-x-3 pt-3">
      <h2 v-for="(color, index) in props.colours">{{ color }}</h2>
    </div>
  </div>
</template>

<script setup>
import {watch} from 'vue'

const props = defineProps({
  user: {
    type: Object
  },
  colours: {
    type: Array
  }
})

const users = ref([
  {id: 1, name: "rick"}, {id: 2, name: "seb"}
])
watch(props.colours,
    () => {
      console.log('The list of colours has changed!');
    },
    {
      deep: true,
    }
);
</script>

<style scoped>

</style>
