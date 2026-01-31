<template>
  <div
    class="bg-black flex flex-col max-w-8xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 relative satoshi-medium-font"

  >
    <TopText />
    <Carousel class="mb-12 sm:mb-28 -mt-12 sm:mt-0" />

    <div
      class="flex flex-wrap justify-center gap-4 w-full max-w-8xl mb-32 sm:mb-32 "
    >
      <div class="flex-shrink-0">
        <a
          href="https://www.linkedin.com/in/rodrigotavr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            @click=""
            class="w-[187px] h-[52px] rounded-full text-[16px] satoshi font-medium flex items-center justify-center text-center btn-ani arrow-wrapper"
          >
            Linkedin Profile
            <img
              src="@/assets/image/Arrow.png"
              class="ml-3 arrow"
              alt="arrow"
            />
          </button>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import TopText from "./TavReferences/TopText.vue";
import Carousel from "./TavReferences/Carousel.vue";
</script>
