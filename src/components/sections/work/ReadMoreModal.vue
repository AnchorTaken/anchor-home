<template>
  <div class="fixed top-0 left-0 z-40 flex h-full w-full flex-col overflow-y-scroll bg-white p-8 pb-14 space-y-2">
    <h2 class="break-all font-black uppercase font-barlow text-[2rem] leading-[3rem] animate__animated animate__fadeIn animate__faster">
      {{ title }}
    </h2>
    <div class="w-full py-4 space-y-2">
      <p class="overflow-y-scroll whitespace-pre-line text-sm font-semibold uppercase text-black font-jet animate__animated animate__fadeIn animate__faster" v-html="addBreaks(content)"/>
    </div>

    <button class="fixed bottom-0 left-0 w-full bg-white px-4 py-2 font-black uppercase animate__animated animate__fadeIn animate__faster font-jet" @click="$emit('close')">
      close
    </button>
  </div>
</template>

<script setup>
const props = defineProps(['data', 'content', 'title'])
const emits = defineEmits(['close'])

import {addBreaks} from '@/utils/misc';
</script>