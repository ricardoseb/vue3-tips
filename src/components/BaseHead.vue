<!--Componente base head por cada pagina-->
<template>
  <Head>
    <html :lang="lang" :data-theme="theme"/>
    <!--    common-->
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0, user-scalable=no">
<!--    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">-->
    <meta http-equiv="content-language" content="es">
    <meta name="robots" :content="robots">

    <!-- Primary Meta Tags -->
    <!--   manténla entre 50 y 60 caracteres  -->
    <title v-if="title">{{ title }}</title>
    <meta v-if="title" name="title" :content="title">
    <!--A la hora de escribir una meta descripción, manténla entre 140 y 160 caracteres para que Google pueda mostrar tu mensaje -->
    <meta v-if="description" name="description" :content="description">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta v-if="title" property="og:title" :content="title">
    <meta v-if="description" property="og:description" :content="description">
    <meta v-if="image_seo" property="og:image" :content="image_seo">
    <meta v-if="url_seo" property="og:url" :content="url_seo">

    <!-- Twitter -->
    <meta v-if="title" name="twitter:title" :content="title">
    <meta v-if="description" name="twitter:description" :content="description">
    <meta property="twitter:url" :content="url_seo">
    <meta name="twitter:image" :content="image_seo">
    <meta name="twitter:card" content="summary_large_image">
  </Head>
</template>


<script setup>
import {Head} from '@vueuse/head'

defineProps({
  title: {
    type: String,
    default: "Vue tips"
  },
  description: {
    type: String,
  },
  image_seo: {
    type: String
  },
  url_seo: {
    type: String
  },
  theme: {
    type: String,
    default: 'cyberpunk'
  },
  lang: {
    type: String,
    default: "es-CL"
  },
  robots:{
    type: String,
    default: "index, follow"
  }
});
</script>
