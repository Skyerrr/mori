<template>
  <div class="bg-color">
    <TopBar class="hidden md:block " />
    <TopBarMobile class="block md:hidden" />

    <div class="flex flex-col w-full">
      <div
        class="mb-0 md:mb-0 flex flex-col w-full min-h-screen md:flex md:flex-col"
      >
        <div id="intro" class="w-full md:flex md:flex-col md:flex-1 md:justify-center md:-mt-26 lg:-mt-32">
          <TavIntro class="w-full" />
        </div>
      </div>
      <div id="work" class="mb-38 md:mb-[256px] md:mt-6 flex flex-col w-full">
        <TavWork class="flex-1 w-full" />
      </div>
      <div id="journey" class="mb-38 md:mb-[256px] flex flex-col w-full">
        <TavJourney class="flex-1 w-full items-center" />
      </div>
      <div id="references" class="flex flex-col w-full mb-24">
        <TavReferences class="flex-1 w-full" />
      </div>
      <div class="min-h-screen flex flex-col bg-color">
        <!-- All sections wrapper -->
        <div class="flex flex-col flex-1">
          <!-- other sections above -->

          <div
            id="connect"
            class="flex flex-col flex-1 justify-center w-full px-4"
          >
            <div class="w-full">
              <TavConnect />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TopBar from "./components/TopBar.vue";
import TopBarMobile from "./components/TopBarMobile.vue";
import TavIntro from "./components/TavIntro.vue";
import TavWork from "./components/TavWork.vue";
import TavJourney from "./components/TavJourney.vue";
import TavReferences from "./components/TavReferences.vue";
import TavConnect from "./components/TavConnect.vue";
import EditorialMargins from "./components/TavIntro/EditorialMargins.vue";
</script>
