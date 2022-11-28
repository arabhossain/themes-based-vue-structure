<template>
  <div>
    A *admin* layout
    <slot/>
  </div>
</template>
<script setup>


import {useRoute} from "nuxt/app";

const route = useRoute()
useHead({
  css: [
    '../assets/style.css',
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: ''
    }
  ],
  meta: [
    {property: 'og:title', content: `App Name - ${route.meta.title}`},
    {"charset": "utf-8" }
  ]
})

</script>
