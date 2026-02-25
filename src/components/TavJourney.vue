<template>
  <section id="about" class="min-h-screen bg-black text-white px-8 md:px-16">
    <div class="max-w-[1440px] mx-auto">
      <!-- SECTION HEADER -->
      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8 }"
        :viewport="{ once: true }"
        class="grid md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-32"
      >
        <div class="md:col-span-1">
          <div
            class="tracking-widest text-[#aaaaaa] text-[0.7rem] uppercase"
            style="letter-spacing: 0.15em"
          >
            JOURNEY
          </div>
        </div>

        <div class="md:col-span-11">
          <h2
            class="mb-8 font-medium"
            style="
              font-family: Recoleta, serif;
              font-size: clamp(2.5rem, 6vw, 5rem);
              line-height: 1.1;
              letter-spacing: -0.02em;
            "
          >
            Career moments that shaped me
          </h2>

          <p
            class="max-w-2xl border-l-2 border-gray-900 pl-6 text-[#aaaaaa]"
            style="font-size: 20px; line-height: 1.7"
          >
            The kind of work that changed how I think, not just what I make.
          </p>
        </div>
      </Motion>

      <!-- METRICS -->
      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, delay: 0.2 }"
        :viewport="{ once: true }"
        class="grid md:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-0 pb-6 md:pb-12"
      >
        <div class="md:col-span-1"></div>

        <div class="md:col-span-11 grid grid-cols-2 md:grid-cols-4 gap-12">
          <div v-for="(metric, index) in metrics" :key="index">
            <div
              class="text-center"
              style="
                font-family:
                  Playfair Display,
                  serif;
                font-size: clamp(3rem, 5vw, 5rem);
                line-height: 1;
              "
            >
              {{ metric.value }}
            </div>

            <div
              class="uppercase tracking-wider text-[#aaaaaa] text-[0.7rem] mt-2 text-center"
            >
              {{ metric.label }}
            </div>
          </div>
        </div>
      </Motion>

      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, delay: 0.2 }"
        :viewport="{ once: true }"
      >
        <Images class="pb-12" />
      </Motion>

      <!-- TIMELINE -->
      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, delay: 0.4 }"
        :viewport="{ once: true }"
        class="space-y-12 md:space-y-16 pt-12 mb-12 md:mb-24"
      >
        <div
          v-for="(item, index) in timeline"
          :key="index"
          class="timeline-row grid md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-[#1F2937] last:border-0 group transition-all duration-500"
          :style="{ '--hover-color': item.color }"
        >
          <div class="md:col-span-1"></div>

          <!-- YEAR -->
          <div class="md:col-span-2">
            <div
              class="transition-colors duration-500 text-[#aaaaaa] group-hover:[color:var(--hover-color)]"
              style="
                font-family:
                  Playfair Display,
                  serif;
                font-size: 2rem;
              "
            >
              {{ item.year }}
            </div>
          </div>

          <!-- CONTENT -->
          <div class="md:col-span-9">
            <h3 class="text-white mb-3 text-[1.25rem] font-medium">
              {{ item.title }}
            </h3>

            <p
              v-if="item.company"
              class="mb-4 uppercase tracking-wider text-[0.7rem] transition-colors duration-500 text-[rgb(122,143,174)] group-hover:[color:var(--hover-color)]"
            >
              {{ item.company }}
            </p>

            <p class="text-[#7A8FAE] text-[0.95rem] leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </div>
      </Motion>

      <!-- DOWNLOAD BUTTON -->
      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8 }"
        :viewport="{ once: true }"
      >
        <div
          class="flex flex-wrap justify-start ml-2 md:ml-30 gap-4 w-full max-w-8xl"
        >
          <div class="flex-shrink-0">
            <a href="/RODRIGOTAVARESCV.pdf" download>
              <button
                class="py-3 px-6 rounded-full text-[16px] satoshi font-medium flex items-center justify-center text-center btn-ani-black cursor-pointer"
              >
                <Download class="w-5 h-5 mr-2" />
                DOWNLOAD RESUME
              </button>
            </a>
          </div>
        </div>
      </Motion>
    </div>
  </section>
</template>

<script setup>
import { Motion } from "motion-v";
import Images from "./TavJourney/Images.vue";
import { Download } from "lucide-vue-next";

const metrics = [
  { value: "14", label: "Launched products" },
  { value: "7", label: "Brand collaborations" },
  { value: "40+", label: "Users interviewed" },
  { value: "5+", label: "Years of experience" },
];

const timeline = [
  {
    year: "2025",
    title: "Led UX for Enterprise Platform – Luma Health",
    company: "Luma Health",
    description:
      "Designed internal tools and AI automation that reduced customer go-live time by 20%-30%, turning weeks-long setup steps into hours.",
    color: "#FF6B35",
  },
  {
    year: "2024",
    title:
      "Enhanced Accessibility and Design Consistency – Santander (Accenture Client)",
    company: "Santander (Accenture Client)",
    description:
      "Improved information architecture and user experience for the Santander app.",
    color: "#dc121a",
  },
  {
    year: "2023",
    title: "Designed key website sections – Nubank (Accenture Client)",
    company: "Nubank (Accenture Client)",
    description:
      "Designed core pages and conducted usability tests guiding 15+ designers.",
    color: "#820ad1",
  },
  {
    year: "2022",
    title: "Redesigned acquisition experience – Vivo (Accenture Client)",
    company: "Vivo (Accenture Client)",
    description:
      "Merged 7 fragmented checkout flows into a scalable experience.",
    color: "#660099",
  },
  {
    year: "2021",
    title: "Launched B2B SaaS Portal – Vivo (Accenture Client)",
    company: "Vivo (Accenture Client)",
    description:
      "Delivered a new enterprise SaaS portal with improved usability.",
    color: "#660099",
  },
];
</script>

<style scoped>
.timeline-row {
  position: relative;
}

/* Expands hover interaction area */
.timeline-row::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: -64px;
  bottom: -64px;
  pointer-events: auto;
}

/* Ensure content stays above pseudo element */
.timeline-row > * {
  position: relative;
  z-index: 1;
}
</style>
