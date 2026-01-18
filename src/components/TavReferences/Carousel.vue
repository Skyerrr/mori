<template>
  <div class="overflow-hidden relative w-full h-[483px] lg:h-[483px]">
    <div
      class="carousel-track flex"
      :style="{
        gap: gap + 'px',
        animationDuration: speed + 's'
      }"
    >
      <img
        v-for="(img, idx) in duplicatedImages"
        :key="idx"
        :src="img"
        class="flex-shrink-0 w-[200px] h-[243px] sm:w-[300px] sm:h-[365px] lg:w-[395px] lg:h-[483px] object-cover rounded-xl"
        alt="carousel image"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const images = ref([
  'https://picsum.photos/395/483?6',
  'https://picsum.photos/395/483?7',
  'https://picsum.photos/395/483?8',
  'https://picsum.photos/395/483?9'
])

// Duplicate images for seamless loop
const duplicatedImages = computed(() => [...images.value, ...images.value])

const speed = 30 // seconds for full scroll (increase for slower)
const gap = 48   // gap between images in px
</script>

<style scoped>
.carousel-track {
  display: flex;
  animation-name: scroll;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
