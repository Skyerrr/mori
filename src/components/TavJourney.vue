<template>
  <div
    class="bg-black max-w-8xl mx-auto px-1 md:px-20 relative satoshi-medium-font"
  >
    <TopText />
    <Numbers />
    <Images />
    <Timeline />

    <div class="flex flex-wrap justify-center gap-4 w-full max-w-8xl">
      <div class="flex-shrink-0">
        <a href="@/assets/files/arrow.svg" download>
          <button
            @click=""
            class="w-[233px] h-[52px] rounded-full text-[16px] satoshi font-medium flex items-center justify-center text-center btn-ani arrow-wrapper cursor-pointer"
          >
            Download full resume
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
import TopText from "./TavJourney/TopText.vue";
import Numbers from "./TavJourney/Numbers.vue";
import Images from "./TavJourney/Images.vue";
import Timeline from "./TavJourney/Timeline.vue";
</script>
