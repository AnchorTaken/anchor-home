<template>
  <div class="lg:space-x-12 flex-col lg:flex-row flex ">
    <div class=" ">
      <!--      <div class="w-8/12 text-base font-bold leading-none font-noto lg:w-full lg:text-xl 2xl:text-2xl" :class="dark ? 'text-white' : 'text-slate-700'">-->
      <!--        {{ jp }}-->
      <!--      </div>-->
      <div class="relative w-fit">
        <h1
          class="flex flex-col relative font-black z-10 uppercase leading-none font-barlow text-[7rem] lg:text-[10rem] lg:flex-row 2xl:text-[10rem]"
          :class="dark ? 'text-white' : 'text-slate-900'"
        >
          <slot name="title"/>
        </h1>
        <h1
          class="flex flex-col absolute top-1 -right-1 font-black uppercase leading-none font-barlow text-[7rem] animate__animated animate__fadeInUpSmall animate__fastest lg:text-[10rem] lg:flex-row 2xl:text-[10rem]"
          :class="color"
        >
          <slot name="title"/>
        </h1>
      </div>
    </div>
    <p
      class="font-semibold my-auto h-fit uppercase pt-4 font-jet lg:w-6/12 lg:text-justify 2xl:text-xl"
      :class="dark ? 'text-white' : 'text-slate-900'"
    >
      <slot/>
    </p>
  </div>
</template>
<script setup>
const props = defineProps(['title', 'jp', 'dark', 'color'])
</script>