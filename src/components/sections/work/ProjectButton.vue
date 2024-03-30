<template>
  <div class="relative group">
    <button class="relative z-10 cursor-pointer select-none border-2 bg-white px-12 py-2 text-xl font-extrabold uppercase text-black transition-all duration-100 font-barlow 0 group-hover:-translate-y-0.5 group-hover:bg-black group-hover:text-white">
      {{ name }}
    </button><div class="absolute top-0 left-0 h-full w-full bg-white"/>
  </div>
</template>


<script setup>
const props = defineProps(['name'])
</script>