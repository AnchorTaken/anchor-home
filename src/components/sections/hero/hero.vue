<template>
  <div class="relative flex h-[100dvh] w-full overflow-hidden bg-black">
    <div class="m-auto">
      <div class="flex flex-col w-full sm:flex-row">
        <span v-for="t in text" :key="t" class="font-black uppercase leading-none text-white font-barlow text-[3rem] sm:text-[7rem] lg:text-[10rem] xl:text-[14rem] 2xl:text-[17rem]">{{ t }}</span>
      </div>
      <img src="/svg/design.svg" class="rotate-90 sm:rotate-0 pointer-events-none absolute top-0 right-0 bottom-0 left-0 m-auto h-fit w-fit scale-[.4] md:scale-[.4] lg:scale-[.55] xl:scale-75 2xl:scale-100" alt="">
    </div>
    <div class="absolute bottom-12 xl:bottom-0 xl:left-5">
      <img src="/svg/barcode-1.svg" class="pointer-events-none hidden xl:flex" alt="">
      <img src="/svg/barcode-1-hor.svg" class="pointer-events-none scale-[4] md:scale-100 xl:hidden" alt="">
    </div>
  </div>
</template>
<script setup>
import {ref} from "vue";
const text = ref('Perfected');
</script>