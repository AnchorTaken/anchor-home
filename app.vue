<template>
  <Hero/>
  <About/>
  <Work/>
  <Skills/>
  <Employment/>
  <Closure/>
</template>

<script setup>
import 'animate.css';
import {ref} from "vue";


import Hero from "~/src/components/sections/hero/hero.vue";
import About from "~/src/components/sections/about/about.vue";
import Work from "~/src/components/sections/work/work.vue";
import Skills from "~/src/components/sections/skills/skills.vue";
import Employment from "~/src/components/sections/employment/employment.vue";
import Closure from "~/src/components/sections/closure/closure.vue";


useHead({
  title: 'anchor.graphics',
  link: [
    {rel: 'icon', type: 'image/x-icon', href: '/img/icon.png'},
  ],
  meta: [
    {name: 'description', content: 'no description'},
  ],
  bodyAttrs: {
    class: 'test',
  },
})

</script>

<style>

::-webkit-scrollbar {
  width: 10px; /* For vertical scrollbars */
}

/* Track (the part the scrollbar sits in) */
::-webkit-scrollbar-track {
  background: #fff; /* Color of the tracking area */
}

/* Handle (the draggable scrolling element) */
::-webkit-scrollbar-thumb {
  background: #000000; /* Color of the scroll thumb */
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; /* Color of the scroll thumb on hover */
}
</style>