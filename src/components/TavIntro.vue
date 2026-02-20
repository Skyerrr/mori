<template>
  <section
    class=" bg-black text-white flex flex-col relative"
  >
    <!-- Editorial Margins -->
    <div class="relative">
      <EditorialMargins />
    </div>

    <div class="flex-1 px-8 md:px-16 py-12 relative">
      <div
        class="max-w-[1440px] mx-auto h-full flex flex-col justify-center relative"
      >
<!-- RIGHT METADATA -->
<div class="hidden md:inline-flex absolute right-10 top-0 items-start">

  <div class="meta-line"></div>

  <div class="vertical-meta">
    INTERACTIVE DIALOGUE SYSTEM — TAV'S MIND GARDEN — EST. 2025
  </div>

</div>

        <!-- Issue -->
        <Motion
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 1, delay: 0.3 }"
          class="text-gray-600 mb-10 tracking-widest text-xs"
        >
          PORTFOLIO 2025 — ISSUE Nº 01
        </Motion>

        <!-- Headline -->
        <Motion
          :initial="{ opacity: 0, y: 30 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 1, delay: 0.1 }"
          class="mb-12"
        >
          <h1
            class="leading-none"
            style="
              font-family: &quot;Playfair Display&quot;;
              font-size: clamp(4.5rem, 14vw, 13rem);
              line-height: 0.85;
            "
          >
            Hey I'm <br />
            <span class="italic">Tav</span>
          </h1>
        </Motion>

        <!-- Conversation -->
        <div class="max-w-4xl">
          <div class="mb-8 border-l-[3px] border-gray-800 pl-6">
            <div
              v-if="currentNode.subtitle"
              class="text-gray-600 mb-3 text-xs tracking-wider uppercase"
            >
              {{ currentNode.subtitle }}
            </div>

            <div
              class="text-gray-200 leading-relaxed"
              style="font-size: clamp(1.25rem, 2.8vw, 1.75rem)"
              v-html="isComplete ? currentNode.response : displayedText"
            />
          </div>

          <!-- Buttons -->
          <Motion
            :key="conversationStage"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.2 }"
            class="flex flex-wrap gap-3"
          >
            <Motion
              v-for="(button, index) in currentNode.buttons"
              :key="button.id || index"
              tag="button"
              @click="handleButtonClick(button)"
              :while-hover="{ scale: 1.02 }"
              :while-tap="{ scale: 0.98 }"
              :disabled="isTransitioning"
              class="px-5 py-3 border border-gray-800 hover:border-gray-600 transition-all duration-300 bg-transparent disabled:opacity-50"
            >
              {{ button.label }}
            </Motion>
          </Motion>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch, onBeforeUnmount } from "vue";
import { Motion } from "motion-v";
import { conversationTree } from "./TavIntro/conversationTree.js";
import EditorialMargins from "./TavIntro/EditorialMargins.vue";

/* ---------------------------
   STATE
----------------------------*/

const conversationStage = ref("start");
const isTransitioning = ref(false);

const fallbackNode = {
  response: "",
  subtitle: "",
  buttons: [],
};

const currentNode = computed(() => {
  return conversationTree[conversationStage.value] || fallbackNode;
});

/* ---------------------------
   TYPING EFFECT
----------------------------*/

const displayedText = ref("");
const isComplete = ref(false);

let typingInterval = null;

function startTyping(text, speed = 15) {
  if (typingInterval) clearInterval(typingInterval);

  displayedText.value = "";
  isComplete.value = false;

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = text;
  const plainText = tempDiv.textContent || "";

  let index = 0;

  typingInterval = setInterval(() => {
    if (index < plainText.length) {
      displayedText.value = plainText.slice(0, index + 1);
      index++;
    } else {
      isComplete.value = true;
      clearInterval(typingInterval);
    }
  }, speed);
}

watch(
  () => currentNode.value.response,
  (newText) => {
    if (!newText) return;
    startTyping(newText);
  },
  { immediate: true },
);

onBeforeUnmount(() => {
  if (typingInterval) clearInterval(typingInterval);
});

/* ---------------------------
   SCROLL HELPER
----------------------------*/

function scrollToTarget(targetId, offset = 0) {
  const el = document.getElementById(targetId);
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.pageYOffset + offset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
}

/* ---------------------------
   BUTTON HANDLER
----------------------------*/

function handleButtonClick(button) {
  if (button.onClick) {
    button.onClick();
    return;
  }

  if (button.nextNodeId) {
    if (!conversationTree[button.nextNodeId]) return;

    isTransitioning.value = true;
    conversationStage.value = button.nextNodeId;

    setTimeout(() => {
      isTransitioning.value = false;
    }, 150);
  }
}
</script>

<style scoped>
.meta-line {
  width: 1px;
  background: #4A5565;
  margin-right: 8px;

  align-self: stretch;   /* THIS is the key */
}

.vertical-meta {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  direction: rtl;

  font-family: 'Inter', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.22em;
  color: #ffffff;

  white-space: nowrap;

  opacity: 0;
  animation: fadeInMeta 1s ease forwards;
  animation-delay: 0.8s;
}

@keyframes fadeInMeta {
  to {
    opacity: 1;
  }
}
</style>
