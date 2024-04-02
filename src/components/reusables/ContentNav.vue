<template>
  <div class="flex h-12 justify-between rounded-xl bg-white px-3 lg:hidden">
    <div
      class="my-auto bg-white p-2 font-bold uppercase leading-none text-black font-jet group"
      @click="$emit('prevContent')"
    >
      <div class="flex h-4 w-4 group-active:scale-125 transition-all duration-100">
        <IconLibrary name="arrow-left" class="text-black"/>
      </div>
    </div>

    <div
      v-for="(title, i) in data"
      :key="i"
      class="my-auto h-fit font-bold uppercase leading-none text-black animate__animated animate__fadeInUp animate__faster font-jet"
      :class="contentIndex !== i && 'hidden'"
    >
      {{ title.name }}
    </div>
    <div
      class="my-auto bg-white p-2 font-bold uppercase leading-none text-black font-jet group"
      @click="$emit('nextContent')"
    >
      <div class="flex h-4 w-4 group-active:scale-125 transition-all duration-100">
        <IconLibrary name="arrow-right" class="text-black"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconLibrary from "~/src/components/misc/IconLibrary.vue";

const props = defineProps(['data', 'contentIndex'])
const emits = defineEmits(['nextContent', 'prevContent'])
</script>