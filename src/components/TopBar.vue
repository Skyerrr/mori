<template>
  <nav
    class="sticky top-0 z-50 w-full topbar shadow-md py-3 transition-all duration-300"
    :class="{
      'topbar-hidden': !showTopbar,
      'topbar-visible': showTopbar
    }"
  >
    <div class="mx-auto flex justify-between px-2 md:px-20">
      <!-- Logo -->
      <div class="mt-3">
        <h1
          class="satoshi font-black italic"
          style="
            color: #fff;
            font-size: 24px;
            font-weight: 900;
            line-height: 24px;
          "
        >
          <a
            class="text-white hover:text-[#71717A] transition-colors duration-300"
          >
            TAV
          </a>
        </h1>
      </div>

      <!-- Navigation Menu -->
      <ul
        class="flex gap-5 list-none m-0 px-0 text-weight-700 text-white mt-3 satoshi"
        style="font-size: 16px"
      >
        <li>
          <a
            @click.prevent="scrollToTarget('work', -55)"
            class="flex justify-center items-center w-18 h-7 relative text-hover-vertical center-all cursor-pointer"
          >
            <span>Work</span>
            <span>Work</span>
          </a>
        </li>

        <li>
          <a
            @click.prevent="scrollToTarget('journey', -55)"
            class="flex justify-center items-center w-19 h-7 relative text-hover-vertical center-all cursor-pointer"
          >
            <span>About me</span>
            <span>About me</span>
          </a>
        </li>

        <li>
          <a
            @click.prevent="scrollToTarget('connect')"
            class="flex justify-center items-center w-18 h-7 relative text-hover-vertical center-all cursor-pointer"
          >
            <span>Contact</span>
            <span>Contact</span>
          </a>
        </li>

        <li>
          <a
            href="/RODRIGOTAVARESCV.pdf"
            download
            class="flex justify-center items-center w-18 h-7 relative text-hover-vertical center-all cursor-pointer"
          >
            <span>Resume</span>
            <span>Resume</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showTopbar = ref(true);
let lastScrollY = window.scrollY;

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  // hide on scroll down (after a small offset)
  if (currentScrollY > lastScrollY && currentScrollY > 50) {
    showTopbar.value = false;
  } else {
    showTopbar.value = true;
  }

  lastScrollY = currentScrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const scrollToTarget = (target, offset = 0) => {
  const el = document.getElementById(target);
  if (!el) return;

  const y =
    el.getBoundingClientRect().top +
    window.pageYOffset +
    offset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};
</script>

<style scoped>
.topbar {
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* visible state */
.topbar-visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

/* hidden state */
.topbar-hidden {
  opacity: 0;
  transform: translateY(-100%);
  pointer-events: none;
}
</style>
