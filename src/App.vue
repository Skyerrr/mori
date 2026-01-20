<template>
<div class="bg-color">
<TopBar />
<div id="intro" class="flex flex-col w-full">
  <div class="min-h-screen flex flex-col w-full">
    <TavIntro class="flex-1 w-full" />
  </div>
  <div id="journey" class="min-h-screen flex flex-col w-full mb-12">
    <TavJourney class="flex-1 w-full" />
  </div>
  <div id="references" class="min-h-screen flex flex-col w-full">
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
import TavIntro from "./components/TavIntro.vue";
import TavJourney from "./components/TavJourney.vue";
import TavReferences from "./components/TavReferences.vue";
import TavConnect from "./components/TavConnect.vue";
</script>
