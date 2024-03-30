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
        <div class="lg:flex hidden space-x-4">
          <ProjectButton v-for="(project, i) in data" :key="i" :name="project.name" @click="switchWork(project, i)"/>
        </div>
        <div class="flex flex-col lg:space-x-10 lg:flex-row">
          <div class="relative max-h-full min-h-full w-full max-w-xl overflow-hidden rounded-2xl bg-white h-[84vh] lg:h-[90vh]">
            <img
              v-for="(project, i) in data"
              :key="i"
              class="rounded-b-2xl"
              :src="project.img_url"
              :class="states.projectIndex !== i && 'hidden'"
              alt=""
            >
            <div
              v-for="(mobile, index) in data"
              :key="index"
              class="absolute lg:hidden right-0 bottom-2 left-0 mx-auto rounded-xl bg-black px-5 py-5 w-[95%] space-y-5"
              :class="states.projectIndex !== index && 'hidden'"
            >
              <ProjectSmall title="Software" :details="mobile.software"/>
              <ProjectSmall title="Links" :details="mobile.links"/>
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
        <div class="flex lg:hidden justify-between rounded-xl bg-white bg-opacity-10 px-3 py-2">
          <div
            class="rounded-xl bg-black px-4 pt-3 pb-2 font-bold uppercase leading-none font-jet"
            @click="prevProject"
          >
            Back
          </div>
          <div
            v-for="(title, i) in data"
            :key="i"
            class="rounded-xl bg-black px-4 pt-3 pb-2 font-bold uppercase leading-none font-jet"
            :class="states.projectIndex !== i && 'hidden'"
          >
            {{ title.name }}
          </div>
          <div
            class="rounded-xl bg-black px-4 pt-3 pb-2 font-bold uppercase leading-none font-jet"
            @click="nextProject"
          >
            Next
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
import {computed, onMounted, ref} from "vue";
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