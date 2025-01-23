<template>
  <div class="relative overflow-hidden group">
    <button class="relative z-10 w-full cursor-pointer select-none px-12 py-2 text-xl font-extrabold uppercase transition-all duration-100 font-barlow group-hover:text-slate-800" :class="active ? 'text-slate-800' : 'text-white'">
      {{ name }}
    </button>
    <div class="absolute top-0 bottom-0 left-0 my-auto w-full bg-white transition-all duration-150 group-hover:h-full" :class="active ? 'h-full' :'  h-0 '"/>
  </div>
</template>


<script setup>
const props = defineProps(['name', 'active'])
</script>