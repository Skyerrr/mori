<template>
  <section class="bg-black text-white flex flex-col relative">
    <div class="flex-1 px-8 md:px-0 py-0 md:py-12 relative">
      <div class="max-w-[1600px] mx-auto h-full flex flex-col justify-center relative">

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
          class="text-[#aaaaaa] mb-10 tracking-widest text-xs "
        >
          PORTFOLIO 2025 — ISSUE Nº 01
        </Motion>

        <!-- Headline -->
        <Motion
          :initial="{ opacity: 0, y: 30 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 1, delay: 0.8 }"
          class="mb-12"
        >
          <h1
            class="leading-none"
            style="
              font-family: Recoleta;
              font-size: clamp(4.5rem, 14vw, 13rem);
              line-height: 0.85;
            "
          >
            Hey I'm <br />
            <span>Tav</span>
          </h1>
        </Motion>

        <!-- Conversation -->
        <div class="max-w-4xl">

          <div class="mb-8 flex items-start gap-6">

            <!-- Dynamic Vertical Line -->
            <div
              class="w-[3px] bg-[#1F2937] transition-all duration-200"
              :style="{ height: lineHeight + 'px' }"
            ></div>

            <div class="flex-1 relative">

              <!-- Subtitle -->
              <div
                v-if="currentNode.subtitle"
                class="text-gray-600 mb-3 text-xs tracking-wider uppercase"
              >
                {{ currentNode.subtitle }}
              </div>

              <!-- Hidden Measurer -->
              <div
                ref="measureEl"
                class="absolute invisible pointer-events-none whitespace-pre-wrap"
                style="
                  font-size: clamp(1.25rem, 2.8vw, 1.75rem);
                  line-height: 1.625;
                  width: 100%;
                "
                v-html="isComplete ? currentNode.response : displayedText"
              ></div>

              <!-- Fixed 3-Line Container -->
              <div
                class="text-gray-200 leading-relaxed overflow-hidden whitespace-pre-wrap satoshi"
                style="
                  font-size: clamp(1.25rem, 2.8vw, 1.75rem);
                  height: calc(1.625em * 3);
                "
                v-html="isComplete ? currentNode.response : displayedText"
              ></div>

            </div>
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
              class="px-4 py-3 md:px-6 md:py-4 border-2 rounded-full border-[#464646] hover:border-[#9ca3af] transition-all duration-300 bg-transparent disabled:opacity-50 cursor-pointer disabled:pointer-events-none text-sm sm:text-base"
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
import { ref, computed, watch, onBeforeUnmount, nextTick } from "vue";
import { Motion } from "motion-v";
import { conversationTree } from "./TavIntro/conversationTree.js";

/* ---------------- STATE ---------------- */

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

/* ---------------- TYPING ---------------- */

const displayedText = ref("");
const isComplete = ref(false);
let typingInterval = null;

/* ---------------- LINE HEIGHT ---------------- */

const measureEl = ref(null);
const lineHeight = ref(0);

function updateLineHeight() {
  if (!measureEl.value) return;

  const naturalHeight = measureEl.value.offsetHeight;
  const computed = getComputedStyle(measureEl.value);
  const singleLine = parseFloat(computed.lineHeight);
  const maxHeight = singleLine * 3;

  lineHeight.value = Math.min(naturalHeight, maxHeight);
}

/* ---------------- TYPING FUNCTION ---------------- */

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
      nextTick(updateLineHeight);
    } else {
      isComplete.value = true;
      clearInterval(typingInterval);
      nextTick(updateLineHeight);
    }
  }, speed);
}

watch(
  () => currentNode.value.response,
  (newText) => {
    if (!newText) return;
    startTyping(newText);
  },
  { immediate: true }
);

onBeforeUnmount(() => {
  if (typingInterval) clearInterval(typingInterval);
});

/* ---------------- BUTTON HANDLER ---------------- */

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
  background: #aaaaaa;
  margin-right: 8px;
  align-self: stretch;
}

.vertical-meta {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  direction: rtl;
  font-family: "Inter", sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.22em;
  color: #aaaaaa;
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