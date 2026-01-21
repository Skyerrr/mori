<template>
<div class="bg-color">
<TopBar class="hidden md:block" />
<TopBarMobile class="block md:hidden" />

<div id="intro" class="flex flex-col w-full">
  <div class="mb-32 flex flex-col w-full">
    <TavIntro class="flex-1 w-full" />
  </div>
    <div id="work" class="mb-32 flex flex-col w-full ">
    <TavWork class="flex-1 w-full" />
  </div>
  <div id="journey" class="mb-32 flex flex-col w-full ">
    <TavJourney class="flex-1 w-full" />
  </div>
  <div id="references" class=" flex flex-col w-full">
    <TavReferences class="flex-1 w-full" />
  </div>
  <div id="connect" class=" flex flex-col w-full mb-12 md:mb-12">
    <TavConnect class="flex-1 w-full" />
  </div>
</div>
  </div>
</template>

<script setup>
import AppFooter from "./components/AppFooter.vue";
import TopBar from "./components/TopBar.vue";
import TopBarMobile from "./components/TopBarMobile.vue";
import TavIntro from "./components/TavIntro.vue";
import TavWork from "./components/TavWork.vue";
import TavJourney from "./components/TavJourney.vue";
import TavReferences from "./components/TavReferences.vue";
import TavConnect from "./components/TavConnect.vue";
</script>
