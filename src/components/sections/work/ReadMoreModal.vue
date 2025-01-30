<template>
  <div class="fixed top-0 left-0 z-30 flex h-full w-full flex-col bg-slate-900 p-5 pl-6 backdrop-blur space-y-2 lg:bg-opacity-15 lg:pb-0">
    <div class="relative z-10 m-auto mt-0 flex h-full flex-col rounded-xl animate__animated animate__fadeIn animate__faster lg:space-y-4 lg:w-2/3 lg:p-10">
      <h2 class="break-all font-black uppercase text-white font-barlow text-[4rem] leading-[5rem]">
        {{ title }}
      </h2>
      <div class="flex w-full flex-1 overflow-auto py-4 space-y-2">
        <p class="overflow-y-scroll whitespace-pre-line pr-2 text-sm font-semibold uppercase text-white font-jet lg:max-h-[40vh]" v-html="addBreaks(content)"/>
      </div>
      <button class="z-30 mx-auto w-full rounded-lg bg-white bg-opacity-5 px-4 py-3 font-black uppercase text-white font-jet lg:flex" @click="$emit('close')">
        close
      </button>
    </div>

    <div class="absolute top-0 left-0 h-full w-full" @click="$emit('close')"/>
  </div>
</template>

<script setup>
const props = defineProps(['data', 'content', 'title'])
const emits = defineEmits(['close'])

import {addBreaks} from '~/src/utils/misc';
</script>


<style scoped>

::-webkit-scrollbar {
  width: 2px; /* For vertical scrollbars */
  transition: all 0.5s ease;
}

/* Track (the part the scrollbar sits in) */
::-webkit-scrollbar-track {
  background: #efefef; /* Color of the tracking area */
  transition: all 0.5s ease;
}

/* Handle (the draggable scrolling element) */
::-webkit-scrollbar-thumb {

  background: #0097f5;
  transition: all 0.5s ease;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  transition: all 0.5s ease;
  background: #555; /* Color of the scroll thumb on hover */
}
</style>