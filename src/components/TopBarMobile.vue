<template>
  <nav ref="navRef" class="sticky top-0 z-50 w-full relative">
    <!-- Top Bar -->
    <div
      id="menu"
      class="topbar shadow-md py-3 transition-all duration-300"
      :class="[
        { menu: open },
        showTopbar ? 'topbar-visible' : 'topbar-hidden'
      ]"
    >
      <div class="mx-auto flex justify-between px-6 md:px-20">
        <span class="satoshi font-black italic text-white text-[24px]">TAV</span>

        <button class="md:hidden" @click.stop="open = !open">
          <img v-if="!open" src="@/assets/image/menu-icon.svg" />
          <img v-else src="@/assets/image/close-icon.svg" />
        </button>
      </div>
    </div>

    <!-- Dropdown -->
    <transition name="slide">
      <div
        v-if="open"
        class="absolute left-0 top-full w-full menu flex flex-col items-center gap-7 py-6 text-white md:hidden"
      >
        <button @click="scrollToTarget('work', -30)">Work</button>
        <button @click="scrollToTarget('journey', -30)">About me</button>
        <button @click="scrollToTarget('connect')">Contact</button>

        <a href="/RODRIGOTAVARESCV.pdf" download> Resume </a>

        <a
          href="https://www.linkedin.com/in/rodrigo-tavares-ribeiro/"
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

/* ---------- hide / show on scroll ---------- */
const showTopbar = ref(true);
let lastScrollY = window.scrollY;

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  // do not hide while menu is open
  if (open.value) {
    showTopbar.value = true;
    return;
  }

  if (currentScrollY > lastScrollY && currentScrollY > 50) {
    // scrolling down
    showTopbar.value = false;
  } else {
    // scrolling up
    showTopbar.value = true;
  }

  lastScrollY = currentScrollY;
};
/* ------------------------------------------ */

const handleClickOutside = (e) => {
  if (!navRef.value) return;
  if (!navRef.value.contains(e.target)) {
    open.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
  window.removeEventListener("scroll", handleScroll);
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* scroll states */
.topbar-visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.topbar-hidden {
  opacity: 0;
  transform: translateY(-100%);
  pointer-events: none;
}

/* mobile menu */
.menu {
  background: #171717 !important;
}

/* dropdown animation */
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
