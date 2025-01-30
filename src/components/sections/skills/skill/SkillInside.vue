<template>
  <div class="z-10 my-auto flex h-fit space-x-3">
    <i class="my-auto flex h-3 w-3 text-white lg:h-4 lg:w-4 select-none">
      <svg v-html="icon"/>
    </i>

    <span class="my-auto flex h-fit text-base font-semibold uppercase leading-none font-jet lg:text-xl select-none" :class="isHovered ? 'text-slate-950' : 'text-white'">
      <slot/>
    </span>
  </div>
</template>

<script setup>
const props = defineProps(['icon', 'isHovered'])

</script>