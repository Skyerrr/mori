<template>
  <section id="work" class="bg-black text-white flex justify-center">
    <div
      class="flex flex-col gap-14 items-center w-full max-w-[clamp(320px,90vw,1280px)] px-2 "
    >
      <Motion
        v-for="(item, index) in cases"
        :key="item.slug"
        :initial="{ opacity: 0, y: 60 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }"
        :viewport="{ once: true, amount: 0.2 }"
       
        :inViewOptions="{ once: true }"
      >
        <a
          class="group relative flex justify-center w-full arrow-black-wrapper"
          :href="`${item.slug}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          <!-- Card wrapper -->
          <div class="relative w-full max-w-[clamp(320px,90vw,1280px)]">
            <!-- Border layer -->
            <div class="pointer-events-none absolute inset-0 rounded-[40px] z-20 ">
              <div
                :class="
                  item.hoverBorder +
                  ' h-full border-1  rounded-[40px] transition-all duration-300 '
                "
              ></div>
            </div>

            <!-- Card -->
            <div
              class="relative bg-black rounded-[40px] z-10 overflow-hidden flex flex-col lg:flex-row"
            >
              <div
                class="w-full lg:w-1/2 h-[284px] sm:h-[300px] lg:h-auto rounded-t-[40px] lg:rounded-tr-[40px] lg:rounded-br-[40px] overflow-hidden"
              >
                <img
                  :src="item.mobileImage"
                  :alt="item.subtitle"
                  class="w-full h-full object-cover"
                />
              </div>

              <!-- Content -->
              <div
                class="flex flex-col px-[clamp(16px,5vw,16px)] py-[clamp(16px,6vw,16px)] lg:w-1/2"
              >
                <div class="mb-4 ">
                  <p class="mb-2 text-[clamp(12px,1.5vw,16px)] text-[#AAAAAA]">
                    <span>{{ item.title }}</span>
                  </p>
                  <h2 :class="item.hoverText + ' text-[clamp(28px,3vw,48px)] recoleta'">
                    {{ item.subtitle }}
                  </h2>
                  <h2 :class="item.hoverText + ' text-[clamp(28px,3vw,48px)] recoleta'">
                    {{ item.subtitle2 }}
                  </h2>
                </div>

                <div class="flex flex-col gap-4 mb-10">
                  <div class="space-y-2 text-[#AAAAAA] text-[13px]">
                    <div v-for="(row, r) in item.tags" :key="r">
                      {{ row.join(" / ") }}
                    </div>
                  </div>

                  <div class="h-px bg-[#2e2e2e] mt-0"></div>

                  <div
                    v-if="item.stats"
                    class="mx-auto w-full max-w-[720px] flex justify-between gap-[clamp(16px,4vw,56px)]"
                  >
                    <div
                      v-for="stat in item.stats"
                      :key="stat.label"
                      class="flex flex-col items-center flex-1"
                    >
                      <div
                        class="flex items-baseline gap-1 text-[clamp(22px,3vw,40px)] satoshi font-normal leading-none"
                      >
                        <span v-if="stat.prefix">{{ stat.prefix }}</span>
                        <CountUpNumber :value="stat.value" />
                        <span v-if="stat.suffix">{{ stat.suffix }}</span>
                      </div>
                      <p
                        class="mt-1 text-[#A3A3A3] text-[clamp(12px,1vw,16px)] text-center whitespace-nowrap"
                      >
                        {{ stat.label }}
                      </p>
                    </div>
                  </div>
                </div>

                <a>
                  <button
                    :class="
                      item.hoverButton +
                      ' inline-flex w-fit mb-2 px-[24px] py-[12px] cursor-pointer rounded-full text-[16px] satoshi font-medium items-center justify-center btn-case'
                    "
                  >
                    View Case Study
                    <img
                      src="@/assets/image/Arrow.png"
                      class="ml-3 arrow-black"
                      alt="arrow-black"
                    />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </a>
      </Motion>
    </div>
  </section>
</template>

<script setup>
import CountUpNumber from "@/components/CountUpNumber.vue";
import cases from "@/components/TavWork/cases";
import { Motion } from "motion-v";

import { onMounted, nextTick, ref } from "vue";

const tagRefs = {};
const dotRefs = {};

const registerTag = (el, row, index) => {
  if (!el) return;
  tagRefs[`${row}-${index}`] = el;
};

const registerDot = (el, row, index) => {
  if (!el) return;
  dotRefs[`${row}-${index}`] = el;
};

const updateDots = () => {
  Object.keys(dotRefs).forEach((key) => {
    const tag = tagRefs[key];
    const nextTag =
      tagRefs[key.replace(/-(\d+)$/, (_, i) => `-${Number(i) + 1}`)];
    const dot = dotRefs[key];

    if (!tag || !nextTag || !dot) return;

    dot.style.display = tag.offsetTop === nextTag.offsetTop;
  });
};

onMounted(async () => {
  await nextTick();
  updateDots();
  window.addEventListener("resize", updateDots);
});
</script>

<style scoped>
.btn-case {
  color: black;
  transition:
    background-color 400ms ease,
    color 400ms ease;
}
</style>