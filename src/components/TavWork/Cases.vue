<template>
  <section id="work" class="bg-black text-white flex justify-center">
    <div
      class="flex flex-col gap-14 items-center w-full max-w-[clamp(320px,90vw,1280px)]"
    >
      <a
        v-for="item in cases"
        :key="item.slug"
        class="group relative flex justify-center w-full arrow-black-wrapper"
        :href="`/${item.slug}`"
      >
        <!-- Card wrapper -->
        <div class="relative w-full max-w-[clamp(320px,90vw,1280px)]">
          <!-- Border layer -->
          <div class="pointer-events-none absolute inset-0 rounded-[40px] z-20">
            <div
              :class="
                item.hoverBorder +
                ' h-full  border-2 border-transparent rounded-[40px] rounded-bl-[40px] transition-all duration-300'
              "
            ></div>
          </div>

          <!-- Card -->
          <div
            class="relative bg-[#171717] rounded-[40px] z-10 overflow-hidden"
          >
            <!-- Left content -->
            <div
              class="flex flex-col px-[clamp(24px,5vw,80px)] py-[clamp(24px,6vw,80px)] lg:w-1/2"
            >
              <div class="mb-8">
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
                  class="flex flex-wrap gap-3"
                >
                  <template v-for="(tag, tIndex) in row" :key="tag">
                    <span
                      :class="
                        item.hoverBorder +
                        ' px-4 py-1.5 border border-[#2e2e2e] rounded-full text-zinc-300 bg-[#171717] text-[clamp(12px,1vw,16px)]'
                      "
                    >
                      {{ tag }}
                    </span>
                    <span
                      v-if="tIndex < row.length - 1"
                      :class="item.dotColor + ' mt-2'"
                      >·</span
                    >
                  </template>
                </div>

                <div class="h-px bg-[#2e2e2e] mt-6"></div>

<div
  v-if="item.stats"
  class="mx-auto w-full max-w-[720px] flex justify-between gap-[clamp(16px,4vw,56px)]"
>
  <div
    v-for="stat in item.stats"
    :key="stat.label"
    class="flex flex-col items-center flex-1"
  >
    <!-- Number -->
    <div
      class="flex items-baseline gap-1 text-[clamp(22px,3vw,40px)] satoshi font-normal leading-none"
    >
      <span v-if="stat.prefix">{{ stat.prefix }}</span>
      <CountUpNumber :value="stat.value" />
      <span v-if="stat.suffix">{{ stat.suffix }}</span>
    </div>

    <!-- Label -->
<p
  class="mt-1 text-[#A3A3A3] text-[clamp(12px,1vw,16px)]
         text-center whitespace-nowrap"
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
                  @click=""
                  :class="
                    item.hoverButton +
                    ' bg-white inline-flex w-fit px-[24px] py-[12px] rounded-full text-[16px] satoshi font-medium flex items-center justify-center text-center btn-case'
                  "
                >
                  View Case Study
                  <img
                    src="/src/assets/image/Arrow.png"
                    class="ml-3 arrow-black"
                    alt="arrow-black"
                  />
                </button>
              </a>
            </div>

            <!-- Image -->
            <div
              class="hidden lg:block absolute top-0 right-0 bottom-0 w-1/2 rounded-tr-[40px] rounded-br-[40px] overflow-hidden z-0"
            >
              <img
                :src="item.image"
                :alt="item.subtitle"
                class="w-full h-full object-cover"
              />
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
</script>

<style scoped>
.btn-case {
  color: black;
  transition:
    background-color 400ms ease,
    color 400ms ease;
}
</style>
