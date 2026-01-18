<template>
  <div
    class="min-h-screen bg-black flex flex-col max-w-8xl mx-auto px-20 relative satoshi-medium-font"
  >
  <TopText />
  <Carousel />

<div class="flex flex-wrap justify-center gap-4 w-full max-w-8xl mb-32 sm:mb-32 -mt-30 sm:mt-32">
  <div class="flex-shrink-0">
    <button
      @click=""
      class="w-[187px] h-[52px] rounded-full text-[16px] satoshi font-medium flex items-center justify-center text-center btn-ani arrow-wrapper"
    >
      Linkedin Profile <img src="@/assets/image/Arrow.png" class="ml-3 arrow" alt="arrow">
    </button>
  </div>
</div>
    
  
  </div>
</template>
<script setup>
import TopText from './TavReferences/TopText.vue'
import Carousel from './TavReferences/Carousel.vue'
</script>


