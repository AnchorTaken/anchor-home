<template>
  <div class="relative">
    <div class="relative overflow-hidden bg-black px-5 py-10 text-white lg:pt-44 lg:pb-52">
      <div class="container m-auto flex max-h-full flex-col space-y-6">
        <title-head jp="チームと共に成長し、夢を実現することに全力を尽くします。" :dark="true">
          <template #title>
            <div class="leading-[6rem] lg:leading-none">
              Clients
            </div>
          </template>
          My humble list of clients that I have worked with
        </title-head>

        <div class="hidden justify-between lg:flex">
          <button class="flex select-none space-x-4 group" @click="previousClient">
            <i class="my-auto flex h-4 w-4 group-active:-translate-x-3 transition-all duration-75 lg:h-7 lg:w-7 lg:group-hover:-translate-x-3">
              <IconLibrary name="arrow-left"/>
            </i>
            <span class="my-auto flex h-fit font-semibold uppercase leading-none font-jet lg:text-4xl">Previous</span>
          </button>

          <div v-if="data[states.clientIndex]" class="hidden lg:flex">
            <span class="rounded-xl bg-white px-6 py-2 text-lg font-bold uppercase text-black">
              {{
                data[states.clientIndex].name
              }}
            </span>
          </div>
          <button class="flex select-none space-x-4 group" @click="nextClient">
            <span class="my-auto flex h-fit font-semibold uppercase leading-none font-jet lg:text-4xl">Next</span>
            <i class="my-auto flex h-4 w-4 group-active:translate-x-3 transition-all duration-75 lg:h-7 lg:w-7 lg:group-hover:translate-x-3">
              <IconLibrary name="arrow-right"/>
            </i>
          </button>
        </div>
        <ContentNav
          :data="data"
          :content-index="states.clientIndex"
          @next-content="previousClient"
          @prev-content="nextClient"
        />
        <div
          v-for="(client, i) in data"
          :key="i"
          class="space-y-6 animate__animated animate__fadeIn animate__faster"
          :class="states.clientIndex !== i && 'hidden'"
        >
          <WriteCategory v-if="client.background" title="Background" :content="client.background"/>
          <WriteCategory v-if="client.growth" title="Growth" :content="client.growth" @read-more="readMore"/>
          <WriteCategory v-if="client.needs" title="Needs" :content="client.needs" @read-more="readMore"/>
          <WriteCategory v-if="client.responsibility" title="Responsibility" :content="client.responsibility" @read-more="readMore"/>
          <WriteCategory v-if="client.coms" title="Communication" :content="client.coms" @read-more="readMore"/>
        </div>
      </div>
    </div>

    <ReadMoreModal
      v-if="states.readMore.title !== null"
      :title="states.readMore.title"
      :content="states.readMore.content"
      @close="readMore(null, null)"
    />
  </div>
</template>
<script setup>
import {computed, ref} from "vue";
import TitleHead from "~/src/components/reusables/TitleHead.vue";
import ContentNav from "~/src/components/reusables/ContentNav.vue";
import IconLibrary from "~/src/components/misc/IconLibrary.vue";
import ReadMoreModal from "~/src/components/sections/work/ReadMoreModal.vue";
import WriteCategory from "~/src/components/sections/employment/WriteCategory.vue";

const data = ref([]);

const states = ref({
  clientData: null,
  clientIndex: 0,
  readMore: {
    title: null,
    content: null,
  },
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
  fetch('https://www.anchooor.wtf/api/clients')
    .then(response => response.json())
    .then(fetchedData => {
      data.value = fetchedData;
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

fetchSkills();

const readMore = (title, content) => {
  if (states.value.readMore.title === null && states.value.readMore.content === null){
    states.value.readMore.title = title;
    states.value.readMore.content = content;
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'scroll';
    states.value.readMore.title = null;
    states.value.readMore.content = null;
  }
}

</script>