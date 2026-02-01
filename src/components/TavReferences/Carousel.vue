<template>
  <div
  ref="container"
    class="overflow-hidden relative w-full"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <div
      ref="track"
      class="carousel-track flex items-center"
      :style="{
        gap: gap + 'px',
        transform: `translate3d(${-offset}px, 0, 0)`
      }"
    >
      <img
        v-for="(img, idx) in renderedImages"
        :key="idx"
        :src="img"
        class="flex-shrink-0 w-[300px] h-[365px] sm:w-[300px] sm:h-[365px] lg:w-[327px] lg:h-[400px] object-cover rounded-xl"
        alt="carousel image"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import refer1 from '@/assets/image/refer1.png'
import refer2 from '@/assets/image/refer2.png'
import refer3 from '@/assets/image/refer3.png'
const baseImages = [
refer1,
refer2,
refer3
]

const gap = ref(64) // reactive

function updateGap() {
  gap.value = window.innerWidth < 640 ? 48 : 48
}
const normalSpeed = 30 // px/sec
const slowSpeed = 10

const hovering = ref(false)
const offset = ref(0)

const container = ref(null)
const track = ref(null)
const renderedImages = ref([])

let frameId = null
let lastTime = null
let loopWidth = 0

async function waitForImages() {
  const imgs = track.value.querySelectorAll('img')
  await Promise.all(
    [...imgs].map(img =>
      img.complete
        ? Promise.resolve()
        : new Promise(resolve => (img.onload = resolve))
    )
  )
}

async function buildTrack() {
  renderedImages.value = [...baseImages]
  await nextTick()
  await waitForImages()

  const containerWidth = container.value.offsetWidth

  while (track.value.scrollWidth < containerWidth * 2) {
    renderedImages.value.push(...baseImages)
    await nextTick()
    await waitForImages()
  }

  loopWidth = track.value.scrollWidth / 2
}

function animate(time) {
  if (!lastTime) lastTime = time

  const delta = (time - lastTime) / 1000
  lastTime = time

  const speed = hovering.value ? slowSpeed : normalSpeed
  offset.value = (offset.value + speed * delta) % loopWidth

  frameId = requestAnimationFrame(animate)
}

onMounted(async () => {
  await nextTick()
  await buildTrack()
  updateGap()
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
