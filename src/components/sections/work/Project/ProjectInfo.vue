<template>
  <div class="max-h-full w-fit max-w-full hidden  flex-col justify-between  lg:flex">
    <div class="">
      <div class="font-black uppercase leading-none text-white font-barlow text-[4rem] animate__animated animate__fadeIn animate__faster">
        {{ project.name }}
      </div>
      <div class="w-full space-y-4">
        <p class="text-justify text-xl font-semibold font-jet animate__animated animate__fadeIn animate__faster" v-html="deeper(project.description)"/>
      </div>
    </div>
    <div class="space-y-8">
      <ProjectSmall title="Software" :details="project.software"/>
      <ProjectSmall title="Links" :details="project.links"/>
    </div>
  </div>
</template>
<script setup>
import ProjectSmall from "~/src/components/sections/work/Project/ProjectSmall.vue";
const props = defineProps(['project'])

const deeper = (text) => {
  return text.replace(/\n/g, '<br><br>');
};
</script>