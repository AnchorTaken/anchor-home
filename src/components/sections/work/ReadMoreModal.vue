<template>
  <div class="fixed top-0 left-0 z-30 flex h-full w-full flex-col   bg-white p-8 pb-14 backdrop-blur space-y-2 lg:bg-opacity-15 lg:pb-0">
    <div class="relative z-10 m-auto rounded-xl bg-white space-y-4 animate__animated animate__fadeIn animate__faster lg:w-2/3 lg:p-10">
      <h2 class="break-all font-black uppercase font-barlow text-[2rem] leading-[3rem]">
        {{ title }}
      </h2>
      <div class="w-full py-4 space-y-2 ">
        <p class="whitespace-pre-line text-sm pr-3 font-semibold uppercase text-black font-jet lg:max-h-[40vh] lg:overflow-y-auto" v-html="addBreaks(content)"/>
      </div>
      <button class="bottom-0 left-0 z-30 hidden w-fit mx-auto bg-white px-4 font-black uppercase font-jet lg:relative lg:flex" @click="$emit('close')">
        close
      </button>
    </div>

    <div class="absolute top-0 left-0 h-full w-full" @click="$emit('close')"/>
  </div>
  <button class="fixed bottom-0 lg:hidden left-0 z-30 w-full bg-white px-4 font-black uppercase font-jet lg:relative" @click="$emit('close')">
    close
  </button>
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