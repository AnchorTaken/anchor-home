<template>
  <div class="relative z-10 flex md:h-screen">
    <div class="container m-auto py-5 space-y-4">
      <div class="px-5">
        <title-head jp="心の旅は深く、夢と現実が織りなす物語。" :dark="false">
          <template #title>
            About
          </template>
        </title-head>
      </div>
      <div class="flex flex-col text-justify space-y-4 lg:w-1/2">
        <SimpleParagraph class="px-5">
          I am a web designer with 6 years of experience In the field and I create stunning experiences without sacrificing User Experience
        </SimpleParagraph>

        <div class="flex max-h-full justify-between space-x-4">
          <div class="flex w-2/3 flex-col justify-between pl-5 lg:w-full">
            <div class="space-y-4">
              <SimpleParagraph>
                Web development became my fascination in 2017. Since then, I grew into a person who does not ask whether it is possible, only “how long will it take?”. My aspiration is growing personally with every website by learning and improving from my previous work, be it my code, the look of the site, or its performance
              </SimpleParagraph>
              <SimpleParagraph>
                As a character, I am easy-going and find it simple to get along with people. This is a by-product of my drive for continuous learning and trying to work with people who can teach me as much as I can teach them
              </SimpleParagraph>
            </div>
          </div>
          <div class="pointer-events-none relative w-1/3 max-w-fit overflow-hidden lg:hidden">
            <img src="/img/portrait-no-jp.png" class="h-full" alt="">
          </div>
        </div>
      </div>
      <div class="pointer-events-none absolute right-0 hidden  h-full overflow-hidden lg:flex lg:top-10">
        <img src="/svg/quotes.svg" alt="">
      </div>
    </div>
  </div>
</template>
<script setup>
import TitleHead from "~/src/components/sections/titleHead.vue";
import SimpleParagraph from "~/src/components/sections/about/SimpleParagraph.vue";
</script>