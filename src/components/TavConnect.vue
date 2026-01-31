<template>
  <div
    class="bg-black flex flex-col max-w-8xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 relative satoshi-medium-font"
  >
    <!-- Header -->
    <div class="flex flex-col items-start gap-3 py-3 text-white w-full">
      <div
        class="text-center recoleta font-normal mb-6 text-[48px] sm:text-[64px] md:text-[96px] lg:text-[172px] x1:text-[200px] 2x1:text-[200px] leading-[1.1] tracking-[1.8px]"
      >
        Lets connect
      </div>
      <div
        class="text-left text-[#71717A] satoshi font-medium text-[20px] sm:text-[24px] md:text-[32px] lg:text-[48px] x1:text-[48px] 2x1:text-[48px] leading-[1.2]"
      >
        I like to think good design starts with curiosity.<br />
        If you felt any of that here, i think we should talk.
      </div>
    </div>

    <div
      class="flex flex-col lg:flex-row justify-between items-start w-full py-6 text-white mt-12 lg:mt-24"
    >
      <!-- Left content -->
      <div class="flex flex-col gap-6 lg:gap-8 w-full lg:w-auto">
        <div class="text-left">
          <a href="mailto:rodrigotavr@gmail.com">
            <HoverArrowButton
              class="text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] recoleta tracking-[1.8px]"
              text="rodrigotavr@gmail.com"
              :arrowSrc="Arrow"
              defaultColor="#fff"
              hoverColor="#71717A"
              arrowClass="h-[36px] sm:h-[42px] lg:h-[52px] mt-1"
            />
          </a>
        </div>

        <div class="text-left flex flex-col sm:flex-row gap-4 sm:gap-8">
          <a href="/RODRIGOTAVARESCV.pdf" download>
            <HoverArrowButton
              class="text-[14px] sm:text-[16px] satoshi font-normal"
              text="Download full resume"
              :arrowSrc="Arrow"
              defaultColor="#fff"
              hoverColor="#71717A"
              arrowClass="h-[28px] sm:h-[34px] -ml-1"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/rodrigotavr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HoverArrowButton
              class="text-[14px] sm:text-[16px] satoshi font-normal"
              text="Linkedin"
              :arrowSrc="Arrow"
              defaultColor="#fff"
              hoverColor="#71717A"
              arrowClass="h-[28px] sm:h-[34px] -ml-1"
            />
          </a>
        </div>
      </div>

      <!-- Right content -->
      <div
        class="mt-8 lg:mt-6 text-left lg:text-right w-full lg:w-auto flex flex-col gap-2 lg:gap-3"
      >
        <span
          class="text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px] recoleta tracking-[1.8px]"
        >
          Brazil
        </span>
        <span
          class="text-[#71717A] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]"
        >
          Copacabana
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import VerticalHoverText from "@/components/VerticalHoverText.vue";
import HoverArrowButton from "@/components/HoverArrowButton.vue";
import Arrow from "@/assets/image/arrow.svg";
</script>
