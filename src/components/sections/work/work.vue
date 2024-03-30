<template>
  <div class="relative">
    <div class="relative overflow-hidden bg-black py-5 text-white lg:py-44">
      <div class="container m-auto flex max-h-full flex-col px-5 space-y-5">
        <title-head jp="作品は感覚と想像の糸で織りなし、心を静かに貫く。" :dark="true">
          <template #title>
            <div class="leading-[6rem] lg:leading-[12rem]">
              My
            </div>
            <div class="leading-[6rem] lg:leading-[12rem]">
              Work
            </div>
          </template>
          I am a web designer with 6 years of experience In the field and I create stunning experiences without
          sacrificing User Experience
        </title-head>
        <div class="hidden space-x-4 lg:flex">
          <ProjectButton v-for="(project, i) in data" :key="i" :name="project.name" @click="switchWork(project, i)"/>
        </div>
        <div class="flex justify-between rounded-xl bg-white  bg-opacity-15 px-3 py-2 lg:hidden">
          <div
            class="rounded-lg active:scale-90 transition-all duration-100 bg-black px-4 pt-3 pb-2 font-bold uppercase leading-none font-jet"
            @click="prevProject"
          >
            <div class="h-4 w-4">
              <svg viewBox="0 0 39 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39 18.7857L39 14.2143L9.75 14.2143L9.75 9.64286L4.875 9.64286L4.875 14.2143L-7.99294e-07 14.2143L-5.99471e-07 18.7857L4.875 18.7857L4.875 23.3571L9.75 23.3571L9.75 18.7857L39 18.7857ZM14.625 27.9286L9.75 27.9286L9.75 23.3571L14.625 23.3571L14.625 27.9286ZM14.625 27.9286L19.5 27.9286L19.5 32.5L14.625 32.5L14.625 27.9286ZM14.625 5.07143L9.75 5.07143L9.75 9.64286L14.625 9.64286L14.625 5.07143ZM14.625 5.07143L19.5 5.07143L19.5 0.499999L14.625 0.499999L14.625 5.07143Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
          <div
            v-for="(title, i) in data"
            :key="i"
            class="rounded-lg bg-black px-4 pt-3 pb-2 font-bold uppercase leading-none animate__animated animate__fadeIn font-jet"
            :class="states.projectIndex !== i && 'hidden'"
          >
            {{ title.name }}
          </div>
          <div
            class="rounded-lg active:scale-90 transition-all duration-100 bg-black px-4 pt-3 pb-2 font-bold uppercase leading-none font-jet"
            @click="nextProject"
          >
            <div class="h-4 w-4">
              <svg viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-2.99735e-07 6.85714L-3.99647e-07 9.14286L14.25 9.14286L14.25 11.4286L16.625 11.4286L16.625 9.14286L19 9.14286L19 6.85714L16.625 6.85714L16.625 4.57143L14.25 4.57143L14.25 6.85714L-2.99735e-07 6.85714ZM11.875 2.28571L14.25 2.28571L14.25 4.57143L11.875 4.57143L11.875 2.28571ZM11.875 2.28571L9.5 2.28571L9.5 -4.15258e-07L11.875 -3.11444e-07L11.875 2.28571ZM11.875 13.7143L14.25 13.7143L14.25 11.4286L11.875 11.4286L11.875 13.7143ZM11.875 13.7143L9.5 13.7143L9.5 16L11.875 16L11.875 13.7143Z" fill="currentColor"/></svg>
            </div>
          </div>
        </div>
        <div class="flex flex-col lg:space-x-10 lg:flex-row">
          <div class="relative max-h-full min-h-full w-full max-w-xl overflow-hidden rounded-2xl bg-black h-[84vh] lg:h-[90vh]">
            <img
              v-for="(project, i) in data"
              :key="i"
              class="w-full rounded-b-2xl bg-black animate__animated animate__fadeIn animate__faster"
              :src="project.img_url"
              :class="states.projectIndex !== i && 'hidden'"
              alt=""
            >
            <div
              v-for="(mobile, index) in data"
              :key="index"
              class="absolute right-0 bottom-2 left-0 mx-auto rounded-xl bg-black px-5 py-5 w-[95%] animate__animated animate__slideInUp animate__faster space-y-5 lg:hidden"
              :class="states.projectIndex !== index && 'hidden'"
            >
              <ProjectSmall title="Software" :software="mobile.software"/>
              <ProjectSmall title="Links" :links="mobile.links"/>
            </div>
          </div>
          <div
            v-for="(project, i) in data"
            :key="i"
            class=""
            :class="states.projectIndex !== i ? 'hidden' : 'flex'"
          >
            <ProjectInfo :project="project"/>
          </div>
        </div>
      </div>
      <div class="pointer-events-none absolute top-16 right-0 lg:top-32">
        <img src="/svg/work.svg" class="h-14 lg:h-44" alt="">
      </div>
    </div>

    <div class="absolute top-9 right-5 hidden">
      <img src="/svg/barcode-2.svg" class="pointer-events-none" alt="">
    </div>
    <div class="">
      <div class="h-3 w-full bg-black opacity-80 lg:h-10"/>
      <div class="h-3 w-full bg-black opacity-60 lg:h-10"/>
      <div class="h-3 w-full bg-black opacity-40 lg:h-10"/>
      <div class="h-3 w-full bg-black opacity-20 lg:h-10"/>
    </div>
  </div>
</template>
<script setup>
import {ref} from "vue";
import TitleHead from "~/src/components/sections/titleHead.vue";
import ProjectButton from "~/src/components/sections/work/ProjectButton.vue";
import ProjectInfo from "~/src/components/sections/work/Project/ProjectInfo.vue";

import ProjectSmall from "~/src/components/sections/work/Project/ProjectSmall.vue";

const data = ref([]);

const fetchSkills = () => {
  fetch('https://www.anchooor.wtf/api/projects')
    .then(response => response.json())
    .then(fetchedData => {
      data.value = fetchedData;
      switchWork(data.value[0], 0)
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

fetchSkills();
const states = ref({
  projectData: null,
  projectIndex: null,
})
const switchWork = (work, id) => {
  if (work === undefined){
    states.value.projectIndex = null;
    states.value.projectData = null;
  } else {
    states.value.projectIndex = null;
    states.value.projectData = null;
    setTimeout(() => {
      states.value.projectIndex = id;
      states.value.projectData = work;
    }, 100)
  }
}

const nextProject = () => {
  if (states.value.projectIndex === data.value.length - 1){
    switchWork(data.value[0], 0)
  } else {
    switchWork(data.value[states.value.projectIndex + 1], states.value.projectIndex + 1)
  }
}

const prevProject = () => {
  if (states.value.projectIndex === 0){
    switchWork(data.value[data.value.length - 1], data.value.length - 1)
  } else {
    switchWork(data.value[states.value.projectIndex - 1], states.value.projectIndex - 1)
  }
}

</script>