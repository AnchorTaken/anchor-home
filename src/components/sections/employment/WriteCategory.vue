<template>
  <div class="space-y-4">
    <div>
      <span class="font-black uppercase text-white text-[2rem] font-jet lg:text-[4rem]">{{ title }}</span>
      <p
        class="flex whitespace-pre-line text-sm uppercase font-jet space-y-2 lg:text-base"
        v-html="formatText(content)"
      />
    </div>
    <BasicButton v-if="shouldShowReadMore" @click="$emit('readMore', title, content)">
      Read More
    </BasicButton>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue';
import {addBreaks, truncateText} from '~/src/utils/misc';
import {useBreakpoints} from '~/src/composables/useBreakpoints';

import BasicButton from "~/src/components/buttons/BasicButton.vue";

const props = defineProps(['content', 'title']);
const emits = defineEmits(['readMore']);

const {breakpoints, currentBreakpoint} = useBreakpoints();

const truncationLengths = {
  mobile: 100,
  tablet: 300,
  smallDesktop: 400,
  largeDesktop: 600,
};

const formatText = (text) => {
  let formatted = addBreaks(text);

  const truncationLength = truncationLengths[currentBreakpoint.value] || truncationLengths.largeDesktop;
  formatted = truncateText(formatted, truncationLength);
  return formatted;
};

const shouldShowReadMore = computed(() => {
  if (props.content.length < 50){
    return false;
  }

  const truncationLength = truncationLengths[currentBreakpoint.value] || truncationLengths.mobile;
  return props.content.length > truncationLength;
});
</script>