<template>
  <div
    ref="container"
    class="overflow-hidden mx-4 "
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
        v-for="(img, i) in renderedImages"
        :key="i"
        :src="img"
        class="w-[180px] h-[50px] sm:w-[180px] sm:h-[50px] lg:w-[360px] lg:h-[96px]  select-none"
        draggable="false"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

import luma from '@/assets/image/luma.png'
import accenture from '@/assets/image/accenture.png'
import nubank from '@/assets/image/nubank.png'
import pollux from '@/assets/image/pollux.png'
import santander from '@/assets/image/santander.png'
import equatorial from '@/assets/image/equatorial.png'
import vivo from '@/assets/image/vivo.png'

const baseImages = [
  luma,
  accenture,
  nubank,
  pollux,
  santander,
  equatorial,
  vivo
]

const gap = ref(64) // reactive

function updateGap() {
  gap.value = window.innerWidth < 640 ? 12 : 64
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
  white-space: nowrap;
  will-change: transform;
}
</style>
