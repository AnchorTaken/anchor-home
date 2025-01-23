<template>
  <div class="flex space-x-3">
    <i class="my-auto flex lg:h-5 h-4 w-4 lg:w-5">
      <svg class="text-slate-800" v-html="icon"/>
    </i>
    <div class="my-auto flex text-slate-800 h-fit text-lg lg:text-xl font-black uppercase leading-none font-jet">
      {{ text }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['icon', 'text'])
const icon = props.icon
</script>