<template>
  <div class=" space-y-4">
    <div class="">
      <div class="text-base font-bold leading-none font-noto lg:text-xl w-8/12 lg:w-full 2xl:text-2xl" :class="dark ? 'text-white' : 'text-black'">
        {{ jp }}
      </div>
      <h1 class="font-black flex flex-col lg:flex-row uppercase leading-none font-barlow text-[7rem] lg:text-[10rem] 2xl:text-[14rem]" :class="dark ? 'text-white' : 'text-black'">
        <slot name="title"/>
      </h1>
    </div>
    <p class="lg:text-justify font-semibold font-jet lg:w-8/12 uppercase 2xl:text-2xl" :class="dark ? 'text-white' : 'text-black'">
      <slot/>
    </p>
  </div>
</template>
<script setup>
const props = defineProps(['title', 'jp', 'dark'])
</script>