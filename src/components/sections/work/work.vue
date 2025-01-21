<template>
  <div class="relative">
    <div class="relative overflow-hidden bg-black py-5 text-white lg:py-32">
      <div class="container m-auto flex max-h-full flex-col px-5 space-y-5">
        <title-head jp="作品は感覚と想像の糸で織りなし、心を静かに貫く。" :dark="true">
          <template #title>
            <div class="leading-[6rem] pr-5 lg:leading-[12rem]">
              My
            </div>
            <div class="leading-[6rem] lg:leading-[12rem]">
              Work
            </div>
          </template>
          Explore my project portfolio and discover the creative process and cutting-edge technologies behind each unique creation
        </title-head>
        <div class="hidden space-x-4 lg:flex">
          <ProjectButton v-for="(project, i) in data" :key="i" :name="project.name" :active="states.projectIndex === i" @click="switchWork(project, i)"/>
        </div>

        <div class="flex flex-col justify-between lg:space-x-10 lg:flex-row">
          <div class="relative flex max-h-full min-h-full overflow-hidden bg-black h-[84vh] lg:h-[80vh] lg:w-4/12">
            <img
              v-for="(project, i) in data"
              :key="i"
              class="h-full w-full rounded-xl bg-black object-cover object-top animate__animated animate__fadeIn animate__faster"
              :src="project.img_url"
              :class="states.projectIndex !== i && 'hidden'"
              alt=""
            >
            <div
              v-for="(mobile, index) in data"
              :key="index"
              class="absolute right-0 bottom-1 left-0 mx-auto rounded-xl bg-black px-5 py-5 w-[97%] animate__animated animate__slideInUp animate__faster space-y-5 lg:hidden"
              :class="states.projectIndex !== index && 'hidden'"
            >
              <ProjectSmall title="Software" :software="mobile.software"/>
              <ProjectSmall title="Links" :links="mobile.links"/>
              <div class="flex rounded-lg border-2 border-white bg-black transition-all duration-100 active:scale-95" @click="showReadMore">
                <span class="m-auto py-2 font-semibold uppercase font-jet">Read More </span>
              </div>
            </div>
          </div>
          <div
            v-for="(project, i) in data"
            :key="i"
            class="w-8/12"
            :class="states.projectIndex !== i ? 'hidden' : 'flex'"
          >
            <ProjectInfo :project="project"/>
          </div>
        </div>

        <ContentNav :data="data" :content-index="states.projectIndex" @next-content="nextProject" @prev-content="prevProject"/>
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

  <ReadMoreModal v-if="states.readMore && data[states.projectIndex]" :title="data[states.projectIndex].name" :content="data[states.projectIndex].description" @close="showReadMore"/>
</template>
<script setup>
import {ref} from "vue";
import TitleHead from "~/src/components/reusables/TitleHead.vue";
import ProjectButton from "~/src/components/sections/work/ProjectButton.vue";
import ProjectInfo from "~/src/components/sections/work/Project/ProjectInfo.vue";

import ProjectSmall from "~/src/components/sections/work/Project/ProjectSmall.vue";
import ContentNav from "~/src/components/reusables/ContentNav.vue";
import ReadMoreModal from "~/src/components/sections/work/ReadMoreModal.vue";

const data = ref([]);

const fetchSkills = () => {
  fetch(`${import.meta.env.VITE_BASE_URL}/api/projects`)
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
  readMore: false,
})
const switchWork = (work, id) => {
  if(id === states.value.projectIndex) return;
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

const showReadMore = () => {
  if(states.value.readMore){
    states.value.readMore = false;
    document.body.style.overflowY = 'auto';
  } else {
    states.value.readMore = true;
    document.body.style.overflow = 'hidden';
  }

}
</script>