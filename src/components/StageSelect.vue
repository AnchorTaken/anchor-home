<template>
  <div class="z-10 h-14 w-full lg:min-h-[100svh]   lg:w-4 lg:flex-col">
    <div class="flex h-full bg-slate-200 lg:flex-col">
      <div
        class="relative flex-1  cursor-pointer w-full bg-[#F60000] group"
        :class="currentStage === 'skills' ? 'basis-1/4' : ''"
        @click="emit('setCurrentStage', 'skills')"
      >
        <div
          class="absolute top-0 select-none left-0 right-0 bottom-0 m-auto lg:left-full h-11 lg:-translate-x-24 lg:rotate-90 text-4xl font-black uppercase lg:text-[#F60000]   lg:transition-all lg:duration-75 font-barlow lg:group-hover:translate-x-0"
          :class="currentStage === 'skills' ? 'lg:!translate-x-0 text-white animate__animated w-fit animate__fadeIn animate__fastest' : '!-translate-y-0 w-0 overflow-hidden'"
        >
          Stats
        </div>
      </div>
      <div
        class="relative flex-1 cursor-pointer bg-[#FF8700] group"
        :class="currentStage === 'work' ? 'basis-1/4' : ''"
        @click="emit('setCurrentStage', 'work')"
      >
        <div
          class="absolute top-0 select-none left-0 right-0 bottom-0 lg:left-full m-auto h-11 lg:-translate-x-24 lg:rotate-90 text-4xl font-black uppercase  lg:text-[#FF8700] lg:transition-all lg:duration-75   font-barlow lg:group-hover:translate-x-0"
          :class="currentStage === 'work' ? 'lg:!translate-x-0 w-fit text-white animate__animated animate__fadeIn animate__fastest' : '!-translate-y-0 w-0 overflow-hidden'"
        >
          Work
        </div>
      </div>
      <div
        class="relative flex-1 cursor-pointer bg-[#73C900] group"
        :class="currentStage === 'about' ? 'basis-1/4' : ''"
        @click="emit('setCurrentStage', 'about')"
      >
        <div
          class="absolute top-0 select-none left-0 right-0 bottom-0 lg:left-full m-auto h-11 lg:-translate-x-24 lg:rotate-90 text-4xl font-black uppercase lg:text-[#73C900] lg:transition-all lg:duration-75   font-barlow lg:group-hover:translate-x-0"
          :class="currentStage === 'about' ? 'lg:!translate-x-0 w-fit text-white animate__animated animate__fadeIn animate__fastest' : '!-translate-y-0 w-0 overflow-hidden'"
        >
          About
        </div>
      </div>
      <!--      <div-->
      <!--        class="relative flex-1 cursor-pointer bg-[#0095E9] group"-->
      <!--        :class="currentStage === 'clients' ? 'basis-1/4' : ''"-->
      <!--        @click="emit('setCurrentStage', 'clients')"-->
      <!--      >-->
      <!--        <div-->
      <!--          class="absolute top-0 select-none left-0 right-0 bottom-0 lg:left-full m-auto lg:-translate-x-24 lg:rotate-90 text-4xl font-black uppercase h-11 lg:text-[#0095E9] lg:transition-all lg:duration-75   font-barlow lg:group-hover:translate-x-0"-->
      <!--          :class="currentStage === 'clients' ? 'lg:!translate-x-0 w-fit text-white animate__animated animate__fadeIn animate__fastest' : '!-translate-y-0 w-0 overflow-hidden'"-->
      <!--        >-->
      <!--          Clients-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script setup>

const emit = defineEmits(['setCurrentStage']);
const props = defineProps(['currentStage'])
</script>