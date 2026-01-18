<template>
  <div class="bg-color min-h-screen flex flex-col gap-6">
    <TopBar />
    <div class="mt-9">
      <TavIntro />
    </div>
    <div class="mt-9">
      <TavJourney />
    </div>
    <div class="mt-36">
      <TavReferences />
    </div>
  </div>
</template>

<script setup>
import AppFooter from "./components/AppFooter.vue";
import TopBar from "./components/TopBar.vue";
import TavIntro from "./components/TavIntro.vue";
import TavJourney from "./components/TavJourney.vue";
import TavReferences from "./components/TavReferences.vue";
</script>
