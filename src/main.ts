import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { createHead } from '@vueuse/head'
import {createPinia} from "pinia";


const app = createApp(App)
const head = createHead()

const router = createRouter({
  history: createWebHistory(),
})

const pinia = createPinia()

app.use(router)
app.use(head)//Para agregar etiquetas de encabezado, como título y metaetiquetas
app.use(pinia)
app.mount(document.body)
