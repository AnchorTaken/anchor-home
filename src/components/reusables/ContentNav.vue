<template>
  <div class="flex h-12 justify-between rounded-xl bg-white bg-opacity-5 px-4 lg:hidden">
    <div class="my-auto">
      <div
        v-for="(title, i) in data"
        :key="i"
        class="my-auto h-fit font-bold uppercase leading-none text-white min-w-44 text-xl animate__animated animate__fadeInRightSmall animate__faster font-jet"
        :class="contentIndex !== i && 'hidden'"
      >
        {{ title.name }}
      </div>
    </div>
    <div class="flex space-x-4">
      <div
        v-if="!showInfo"
        class="my-auto select-none p-2 font-bold uppercase leading-none font-jet group"
        @click="$emit('toggleInfo')"
      >
        <div class="flex h-4 w-4 group-active:scale-125 transition-all duration-100">
          <IconLibrary name="arrow-top" class="text-white"/>
        </div>
      </div>
      <div
        class="my-auto select-none p-2 font-bold uppercase leading-none font-jet group"
        @click="$emit('prevContent')"
      >
        <div class="flex h-4 w-4 group-active:scale-125 transition-all duration-100">
          <IconLibrary name="arrow-left" class="text-white"/>
        </div>
      </div>

      <div
        class="my-auto select-none p-2 font-bold uppercase leading-none font-jet group"
        @click="$emit('nextContent')"
      >
        <div class="flex h-4 w-4 group-active:scale-125 transition-all duration-100">
          <IconLibrary name="arrow-right" class="text-white"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconLibrary from "~/src/components/misc/IconLibrary.vue";

const props = defineProps(['data', 'contentIndex', 'showInfo'])
const emits = defineEmits(['nextContent', 'prevContent'])
</script>