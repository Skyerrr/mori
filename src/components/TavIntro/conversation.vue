<template>
<div class="flex flex-col min-h-screen lg:min-h-auto justify-evenly lg:justify-start">
  <div
    class="w-full relative mt-0 sm:mt-32 md:mt-32 lg:mt-40 2xl:mt-40 mb-10 sm:mb-28 md:mb-40 "
  >
    
      <div
        :key="currentNodeId"
        class="absolute top-0 right-0 text-right max-w-full md:max-w-8xl break-words"
      >
        <!-- Typed response -->
        <p
          class="text-[clamp(22px,4vw,64px)] text-white font-light mb-2 recoleta-font typing"
        >
          <span v-html="typedResponse"></span>
          <span v-if="isTyping" class="caret"></span>
        </p>

        <!-- Subtitle -->
        <p
          v-if="currentNode?.subtitle"
          class="text-[clamp(14px,3vw,36px)] text-gray-500 font-light mb-2 recoleta-font"
        >
          {{ currentNode.subtitle }}
        </p>
      </div>
    
  </div>

  <!-- Buttons -->
  <div
    class="flex flex-wrap justify-center gap-4 w-full max-w-8xl mt-0 sm:mt-0 md:mt-0 lg:mt-48"
  >
<div
  v-for="button in currentNode?.buttons || []"
  :key="button.id"
  class="flex-shrink-0"
>
  <button
    @click="handleButtonClick(button)"
    :disabled="isTyping"
    class="
      rounded-full font-semibold
      text-base sm:text-lg md:text-xl lg:text-2xl
      px-4 sm:px-5 md:px-6
      py-3 sm:py-3.5 md:py-4

      /* 👇 ONLY when height ≤ 668px */
      [@media(max-height:668px)]:text-sm
      [@media(max-height:668px)]:px-3
      [@media(max-height:668px)]:py-2

      btn-ani cursor-pointer
      disabled:opacity-40 disabled:pointer-events-none
    "
  >
    {{ button.label }}
  </button>
</div>
  </div>

  <!-- Reset -->
  <!-- <button
    v-if="canReset"
    @click="resetConversation"
    class="mt-4 px-6 border border-white text-white rounded-full hover:bg-white/10 self-start"
  >
    Start Over
  </button> -->
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue"
import { conversationTree } from "./conversationTree.js"

const currentNodeId = ref("start")
const currentNode = computed(() => conversationTree[currentNodeId.value])

const typedResponse = ref("")
const isTyping = ref(false)

const canReset = computed(() => currentNodeId.value !== "start")

/**
 * Typing engine that supports HTML, links and images
 */
const typeText = async (html, speed = 20) => {
  isTyping.value = true
  typedResponse.value = ""

  let i = 0
  let isTag = false
  let tagBuffer = ""

  while (i < html.length) {
    const char = html[i]

    // start of tag
    if (char === "<") {
      isTag = true
      tagBuffer = char
      i++
      continue
    }

    // inside tag
    if (isTag) {
      tagBuffer += char

      if (char === ">") {
        // inject full tag at once
        typedResponse.value += tagBuffer
        tagBuffer = ""
        isTag = false
        await new Promise((r) => setTimeout(r, speed))
      }

      i++
      continue
    }

    // normal text → type char by char
    typedResponse.value += char
    i++
    await new Promise((r) => setTimeout(r, speed))
  }

  isTyping.value = false
}

// Re-run typing when response changes
watch(
  () => currentNode.value?.response,
  (newText) => {
    if (newText) typeText(newText)
  },
  { immediate: true }
)

const handleButtonClick = (button) => {
  // Custom click (scrollButton)
  if (button.onClick) {
    button.onClick()
    return
  }

  // Normal conversation navigation
  if (button.nextNodeId) {
    currentNodeId.value = button.nextNodeId
  }
}

const resetConversation = () => {
  currentNodeId.value = "start"
}
</script>

<style scoped>
/* Transition */
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

/* Typing */
.typing {
  white-space: pre-wrap;
}

.caret {
  display: inline-block;
  width: 2px;
  height: 1em;
  margin-left: 2px;
  background: white;
  animation: blink 0.8s steps(1) infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

/* 4K scaling */
@media (min-width: 1921px) {
  .scale-4k {
    transform: scale(calc(1000vw / 1920));
    transform-origin: top center;
  }
}
</style>
