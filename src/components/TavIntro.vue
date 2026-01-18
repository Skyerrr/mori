<template>
<div
  class="min-h-screen bg-black flex flex-col max-w-8xl mx-auto 
         px-6 sm:px-10 md:px-16 lg:px-20 relative"
>
  <!-- Header Top-Left -->
  <h1
    class="text-white font-normal not-italic tracking-[1.8px] mb-8
           text-[64px] sm:text-[96px] md:text-[140px] lg:text-[172px]
           leading-[1] sm:leading-[0.9]"
    style="font-family: Recoleta"
  >
    Hey i’m Tav
  </h1>

  <!-- Middle content container -->
  <div class="w-full relative mt-16 sm:mt-32 md:mt-50 mb-16 sm:mb-28 md:mb-40">
    <Transition name="fade-scale" mode="out-in">
      <div
        :key="currentNode.id"
        class="absolute top-0 right-0 text-right max-w-full md:max-w-8xl break-words"
      >
        <p
          class="text-xl sm:text-2xl md:text-3xl lg:text-6xl
                 font-serif text-white font-light mb-2 text-balance recoleta-font"
        >
          {{ currentNode.response }}
        </p>
        <p
          v-if="currentNode.subtitle"
          class="text-lg sm:text-xl md:text-2xl lg:text-4xl
                 font-serif text-gray-500 font-light mb-2 text-balance recoleta-font"
        >
          {{ currentNode.subtitle }}
        </p>
      </div>
    </Transition>
  </div>

  <!-- Buttons -->
  <div class="flex flex-wrap justify-center gap-4 w-full max-w-8xl mt-32 sm:mt-48 md:mt-60">
    <div
      v-for="button in currentNode.buttons"
      :key="button.id"
      class="flex-shrink-0"
    >
      <button
        @click="handleButtonClick(button.nextNodeId)"
        class="rounded-full font-semibold
               text-base sm:text-lg md:text-xl lg:text-2xl
               px-4 sm:px-5 md:px-6
               py-3 sm:py-3.5 md:py-4
               text-center btn-ani"
      >
        {{ button.label }}
      </button>
    </div>
  </div>

  <!-- Reset button -->
  <button
    v-if="canReset"
    @click="resetConversation"
    class="mt-4 px-6 py-3 border border-white text-white rounded-full 
           hover:bg-white/10 transition-colors duration-200 self-start"
  >
    Start Over
  </button>
</div>

</template>

<script setup>
import { ref, computed } from "vue";
import { conversationTree } from "./TavIntro/conversationTree.js";

const currentNodeId = ref("start");

const currentNode = computed(() => {
  return conversationTree[currentNodeId.value];
});

const canReset = computed(() => {
  return currentNodeId.value !== "start";
});

const handleButtonClick = (nextNodeId) => {
  currentNodeId.value = nextNodeId;
};

const resetConversation = () => {
  currentNodeId.value = "start";
};
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
</style>
