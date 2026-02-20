<template>
  <div v-if="showCropMarks">
    
    <!-- Crop Mark - Top Right -->
    <Motion
      tag="div"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 0.1 }"
      :transition="{ duration: 1, delay: 0.7 }"
      class="hidden md:block absolute right-8 top-8"
      :style="topRightStyle"
    ></Motion>

    <!-- Crop Mark - Bottom Right -->
    <Motion
      tag="div"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 0.1 }"
      :transition="{ duration: 1, delay: 0.7 }"
      class="hidden md:block absolute right-8 bottom-8"
      :style="bottomRightStyle"
    ></Motion>

  </div>
</template>

<script setup>
import { Motion } from "motion-v"

/*
  Props
*/
defineProps({
  showCropMarks: {
    type: Boolean,
    default: true
  }
})

/*
  Static styles
*/
const topRightStyle = {
  width: "20px",
  height: "20px",
  borderTop: "1px solid #111827",
  borderRight: "1px solid #111827",
  opacity: 0.1
}

const bottomRightStyle = {
  width: "20px",
  height: "20px",
  borderBottom: "1px solid #111827",
  borderRight: "1px solid #111827",
  opacity: 0.1
}
</script>