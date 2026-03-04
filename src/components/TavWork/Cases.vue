<template>
  <div class="space-y-16">
    <Motion
      v-for="(item, index) in cases"
      :key="index"
      :initial="{ opacity: 0, y: 60 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }"
      :viewport="{ once: true, amount: 0.2 }"
      :inViewOptions="{ once: true }"
    >
      <a
        :href="item.slug"
        target="_blank"
        class="group block relative transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.015]"
      >
        <!-- DESKTOP -->
        <div
          class="hidden lg:grid lg:grid-cols-2 bg-black rounded-[48px] overflow-hidden relative"
        >
          <!-- LEFT CONTENT -->
          <div class="py-[80px] pl-[80px] pr-[80px] space-y-8">
            <div>
              <p class="text-[#AAAAAA] text-[16px] mb-5">
                {{ item.title }}
              </p>

              <span :class="['text-[48px] recoleta', item.hoverText]">
                {{ item.subtitle }}
              </span>

              <span
                v-if="item.subtitle2"
                :class="['text-[48px] recoleta', item.hoverText]"
              >
                <br />
                {{ item.subtitle2 }}
              </span>
            </div>

            <!-- TAGS -->
            <div class="space-y-2 text-[#AAAAAA] text-[14px]">
              <div v-for="(row, r) in item.tags" :key="r">
                {{ row.join(" / ") }}
              </div>
            </div>

            <!-- DIVIDER -->
            <div class="border-t border-[#464646] mb-6" />

            <!-- STATS -->
            <div class="flex justify-between">
              <div
                v-for="(stat, s) in item.stats"
                :key="s"
                class="pl-4 border-l-2 border-[#71717A]"
                :class="item.hoverBorder"
              >
                <p class="text-[40px] text-white mb-1 recoleta">
                  {{ stat.prefix || "" }}
                  <CountUpNumber :value="stat.value" />
                  {{ stat.suffix || "" }}
                </p>
                <p class="text-[11px] uppercase text-[#AAAAAA]">
                  {{ stat.label }}
                </p>
              </div>
            </div>

            <!-- BUTTON -->
            <div
              class="px-8 py-3 rounded-full border inline-block cursor-pointer"
              :class="item.hoverButton"
            >
              <span class="text-[16px] leading-[20px]"> View Case Study </span>
            </div>
          </div>

          <!-- RIGHT IMAGE -->
          <div class="bg-[#f6f1e8] overflow-hidden">
            <img
              :src="item.image"
              class="w-full h-full object-cover transition-transform duration-300 ease-out"
            />
          </div>

          <!-- BORDER -->
          <div
            class="absolute inset-0 border-2 rounded-[48px] pointer-events-none transition-colors duration-300"
            :class="item.hoverBorder"
          />
        </div>

        <!-- MOBILE -->
        <div class="lg:hidden rounded-[24px] overflow-hidden bg-black">
          <div class="overflow-hidden">
            <img
              :src="item.mobileImage"
              class="w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
          </div>

          <div class="p-6 space-y-6">
            <p class="text-gray-400 text-sm">
              {{ item.title }}
            </p>

            <p class="text-2xl" :class="item.hoverText">
              {{ item.subtitle }}
            </p>

            <div class="space-y-1 text-gray-400 text-sm">
              <div v-for="(row, r) in item.tags" :key="r">
                {{ row.join(" / ") }}
              </div>
            </div>

            <div class="flex justify-between border-t border-gray-700 pt-6">
              <div v-for="(stat, s) in item.stats" :key="s" class="text-center">
                <p class="text-xl text-white">
                  {{ stat.prefix || "" }}
                  <CountUpNumber :value="stat.value" />
                  {{ stat.suffix || "" }}
                </p>
                <p class="text-xs text-gray-400">
                  {{ stat.label }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Motion>
  </div>
</template>

<script setup>
import cases from "@/components/TavWork/cases";
import CountUpNumber from "@/components/CountUpNumber.vue";
import { Motion } from "motion-v";
</script>
