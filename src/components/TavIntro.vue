<template>
  <div
    class="bg-black flex flex-col max-w-8xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative scale-4k"
  >
    <!-- Header -->
    <h1
      class="text-white font-normal tracking-[1.8px] text-[clamp(54px,10vw,720px)] leading-[1] sm:leading-[0.9]"
      style="font-family: Recoleta"
    >
      Hey i’m Tav
    </h1>
    <conversation />
  </div>
</template>

<script>
import { ref, computed } from "vue";
import conversation from "./TavIntro/conversation.vue";


</script>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

@media (min-width: 1921px) {
  .scale-4k {
    transform: scale(calc(1000vw / 1920));
    transform-origin: top center;
  }
}
</style>
