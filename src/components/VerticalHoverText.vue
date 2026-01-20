<template>
  <div
    class="relative inline-block overflow-hidden cursor-pointer"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    ref="hoverEmail"
  >
    <span
      class="block transition-transform duration-500 ease-in-out"
      :style="{
        transform: hover ? 'translateY(-100%)' : 'translateY(0)',
        color: hover ? hoverColor : defaultColor
      }"
    >
      {{ text }}
    </span>
    <span
      class="absolute top-full left-0 w-full transition-transform duration-500 ease-in-out"
      :style="{ transform: hover ? 'translateY(-100%)' : 'translateY(0)', color: hoverColor }"
    >
      {{ text }}
    </span> 
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  text: { type: String, required: true },
  defaultColor: { type: String, default: '#fff' },
  hoverColor: { type: String, default: '#71717A' },
  transition: { type: Number, default: 0.5 },
})

const hover = ref(false)
</script>