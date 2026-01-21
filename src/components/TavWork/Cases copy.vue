<template>
  <section id="work" class="bg-black text-white mx-auto flex justify-center">
    <div class="flex flex-col gap-14 items-center px-[clamp(16px,5vw,120px)] w-full">
      <a
        v-for="item in cases"
        :key="item.slug"
        class="group relative rounded-[40px] flex justify-center w-full"
        :href="`/${item.slug}`"
      >
        <!-- Border layer -->
        <div
          class="absolute top-[-1px] bottom-[-1px] left-[-1px] m-[1px]
                 w-[52%] rounded-tl-[40px] rounded-bl-[40px]
                 border-t border-l border-b border-transparent
                 group-hover:border-blue-500 transition pointer-events-none"
        ></div>

        <!-- Content layer -->
        <div
          class="grid lg:grid-cols-2 items-start bg-[#171717] rounded-[40px]
                 w-full max-w-[clamp(320px,90vw,1280px)]"
        >
          <!-- Left -->
          <div
            class="flex flex-col px-[clamp(24px,5vw,80px)] py-[clamp(24px,6vw,80px)]"
          >
            <!-- Title -->
            <div class="mb-8">
              <p
                class="satoshi font-normal mb-2 text-[clamp(16px,1.5vw,24px)] leading-[1.3]"
              >
                {{ item.title }}
              </p>
              <h2
                class="satoshi font-normal text-[clamp(28px,3vw,48px)] leading-[1.3]"
              >
                {{ item.subtitle }}
              </h2>
            </div>

            <!-- Tags -->
            <div class="flex flex-col gap-4 mb-10">
              <div
                v-for="(row, rIndex) in item.tags"
                :key="rIndex"
                class="flex flex-wrap items-center gap-3"
              >
                <template v-for="(tag, tIndex) in row" :key="tag">
                  <span
                    class="px-4 py-1.5 satoshi font-normal border border-[#2e2e2e]
                           rounded-full text-zinc-300 bg-[#171717]
                           text-[clamp(12px,1vw,16px)]"
                  >
                    {{ tag }}
                  </span>
                  <span
                    v-if="tIndex < row.length - 1"
                    class="text-teal-500 text-lg leading-none"
                  >
                    ·
                  </span>
                </template>
              </div>

              <!-- Divider -->
              <div class="h-px bg-[#2e2e2e] mt-12"></div>

              <!-- Stats -->
              <div
                v-if="item.stats"
                class="flex gap-[clamp(24px,4vw,72px)]"
              >
                <div
                  v-for="stat in item.stats"
                  :key="stat.label"
                  class="flex flex-col items-center"
                >
                  <div
                    class="flex items-center satoshi font-normal
                           text-[clamp(22px,3vw,40px)]"
                  >
                    <span v-if="stat.prefix">{{ stat.prefix }}</span>
                    <span>{{ stat.value }}</span>
                    <span v-if="stat.suffix">{{ stat.suffix }}</span>
                  </div>
                  <p
                    class="text-center satoshi font-normal text-[#A3A3A3]
                           text-[clamp(12px,1vw,16px)]"
                  >
                    {{ stat.label }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Button -->
            <button
              class="inline-flex w-fit px-[24px] py-[16px] gap-2
                     rounded-full bg-gradient-to-br from-blue-800 to-teal-600
                     font-semibold items-center justify-center
                     transition hover:scale-[1.02]"
              :aria-label="`View case study: ${item.title}`"
            >
              View Case Study
              <span>→</span>
            </button>
          </div>

          <!-- Right -->
          <div class="rounded-tr-[32px] rounded-br-[32px] overflow-hidden">
            <img
              :src="item.image"
              :alt="item.subtitle"
              class="w-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
const cases = [
  {
    slug: "vivo",
    title: "Vivo",
    subtitle: "Unifying Product Acquisition Flow",
    tags: [
      ["Health / EdTech", "B2C SaaS", "Startup"],
      ["iOS", "Product Design", "AI Content"],
    ],
    stats: [
      { prefix: "x", value: "7", label: "Flows unified" },
      { value: "15", label: "Designers project" },
      { value: "87", label: "Usability score" },
    ],
    image: "/src/assets/image/mock.jpg",
  },
  {
    slug: "webquiz",
    title: "WebQuiz",
    subtitle: "Join the Brain Geek Paradise",
    tags: [
      ["Web & Mobile", "User Research"],
      ["Trivia", "B2C", "Startup", "CJM"],
      ["Product Design", "Product Management"],
    ],
    stats: [
      { prefix: "x", value: "7", label: "Flows unified" },
      { value: "15", label: "Designers project" },
      { value: "87", label: "Usability score" },
    ],
    image: "/src/assets/image/mock.jpg",
  },
];
</script>
