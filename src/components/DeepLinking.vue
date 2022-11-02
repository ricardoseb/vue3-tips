<template>
  <div>
    <div class="section" v-for="section in sections" :key="section.name">
      <RouterLink :to="{ query: { active: section.name } }">{{
          section.name
        }}
      </RouterLink>
      <div v-if="section.name === activeSection" class="section-content">
        {{ section.content }}
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const sections = ref([{
  name: "Default Section",
  content:
      "This will be open by default, if nothing else has been opened.",
},
  {
    name: "Click on this section",
    content:
        "Notice how the query in the URL changes. Try copy/pasting that URL into a new window.",
  },
  {
    name: "Section 3",
    content: "Oh yeah, this one can be opened too",
  },])
const activeSection = computed(() => {
  return route.query.active || sections.value[0].name;
})
</script>

<style scoped>
.section a {
  display: block;
  font-weight: bold;
  font-size: 20px;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  padding: 10px 20px;
}

.section-content {
  padding: 20px 40px;
}
</style>