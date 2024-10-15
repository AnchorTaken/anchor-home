<template>
  <div class="">
    <div class="relative flex h-screen bg-white">
      <div class="m-auto flex flex-col space-y-10">
        <div class="flex flex-col space-y-4">
          <span class="mx-auto w-fit text-sm font-bold leading-none text-black font-noto lg:text-2xl">「ご連絡を心よりお待ちしております。」</span>
          <h1 class="mx-auto flex w-fit flex-col font-black uppercase text-[7rem] leading-[6rem] font-barlow lg:text-[14rem] lg:leading-[11rem] lg:w-/12">
            <span>Get in</span> <span> touch</span>
          </h1>
        </div>


        <div class="mx-auto flex space-x-6 lg:space-x-10">
          <div v-for="(item, i) in icons" :key="i" class="relative flex h-fit w-fit cursor-pointer group" @click="doAction(item.url)">
            <div class="z-10 flex h-6 w-6 lg:h-10 lg:w-10" v-html="item.icon"/>
            <div class="absolute top-0 right-0 bottom-0 left-0 m-auto flex h-6 w-6 lg:h-10 lg:w-10 text-black opacity-0 group-active:opacity-50 transition-all duration-75 z-[6] group-active:scale-[1.1] group-hover:opacity-50 lg:group-hover:scale-[1.1]" v-html="item.icon"/>
            <div class="absolute top-0 right-0 bottom-0 left-0 m-auto flex h-6 w-6 lg:h-10 lg:w-10 text-black opacity-0 group-active:opacity-20 transition-all duration-75 z-[5] group-active:scale-[1.3] group-hover:opacity-20 lg:group-hover:scale-[1.3]" v-html="item.icon"/>
          </div>
        </div>
      </div>
    </div>
    <PoloColors class="h-4"/>
  </div>
</template>
<script setup>
import {ref} from "vue";
import PoloColors from "~/src/components/misc/PoloColors.vue";

const icons = [
  {
    icon: '<svg viewBox="0 0 47 37" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 4.83901C0.5 3.56028 1.01926 2.33394 1.94355 1.42974C2.86783 0.525549 4.12143 0.0175781 5.42857 0.0175781H41.5714C42.8786 0.0175781 44.1322 0.525549 45.0565 1.42974C45.9807 2.33394 46.5 3.56028 46.5 4.83901V5.93829L24.7584 20.1197C24.3789 20.3432 23.9429 20.4579 23.5 20.4508C23.0571 20.4579 22.6211 20.3432 22.2416 20.1197L0.5 5.93829V4.83901ZM0.5 10.7661V32.1604C0.5 33.4392 1.01926 34.6655 1.94355 35.5697C2.86783 36.4739 4.12143 36.9819 5.42857 36.9819H41.5714C42.8786 36.9819 44.1322 36.4739 45.0565 35.5697C45.9807 34.6655 46.5 33.4392 46.5 32.1604V10.7661L27.0256 23.469L27.0091 23.4819C25.9608 24.1341 24.7424 24.4767 23.5 24.4687C22.2679 24.4687 21.0259 24.1408 19.9909 23.4819L19.9744 23.469L0.5 10.7661Z" fill="currentColor"/> </svg>',
    url:'mail',
  },
  {
    icon: '<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M24 0.75C20.8811 0.75 17.7928 1.36431 14.9113 2.55786C12.0298 3.75141 9.4116 5.50082 7.20621 7.70621C2.75222 12.1602 0.25 18.2011 0.25 24.5C0.25 34.9975 7.06625 43.9038 16.495 47.0625C17.6825 47.2525 18.0625 46.5163 18.0625 45.875V41.8612C11.4838 43.2862 10.0825 38.6787 10.0825 38.6787C8.99 35.9237 7.44625 35.1875 7.44625 35.1875C5.285 33.715 7.6125 33.7625 7.6125 33.7625C9.9875 33.9287 11.2463 36.2088 11.2463 36.2088C13.3125 39.8188 16.8037 38.75 18.1575 38.18C18.3713 36.6362 18.9888 35.5913 19.6537 34.9975C14.3813 34.4038 8.8475 32.3612 8.8475 23.3125C8.8475 20.6763 9.75 18.5625 11.2937 16.8762C11.0563 16.2825 10.225 13.8125 11.5312 10.6062C11.5312 10.6062 13.5262 9.965 18.0625 13.0288C19.9387 12.5063 21.9813 12.245 24 12.245C26.0187 12.245 28.0613 12.5063 29.9375 13.0288C34.4738 9.965 36.4688 10.6062 36.4688 10.6062C37.775 13.8125 36.9438 16.2825 36.7062 16.8762C38.25 18.5625 39.1525 20.6763 39.1525 23.3125C39.1525 32.385 33.595 34.38 28.2988 34.9738C29.1538 35.71 29.9375 37.1587 29.9375 39.3675V45.875C29.9375 46.5163 30.3175 47.2762 31.5287 47.0625C40.9575 43.88 47.75 34.9975 47.75 24.5C47.75 21.3811 47.1357 18.2928 45.9421 15.4113C44.7486 12.5298 42.9992 9.9116 40.7938 7.70621C38.5884 5.50082 35.9702 3.75141 33.0887 2.55786C30.2072 1.36431 27.1189 0.75 24 0.75Z" fill="currentColor"/> </svg>',
    url:'github',
  },

]

const emits = defineEmits(['makeToast']);

const doAction = (url) => {
  // copy the email to clipboard
  if(url === 'mail'){
    navigator.clipboard.writeText('maksvitis.evalds@gmail.com');
    alert('Email copied to clipboard');
  }
  if(url === 'discord'){
    navigator.clipboard.writeText('.anchor');
    alert('Email copied to clipboard');
  }
  if(url === 'github'){
    window.open('https://github.com/AnchorTaken');
  }
  if(url === 'ig'){
    window.open('https://www.instagram.com/anchoronai/');
  }

  // open a blank page with the url


}

</script>