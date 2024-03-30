<template>
  <div class="space-y-2">
    <div class="font-black uppercase leading-none text-white font-barlow text-[2rem] 2xl:text-[4rem]">
      {{ title }}
    </div>
    <div class="flex flex-wrap gap-x-8 gap-y-3">
      <div v-for="(soft, i) in details" :key="i" class="flex space-x-4 animate__animated animate__fadeIn animate__faster">
        <i class="my-auto flex h-4 w-4 2xl:h-6 2xl:w-6">
          <IconLibrary :name="soft.svg"/>
        </i>
        <span class="my-auto flex h-fit text-lg font-semibold uppercase leading-none font-jet 2xl:text-2xl">{{ soft.name }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconLibrary from "~/src/components/IconLibrary.vue";
const props = defineProps(['details', 'title'])
</script>