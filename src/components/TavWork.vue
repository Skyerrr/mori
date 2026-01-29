<template>
  <div
    class="bg-black flex flex-col max-w-8xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 relative satoshi-medium-font"
  >
    <TopText />
    <div class="flex justify-center">
      <Cases
        class="hidden sm:block mb-8 sm:mb-12 -mt-12 sm:mt-0 w-full max-w-[1280px]"
      />
    </div>
    <div class="flex justify-center">
      <CasesMobile
        class="block sm:hidden mb-0 sm:mb-12 -mt-12 sm:mt-0 w-full max-w-[1280px]"
      />
    </div>
  </div>
</template>
<script setup>
import TopText from "./TavWork/TopText.vue";
import Cases from "./TavWork/Cases.vue";
import CasesMobile from "./TavWork/CasesMobile.vue";
</script>
