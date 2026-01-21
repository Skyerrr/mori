<template>
  <span class="" ref="statRef">
    {{ displayValue }}
  </span>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Only one prop: value
const { value } = defineProps({
  value: {
    type: [Number, String],
    required: true,
  },
});

const displayValue = ref(typeof value === "number" ? 0 : value);
const statRef = ref(null);
let hasAnimated = false;

// Animate numbers only
function animateNumber(target, duration = 1500) {
  if (hasAnimated) return;
  hasAnimated = true;

  const startTime = performance.now();

  function step(timestamp) {
    const progress = Math.min((timestamp - startTime) / duration, 1);
    displayValue.value = Math.floor(progress * target);

    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

// Animate when scrolled into view
onMounted(() => {
  if (typeof value !== "number") return;

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateNumber(value);
      observer.disconnect();
    }
  });

  if (statRef.value) observer.observe(statRef.value);
});
</script>

<style scoped>
</style>
