<template>
  <div class="relative overflow-hidden group">
    <button class="relative z-10 w-full cursor-pointer select-none px-12 py-2 text-xl font-extrabold uppercase transition-all duration-100 font-barlow group-hover:text-black" :class="active ? 'text-black' : 'text-white'">
      {{ name }}
    </button>
    <div class="absolute top-0 left-0 h-full w-full bg-white transition-all duration-75" :class="active ? '' :'-translate-y-20   group-hover:translate-y-0  '"/>
  </div>
</template>


<script setup>
const props = defineProps(['name', 'active'])
</script>