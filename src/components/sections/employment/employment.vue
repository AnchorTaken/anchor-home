<template>
  <div class="relative">
    <div class="relative overflow-hidden bg-black py-10 px-5 lg:pt-44 lg:pb-52 text-white">
      <div class="container m-auto flex max-h-full flex-col space-y-6">
        <title-head jp="「チームと共に成長し、夢を実現することに全力を尽くします。」" :dark="true">
          <template #title>
            <div class="leading-[6rem]  lg:leading-[12rem]">
              Clients
            </div>
          </template>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad ea enim hic iusto minus qui quis recusandae saepe tenetur.
        </title-head>

        <div v-if="data[states.clientIndex]" class="w-full flex lg:hidden">
          <span class="rounded-xl bg-opacity-15 bg-white text-center px-6 w-full py-2 text-lg font-bold uppercase text-white">{{ data[states.clientIndex].name }}</span>
        </div>
        <div class="flex justify-between">
          <button class="flex space-x-4 group select-none" @click="previousClient">
            <i class="my-auto flex h-4 w-4 lg:h-7 lg:w-7 transition-all duration-75  group-active:-translate-x-3 lg:group-hover:-translate-x-3">
              <svg viewBox="0 0 39 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39 18.7857L39 14.2143L9.75 14.2143L9.75 9.64286L4.875 9.64286L4.875 14.2143L-7.99294e-07 14.2143L-5.99471e-07 18.7857L4.875 18.7857L4.875 23.3571L9.75 23.3571L9.75 18.7857L39 18.7857ZM14.625 27.9286L9.75 27.9286L9.75 23.3571L14.625 23.3571L14.625 27.9286ZM14.625 27.9286L19.5 27.9286L19.5 32.5L14.625 32.5L14.625 27.9286ZM14.625 5.07143L9.75 5.07143L9.75 9.64286L14.625 9.64286L14.625 5.07143ZM14.625 5.07143L19.5 5.07143L19.5 0.499999L14.625 0.499999L14.625 5.07143Z" fill="currentColor"/>
              </svg>
            </i>
            <span class="my-auto flex h-fit lg:text-4xl font-semibold uppercase leading-none font-jet">Previous</span>
          </button>

          <div v-if="data[states.clientIndex]" class="hidden lg:flex">
            <span class="rounded-full bg-white px-6 py-2 text-lg font-bold uppercase text-black">{{ data[states.clientIndex].name }}</span>
          </div>
          <button class="flex space-x-4 group select-none" @click="nextClient">
            <span class="my-auto flex h-fit lg:text-4xl font-semibold uppercase leading-none font-jet">Next</span>
            <i class="my-auto flex h-4 w-4 lg:h-7 lg:w-7 transition-all duration-75 group-active:translate-x-3 lg:group-hover:translate-x-3">
              <svg viewBox="0 0 39 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-5.99471e-07 14.2143L-7.99294e-07 18.7857L29.25 18.7857L29.25 23.3571L34.125 23.3571L34.125 18.7857L39 18.7857L39 14.2143L34.125 14.2143L34.125 9.64286L29.25 9.64286L29.25 14.2143L-5.99471e-07 14.2143ZM24.375 5.07143L29.25 5.07143L29.25 9.64286L24.375 9.64286L24.375 5.07143ZM24.375 5.07143L19.5 5.07143L19.5 0.499999L24.375 0.499999L24.375 5.07143ZM24.375 27.9286L29.25 27.9286L29.25 23.3571L24.375 23.3571L24.375 27.9286ZM24.375 27.9286L19.5 27.9286L19.5 32.5L24.375 32.5L24.375 27.9286Z" fill="currentColor"/>
              </svg>
            </i>
          </button>
        </div>
        <div v-for="(client, i) in data" :key="i" class="space-y-6 animate__animated animate__fadeIn animate__faster" :class="states.clientIndex !== i && 'hidden'">
          <div class="text-6xl font-black uppercase leading-none text-white font-barlow">
            Projects
          </div>
          <div class="space-y-8">
            <div class="space-y-4">
              <div v-for="(desc, d) in client.projects" :key="d" class="">
                <h2 class="text-justify text-4xl font-black uppercase text-white font-jet">
                  {{ desc.name }}
                </h2>

                <p class="text-justify text-base lg:text-2xl font-semibold uppercase text-white font-jet">
                  {{ desc.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ref} from "vue";
import TitleHead from "~/src/components/sections/titleHead.vue";
const data = ref([]);

const states = ref({
  clientData: null,
  clientIndex: 0,
})

const nextClient = () => {
  if (states.value.clientIndex < data.value.length - 1){
    states.value.clientIndex++;
  } else {
    states.value.clientIndex = 0;
  }
}

const previousClient = () => {
  if (states.value.clientIndex > 0){
    states.value.clientIndex--;
  } else {
    states.value.clientIndex = data.value.length - 1;
  }
}

const fetchSkills = () => {
  fetch('http://192.168.0.100:2540/api/clients')
    .then(response => response.json())
    .then(fetchedData => {
      data.value = fetchedData;
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

fetchSkills();
</script>