<template>
  <div class="hidden max-h-full w-fit max-w-full flex-col justify-between lg:flex">
    <div class="space-y-4">
      <div class="font-black uppercase leading-none text-white font-barlow text-[4rem] animate__animated animate__fadeIn animate__faster">
        {{ project.name }}
      </div>
      <div class="w-full space-y-2 py-4">
        <p class="text-justify font-semibold uppercase  max-h-[40vh] overflow-y-scroll pr-10 whitespace-pre-line font-jet animate__animated animate__fadeIn animate__faster" v-html="deeper(project.description)"/>
      </div>
    </div>
    <div class="space-y-8">
      <ProjectSmall title="Software" :software="project.software"/>
      <ProjectSmall title="Links" :links="project.links"/>
    </div>
  </div>
</template>
<script setup>
import ProjectSmall from "~/src/components/sections/work/Project/ProjectSmall.vue";
const props = defineProps(['project'])

const deeper = (text) => {
  return text.replace(/\\r\\n\\r\\n/g, '<br>');
};

</script>

<style scoped>

::-webkit-scrollbar {
  width: 2px; /* For vertical scrollbars */
  transition: all 0.5s ease;
}

/* Track (the part the scrollbar sits in) */
::-webkit-scrollbar-track {
  background: #0e0e0e; /* Color of the tracking area */
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