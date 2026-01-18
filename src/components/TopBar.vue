<template>
  <nav class="sticky top-0 z-50 w-full topbar shadow-md py-3">
    <div class="mx-auto flex justify-between px-20">
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
            class="text-white hover:text-[#71717A] transition-colors duration-450"
            >TAV</a
          >
        </h1>
      </div>

      <!-- Navigation Menu -->
      <ul
        class="flex gap-5 list-none m-0 px-0 text-weight-700 text-white mt-3 satoshi"
        style="font-size: 16px"
      >
        <li>
          <a
            href="#work"
            class="flex justify-center items-center w-18 h-7 relative text-hover-vertical"
          >
            <span>Work</span>
            <span>Work</span>
          </a>
        </li>
        <li>
          <a
            href="#about"
            class="flex justify-center items-center w-19 h-7 relative text-hover-vertical"
          >
            <span>About me</span>
            <span>About me</span>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            class="flex justify-center items-center w-18 h-7 relative text-hover-vertical"
          >
            <span>Contact</span>
            <span>Contact</span>
          </a>
        </li>
        <li class="">
          <button
            href="#resume"
            class="flex justify-center items-center w-18 h-7 relative text-hover-vertical"
          >
            <span>Resume</span>
            <span>Resume</span>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TopBar",
};
</script>

<style scoped>
.topbar {
  background-color: #000000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(2px);
}
</style>
