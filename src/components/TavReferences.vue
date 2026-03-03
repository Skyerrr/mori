<template>
  <section class="bg-black text-white px-8 md:px-16 overflow-hidden">
    <div
      class="max-w-[1600px] mx-auto flex flex-col w-full testimonials-container ,"
    >
      <!-- Section Header - Editorial -->
      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :viewport="{ once: true }"
        :transition="{ duration: 0.8 }"
        class="grid md:grid-cols-12 gap-6 md:gap-12 mb-8 md:mb-12 flex-shrink-0"
      >
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
            REVIEWS
          </div>
        </div>

        <div class="md:col-span-11">
          <h2
            class="mb-4 md:mb-8"
            style="
              font-family: Recoleta, serif;
              font-size: clamp(2rem, 6vw, 5rem);
              font-weight: 500;
              line-height: 1.1;
              letter-spacing: -0.02em;
            "
          >
            Peers & Clients reviews
          </h2>

          <p
            class="max-w-xs md:max-w-2xl border-l-2 border-gray-900 pl-6"
            style="
              font-family: Inter, sans-serif;
              font-size: 20px;
              line-height: 1.7;
              letter-spacing: 0.01em;
              color: #aaaaaa;
            "
          >
            Reflections from those I've designed, built, and learned with.
          </p>
        </div>
      </Motion>

      <!-- CAROUSEL -->
      <div
        ref="container"
        class="overflow-hidden relative w-full mt-12"
        @mouseenter="hovering = true"
        @mouseleave="hovering = false"
      >
        <div
          ref="track"
          class="flex items-stretch"
          :style="{
            gap: gap + 'px',
            transform: `translate3d(${-offset}px, 0, 0)`,
          }"
        >
          <div
            v-for="(t, i) in renderedTestimonials"
            :key="i"
            class="rounded-[48px] border-2 border-[#464646] hover:border-[#666] transition-all duration-300 flex-shrink-0"
            :style="cardStyle"
          >
            <div>
              <div class="flex items-start gap-4 mb-6">
                <div
                  class="w-[60px] h-[60px]  shrink-0 rounded-full overflow-hidden border-2 border-[#464646]"
                >
                  <img :src="t.avatar" class="w-full h-full object-cover" />
                </div>

                <div>
                  <h3 class="font-semibold text-[1.1rem] text-white">
                    {{ t.name }}
                  </h3>
                  <p
                    class="uppercase text-[0.7rem] tracking-widest text-[#71717a]"
                  >
                    {{ t.role }}
                  </p>
                </div>
              </div>

              <div class="h-[1px] bg-[#333] mb-12"></div>

              <p class="text-[#aaa] leading-relaxed text-[0.95rem]">
                {{ t.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
            <Motion
        :initial="{ opacity: 0, y: 20 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8 }"
        :viewport="{ once: true }"
        class=""
      >
      <div class="flex flex-wrap justify-start ml-2 md:ml-30 gap-4 w-full max-w-8xl mt-16">
        <div class="flex-shrink-0">
          <a
            href="https://www.linkedin.com/in/rodrigo-tavares-ribeiro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              @click=""
              class="py-3 px-6 rounded-full text-[16px] satoshi font-medium flex items-center justify-center text-center btn-ani-black cursor-pointer"
            >
             <Linkedin class="w-5 h-5  mr-2" /> VIEW LINKEDIN PROFILE
            </button>
          </a>
        </div>
      </div>
      </Motion>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, computed } from "vue";
import { Motion } from "motion-v"
import { Linkedin } from "lucide-vue-next"

import avatar1 from "@/assets/image/halley.png";
import avatar2 from "@/assets/image/gabby.png";
import avatar3 from "@/assets/image/ramon.png";

const baseTestimonials = [
  {
    name: "Halley Rios",
    role: "Senior Frontend Engineer at Luma health",
    text: "I had the pleasure of working with Rodrigo on a complex feature that had to be delivered quickly under a tight deadline. He handled feedback from stakeholders, users, and engineers with ease, keeping everything on track without missing a beat. As a Software Engineer, I really appreciated how smooth our collaboration was — our exchanges were quick and efficient, and he guided me through complex workflows with clarity. Rodrigo made my job easier, and I felt confident in the quality of our work. I’d be glad to work with him again in the future.",
    avatar: avatar1
  },
  {
    name: "Gabrielle Dillon",
    role: "Product Manager at Luma Health",
    text: "I worked alongside Rodrigo for the last six months as a Product Manager at Luma Health. His designs made areas of our product easier to use, streamlining implementations and enabling customers and partners to be more self-sufficient. Rodrigo is an incredibly talented designer who is highly analytical, detail-oriented, and passionate about understanding every angle of the problem he’s solving or the goal he’s aiming to achieve through his designs. I really enjoyed working with Rodrigo and hope to have the opportunity to do so again. ",
    avatar: avatar2
  },
  {
    name: "Ramon Rigoni",
    role: "Senior Frontend Engineer at Luma Health",
    text: "I had the pleasure of working alongside Rodrigo for 6+ months, and I can confidently say he is an exceptional UI/UX and product designer. His ability to quickly grasp complex problems and ask the right questions made him an invaluable collaborator on our team.",
    avatar: avatar3
  }
];

const gap = ref(64);
const normalSpeed = 40;
const slowSpeed = 15;

const hovering = ref(false);
const offset = ref(0);

const container = ref(null);
const track = ref(null);
const renderedTestimonials = ref([]);

let frameId = null;
let lastTime = null;
let loopWidth = 0;

const cardStyle = computed(() => ({
  width: "clamp(320px, 35vw, 620px)",
  padding: "2.5rem",
  backgroundColor: "transparent",
}));

async function buildTrack() {
  renderedTestimonials.value = [...baseTestimonials];
  await nextTick();

  const containerWidth = container.value.offsetWidth;

  while (track.value.scrollWidth < containerWidth * 2) {
    renderedTestimonials.value.push(...baseTestimonials);
    await nextTick();
  }

  loopWidth = track.value.scrollWidth / 2;
}

function animate(time) {
  if (!lastTime) lastTime = time;

  const delta = (time - lastTime) / 1000;
  lastTime = time;

  const speed = hovering.value ? slowSpeed : normalSpeed;
  offset.value = (offset.value + speed * delta) % loopWidth;

  frameId = requestAnimationFrame(animate);
}

onMounted(async () => {
  await nextTick();
  await buildTrack();
  frameId = requestAnimationFrame(animate);
});

onUnmounted(() => {
  cancelAnimationFrame(frameId);
});
</script>
