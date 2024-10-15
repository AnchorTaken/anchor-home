<template>
  <div class="z-10 flex space-x-3 h-fit my-auto ">
    <i class="my-auto flex h-3 w-3 text-white lg:h-4 lg:w-4 lg:group-hover:text-black">
      <svg v-html="icon"/>
    </i>

    <span class="my-auto flex h-fit text-base font-semibold uppercase leading-none  font-jet lg:text-xl lg:group-hover:text-black" :class="isHovered ? 'text-black' : 'text-white'">
      <slot/>
    </span>
  </div>
</template>

<script setup>
const props = defineProps(['icon', 'isHovered'])

</script>