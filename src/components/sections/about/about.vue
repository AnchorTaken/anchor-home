<template>
  <div class="relative z-10 flex md:py-14">
    <div class="container m-auto py-5 space-y-4">
      <div class="px-5">
        <title-head jp="心の旅は深く、夢と現実が織りなす物語。" :dark="false" color="text-[#73C900]">
          <template #title>
            About
          </template>
        </title-head>
      </div>
      <div class="flex flex-col space-y-4 lg:w-1/2">
        <SimpleParagraph class="px-5 md:w-2/3 lg:w-full">
          I am a web designer with 6 years of expertise in the field, and I aim to create the most stunning experiences without sacrificing UX.
        </SimpleParagraph>

        <div class="flex max-h-full justify-between space-x-4">
          <div class="flex w-9/12 flex-col justify-between pl-5 md:px-5 lg:w-full">
            <div class="space-y-4">
              <SimpleParagraph>
                Web development became my fascination in 2017. I began tinkering with HTML and PHP, but nothing really made me feel at home until 2022 when I rediscovered JS and all of it's juicy frameworks.
              </SimpleParagraph>
              <SimpleParagraph>
                Since then, I have grown into a person who does not ask whether something is possible. My aspiration is to grow personally with every project I take on by learning and improving from my previous work, be it my code, design, or UX.
              </SimpleParagraph>
              <SimpleParagraph>
                As a character, I am easy-going and find it simple to get along with people. This is a by-product of my drive for interaction, continuous growth, as well as working with people who can teach me as much as I can teach them.
              </SimpleParagraph>
            </div>
          </div>
          <div class="pointer-events-none relative w-3/12 overflow-hidden md:hidden">
            <img src="https://res.cloudinary.com/dht0jhvlk/image/upload/v1711835070/img/wchzhxqgvncygw6rx0aw.png" class="h-full" alt="">
          </div>
        </div>
        <div class="px-5 space-y-4 md:w-2/3 lg:w-full">
          <SimpleParagraph>
            My current aspirations are to continue expanding my skillset through finding people who are deeply interested in providing an exceptional product or experience to end users as well as push my skillset to its limits.
          </SimpleParagraph>
          <span class="flex text-sm font-black uppercase font-barlow md:text-xl">web is my canvas. so lets make something cool together</span>
        </div>
      </div>
      <div class="pointer-events-none absolute right-0 hidden h-full w-1/3 overflow-hidden md:top-32 md:flex md:w-5/12 lg:top-10">
        <img src="/svg/quotes.svg" class="w-full" alt="">
      </div>
    </div>
  </div>
</template>
<script setup>
import TitleHead from "~/src/components/reusables/TitleHead.vue";
import SimpleParagraph from "~/src/components/sections/about/SimpleParagraph.vue";
</script>