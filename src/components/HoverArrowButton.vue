<template>
  <button
    class="inline-grid items-center arrow-gray-wrapper
           grid-cols-[auto_auto]
           gap-3 sm:gap-4 md:gap-4"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <!-- Hover text -->
    <div class="relative inline-block overflow-hidden cursor-pointer">
      <span
        class="block transition-transform ease-in-out"
        :style="{
          transform: hover ? 'translateY(-100%)' : 'translateY(0)',
          color: hover ? hoverColor : defaultColor,
          transitionDuration: transition + 's'
        }"
      >
        {{ text }}
      </span>

      <span
        class="absolute top-full left-0 w-full transition-transform ease-in-out"
        :style="{
          transform: hover ? 'translateY(-100%)' : 'translateY(0)',
          color: hoverColor,
          transitionDuration: transition + 's'
        }"
      >
        {{ text }}
      </span>
    </div>

    <!-- Arrow -->
    <img
      :src="arrowSrc"
      :class="['arrow-gray', arrowClass]"
      alt="arrow"
    />
  </button>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  text: { type: String, required: true },
  defaultColor: { type: String, default: '#fff' },
  hoverColor: { type: String, default: '#71717A' },
  transition: { type: Number, default: 0.5 },
  arrowSrc: { type: String, default: '' },
  arrowClass: { type: String, default: 'h-[48px]' },
})

const hover = ref(false)
</script>

