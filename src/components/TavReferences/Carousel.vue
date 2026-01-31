<template>
  <div
    class="overflow-hidden relative w-full"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <div
      class="carousel-track flex"
      :style="{
        gap: gap + 'px',
        transform: `translateX(${position}px)`
      }"
    >
      <img
        v-for="(img, idx) in duplicatedImages"
        :key="idx"
        :src="img"
        class="flex-shrink-0 w-[300px] h-[365px] sm:w-[300px] sm:h-[365px] lg:w-[327px] lg:h-[400px] object-cover rounded-xl"
        alt="carousel image"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import refer1 from '@/assets/image/refer1.png'
import refer2 from '@/assets/image/refer2.png'
import refer3 from '@/assets/image/refer3.png'
const images = ref([
  refer1,
  refer2,
  refer3
])

const duplicatedImages = computed(() => [...images.value, ...images.value])

const gap = 48
const normalSpeed = 30 // pixels per second
const slowSpeed = 10    // pixels per second when hovering

const hovering = ref(false)
const position = ref(0)

let frameId
let lastTime

const totalWidth = 2 * (395 + gap) * images.value.length // width of duplicated track

function animate(time) {
  if (!lastTime) lastTime = time
  const delta = (time - lastTime) / 1000 // seconds since last frame
  lastTime = time

  const speed = hovering.value ? slowSpeed : normalSpeed
  position.value -= speed * delta

  if (position.value <= -totalWidth / 2) {
    position.value += totalWidth / 2
  }

  frameId = requestAnimationFrame(animate)
}

onMounted(() => {
  frameId = requestAnimationFrame(animate)
})

onUnmounted(() => {
  cancelAnimationFrame(frameId)
})
</script>

<style scoped>
.carousel-track {
  display: flex;
  white-space: nowrap;
}
</style>
