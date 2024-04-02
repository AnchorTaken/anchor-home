<template>
  <a :href="url" target="_blank" rel="noopener noreferrer">
    <button class="relative cursor-pointer group select-none">
      <span class="relative z-10 flex lg:p-1 space-x-4">
        <i v-if="icon" class="my-auto flex h-4 w-4 2xl:h-6 2xl:w-6 text-white transition-all duration-75 group-hover:text-black">
          <IconLibrary :name="icon"/>
        </i>
        <span class="my-auto flex h-fit lg:text-2xl font-semibold uppercase leading-none text-white transition-all duration-75 font-jet group-hover:text-black"><slot/></span>
      </span>
      <span class="absolute top-0 left-0 h-full w-0 bg-white transition-all duration-150 group-hover:w-full"/>
    </button>
  </a>
</template>

<script setup>
import IconLibrary from "~/src/components/misc/IconLibrary.vue";

const props = defineProps(['icon', 'url'])
</script>