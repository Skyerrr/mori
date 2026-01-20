<template>
  <nav ref="navRef" class="sticky top-0 z-50 w-full relative">
    <!-- Top Bar -->
    <div id="menu" :class="['topbar shadow-md py-3', { menu: open }]">
      <div class="mx-auto flex justify-between px-6 md:px-20">
        <h1 class="satoshi font-black italic text-white text-[24px]">TAV</h1>
        <button class="md:hidden" @click.stop="open = !open">
          <img src="@/assets/image/menu-icon.svg" />
        </button>
      </div>
    </div>

    <!-- Dropdown -->
    <transition name="slide">
      <div
        v-if="open"
        class="absolute left-0 top-full w-full menu flex flex-col items-center gap-7 py-6 text-white md:hidden"
      >
        <button @click="scrollToTarget('work')">Work</button>
        <button @click="scrollToTarget('journey', -30)">About me</button>
        <button @click="scrollToTarget('connect')">Contact</button>
        <a href="@/assets/files/arrow.svg"> Resume </a>
        <a
          href="https://www.linkedin.com/in/rodrigotavr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const open = ref(false);
const navRef = ref(null);

const handleClickOutside = (e) => {
  if (!navRef.value) return;
  if (!navRef.value.contains(e.target)) {
    open.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

const scrollToTarget = (target, offset = 0) => {
  const el = document.getElementById(target);
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.pageYOffset + offset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });

  open.value = false;
};
</script>

<style scoped>
.topbar {
  background: rgba(0, 0, 0, 0.75);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  transition: background-color 0.25s ease;
}

.menu {
  background: #171717 !important;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
