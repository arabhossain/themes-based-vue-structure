<template>
  <div>
    test from rentmy theme 1 {{helloWorld()}} - {{commonWorld()}}
    <Counter />
  </div>
</template>

<script setup>
import Counter from "../components/Counter";



const layout = "admin";
definePageMeta({
  layout: 'admin',
  title: 'Some Page',
  //middleware: ['auth', 'another-named-middleware']
})
</script>
