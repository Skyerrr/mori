<script setup>
import { Motion } from "motion-v"
</script>

<template>
  <section
    id="work"
    class="bg-black text-white px-8 relative mb-16 sm:mb-0"
  >
    <div class="max-w-[1600px] mx-auto">

      <!-- Section Header -->
      <Motion
        as="div"
        :initial="{ opacity: 0, y: 40 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, ease: 'easeOut' }"
        class="grid md:grid-cols-12 gap-12 mb-16 md:mb-20"
      >
        <!-- Left Label -->
        <div class="md:col-span-1">
          <div
            class="tracking-widest"
            style="
              font-family: Inter, sans-serif;
              font-size: 0.7rem;
              letter-spacing: 0.15em;
              color: #aaaaaa;
            "
          >
            WORK
          </div>
        </div>

        <!-- Main Heading -->
        <div class="md:col-span-7">
          <h2
            class="mb-6 whitespace-normal md:whitespace-nowrap"
            style="
              font-family: Recoleta, serif;
              font-size: clamp(2rem, 5vw, 4.5rem);
              font-weight: 500;
              line-height: 1.1;
              letter-spacing: -0.02em;
            "
          >
            Some memorable cases that I love
          </h2>

          <p
            class="border-l-2 border-gray-900 pl-6"
            style="
              font-family: Inter, sans-serif;
              font-size: 20px;
              line-height: 1.7;
              letter-spacing: 0.01em;
              max-width: 800px;
              color: #aaaaaa;
            "
          >
            Grounded in research, guided by storytelling, built to feel natural.
          </p>
        </div>

        <!-- Empty Right Column -->
        <div class="hidden md:flex md:col-span-4 flex-col items-end justify-between">
        </div>
      </Motion>


    </div>
  </section>
</template>