<template>
  <span ref="statRef">
    {{ formattedValue }}
  </span>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

const props = defineProps({
  value: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    default: 1500,
  },
  decimals: {
    type: Number,
    default: 0,
  },
});

const displayValue = ref(0);
const statRef = ref(null);
let hasAnimated = false;

/* Ease-out cubic (feels premium) */
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function animateNumber(target) {
  if (hasAnimated) return;
  hasAnimated = true;

  const startTime = performance.now();

  function step(timestamp) {
    const progress = Math.min((timestamp - startTime) / props.duration, 1);
    const eased = easeOutCubic(progress);

    displayValue.value = target * eased;

    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

const formattedValue = computed(() => {
  return displayValue.value.toFixed(props.decimals);
});

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateNumber(props.value);
      observer.disconnect();
    }
  });

  if (statRef.value) observer.observe(statRef.value);
});
</script>