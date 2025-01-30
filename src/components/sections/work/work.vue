<template>
  <div class="relative flex h-full flex-col">
    <div class="relative h-full overflow-hidden bg-slate-900 py-5 text-white lg:overflow-auto">
      <div class="container m-auto flex h-full flex-col px-5 space-y-5">
        <title-head jp="作品は感覚と想像の糸で織りなし、心を静かに貫く。" :dark="true" color="text-[#FF8700]">
          <template #title>
            <div class="leading-[6rem] lg:leading-[12rem]">
              Work
            </div>
          </template>
          Explore my project portfolio and discover the creative process and cutting-edge technologies behind each unique creation
        </title-head>
        <div class="hidden space-x-4 lg:flex">
          <ProjectButton v-for="(project, i) in data" :key="i" :name="project.name" :active="states.projectIndex === i" @click="switchWork(project, i)"/>
        </div>

        <div class="flex h-full flex-col justify-between lg:space-x-6 lg:flex-row">
          <div class="relative flex flex-1 overflow-hidden lg:min-h-[80vh] lg:mb-10 lg:w-4/12 lg:overflow-auto">
            <div class="absolute left-0 top-0 h-full w-full overflow-hidden rounded-lg">
              <img
                v-for="(project, i) in data"
                :key="i"
                class="h-full w-full bg-slate-900 object-cover object-top animate__animated animate__fadeIn animate__faster"
                :src="project.img_url"
                :class="states.projectIndex !== i && 'hidden'"
                alt=""
              >
            </div>
            <div
              v-for="(mobile, index) in data"
              :key="index"
              class=""
            >
              <Transition
                enter-active-class="animate__animated animate__slideInUp animate__faster"
                leave-active-class="animate__animated animate__slideOutDown animate__faster"
              >
                <div
                  v-show="showInfo"
                  class="absolute right-0 bottom-2 left-0 mx-auto rounded-xl bg-slate-900 px-4 py-3 w-[97%] space-y-4 lg:hidden"
                  :class="states.projectIndex !== index && 'hidden'"
                >
                  <ProjectSmall title="Software" :software="mobile.software"/>
                  <ProjectSmall title="Links" :links="mobile.links"/>
                  <div class="flex w-full space-x-2">
                    <div class="flex w-full rounded-lg bg-white bg-opacity-5 text-white transition-all duration-100 active:scale-95" @click="showReadMore">
                      <span class="m-auto py-2 font-semibold uppercase font-jet">Read More </span>
                    </div>
                    <div v-if="showInfo" class="flex w-fit rounded-lg bg-white bg-opacity-5 text-black transition-all duration-100 active:scale-95" @click="showInfo = !showInfo">
                      <div class="my-auto select-none p-2 px-4 font-bold uppercase leading-none font-jet group">
                        <div class="flex h-4 w-4 group-active:scale-125 transition-all duration-100">
                          <IconLibrary name="arrow-down" class="text-white"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
          <ContentNav
            class="mt-2"
            :data="data"
            :content-index="states.projectIndex"
            :show-info="showInfo"
            @toggle-info="showInfo = true"
            @next-content="nextProject"
            @prev-content="prevProject"
          />
          <!--          <div class="flex rounded-lg bg-white text-black transition-all duration-100 active:scale-95" @click="showInfo = !showInfo">-->
          <!--            <span class="m-auto select-none py-2 font-semibold uppercase font-jet"> {{ !showInfo ? 'show' : 'hide' }} </span>-->
          <!--          </div>-->
          <div
            v-for="(project, i) in data"
            :key="i"
            class="w-8/12 pb-10"
            :class="states.projectIndex !== i ? 'hidden' : 'flex'"
          >
            <ProjectInfo :project="project"/>
          </div>
        </div>
      </div>
      <!--      <div class="pointer-events-none absolute top-16 right-0 lg:top-12">-->
      <!--        <img src="/svg/work.svg" class="h-14 lg:h-44" alt="">-->
      <!--      </div>-->
    </div>

    <div class="absolute top-9 right-5 hidden">
      <img src="/svg/barcode-2.svg" class="pointer-events-none" alt="">
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
import IconLibrary from "~/src/components/misc/IconLibrary.vue";

const showInfo = ref(true)

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