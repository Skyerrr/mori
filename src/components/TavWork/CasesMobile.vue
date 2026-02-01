<template>
  <section id="work" class="bg-black text-white flex justify-center">
    <div
      class="flex flex-col gap-14 items-center w-full max-w-[clamp(320px,90vw,1280px)]"
    >
      <a
        v-for="item in cases"
        :key="item.slug"
        class="group relative flex justify-center w-full arrow-black-wrapper"
        :href="`${item.slug}`"
        target="_blank"
        rel="noopener noreferrer"
      >
        <!-- Card wrapper -->
        <div class="relative w-full max-w-[clamp(320px,90vw,1280px)]">
          <!-- Border layer -->
          <div class="pointer-events-none absolute inset-0 rounded-[40px] z-20">
            <div
              :class="
                item.hoverBorder +
                ' h-full border-t-2 border-l-2 border-b-2 border-transparent rounded-[40px] transition-all duration-300'
              "
            ></div>
          </div>

          <!-- Card -->
          <div
            class="relative bg-[#171717] rounded-[40px] z-10 overflow-hidden flex flex-col lg:flex-row"
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
              class="flex flex-col px-[clamp(24px,5vw,80px)] py-[clamp(24px,6vw,80px)] lg:w-1/2"
            >
              <div class="mb-4">
                <p class="mb-2 text-[clamp(16px,1.5vw,24px)]">
                  <span :class="item.hoverText">{{ item.title }}</span>
                </p>
                <h2 class="text-[clamp(28px,3vw,48px)]">
                  {{ item.subtitle }}
                </h2>
              </div>

              <div class="flex flex-col gap-4 mb-10">
                <div
                  v-for="(row, rIndex) in item.tags"
                  :key="rIndex"
                  class="flex flex-wrap gap-[clamp(1px,1.5vw,12px)]"
                  ref="rows"
                >
                  <template v-for="(tag, tIndex) in row" :key="tag">
                    <span
                      :ref="(el) => registerTag(el, rIndex, tIndex)"
                      :class="
                        item.hoverBorder +
                        ' px-2 max-[361px]:px-1.5 py-1.5 border border-[#2e2e2e] rounded-full text-zinc-300 bg-[#171717] text-[clamp(12px,2.2vw,16px)]'
                      "
                    >
                      {{ tag }}
                    </span>

                    <span
                      v-if="tIndex < row.length - 1"
                      :ref="(el) => registerDot(el, rIndex, tIndex)"
                      :class="item.dotColor + ' mt-2 '"
                    >
                      ·
                    </span>
                  </template>
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

              <a
                href="https://www.linkedin.com/in/rodrigotavr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  :class="
                    item.hoverButton +
                    ' inline-flex w-fit px-[24px] py-[12px] rounded-full text-[16px] satoshi font-medium items-center justify-center btn-case'
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
    </div>
  </section>
</template>

<script setup>
import CountUpNumber from "@/components/CountUpNumber.vue";
import cases from "@/components/TavWork/cases";

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
