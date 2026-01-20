<template>
  <div class=" bg-black text-white py-20">
    <div class="mx-auto relative">

      <!-- Vertical line -->
      <div
        class="absolute left-[1.3rem] top-0 w-0.5 bg-white/100"
        :style="{ height: lineHeight + 'px' }"
      ></div>

      <div
        v-for="(item, idx) in timeline"
        :key="item.year"
        class="flex gap-10 mb-14 relative text-[16px]"
        ref="rows"
      >
        <!-- Year bubble -->
        <div class="relative z-10">
          <div
            class="year-bubble w-11 h-8 rounded-full bg-white text-black flex items-center justify-center text-[14px] satoshi font-bold"
          >
            {{ item.year }}
          </div>
        </div>

        <!-- Content -->
        <div class="">
          <h3 class="text-[clamp(14px,4vw,24px)] inter font-bold">{{ item.title }}</h3>
          <p class="mt-2 text-[#71717A] leading-relaxed text-[clamp(12px,2vw,20px)] inter font-bold">
            {{ item.description }}
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";

const timeline = [
  {
    year: 2025,
    title: "Led UX for Enterprise Platform – Luma Health",
    description:
      "Redesigned internal SaaS tools supporting 50K+ users, improving workflow efficiency and task completion rates by 45%. Led AI-driven initiatives to simplify testing and accelerate product implementation.",
  },
  {
    year: 2024,
    title:
      "Enhanced Accessibility and Design Consistency – Santander (Accenture Client)",
    description:
      "Collaborated with cross-functional squads to implement the Global Design System in Brazil. Improved information architecture and user experience for the Santander app, and led the creation of a white-label accessibility guide recognized internally as a best-practice reference.",
  },
  {
    year: 2023,
    title:
      "Designed key website sections and conducted usability tests – Nubank (Accenture Client)",
    description:
      "Designed multiple core pages and conducted usability tests that guided the work of 15+ designers. Delivered a cohesive navigation structure and improved content alignment, shaping a stronger foundation for the product’s next phase.",
  },
  {
    year: 2022,
    title:
      "Redesigned the whole acquisition experience for Vivo (Accenture Client)",
    description:
      "Partnered with Vivo’s design lead to merge 7 fragmented checkout flows into a single, scalable experience. The new journey streamlined the purchase process for digital services and improved business efficiency with automation and consistency.",
  },
  {
    year: 2021,
    title:
      "Joined Accenture and Launched a B2B SaaS Portal – Vivo (Accenture Client)",
    description:
      "Joined Accenture’s design team and delivered a new B2B SaaS portal for Vivo, enabling clients to explore and manage enterprise service solutions with improved usability and scalability.",
  },
];

const rows = ref([]);
const lineHeight = ref(0);

onMounted(async () => {
  await nextTick();
  const lastRow = rows.value[rows.value.length - 1];
  if (lastRow) {
    const bubble = lastRow.querySelector(".year-bubble");
    const containerTop = lastRow.parentElement.getBoundingClientRect().top;
    const bubbleTop = bubble.getBoundingClientRect().top;
    const bubbleHeight = bubble.offsetHeight;
    lineHeight.value = bubbleTop - containerTop + bubbleHeight / 2;
  }
});
</script>
