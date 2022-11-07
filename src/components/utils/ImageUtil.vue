<template>
<!--  npm install v-lazy-image-->
  <div>
    <p>You can check that works by opening the Devtools Network tab, check the Img filter and clear the output.</p>
    <p>Scroll down till you see the image. Check in the Devtools that it's been loaded in that moment.</p>
    <div class="bigspace"></div>
    <v-lazy-image
        src="https://cdn-images-1.medium.com/max/800/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"
    ></v-lazy-image>
  </div>
</template>

<script setup>
import VLazyImage from "v-lazy-image";
</script>

<style scoped>
.v-lazy-image {
  width: 100%;
}

.bigspace {
  width: 1px;
  height: 2000px;
}
</style>