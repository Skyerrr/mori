<template>
  <div class="flex flex-wrap justify-center md:justify-between items-center gap-0 md:gap-10 py-0 md:py-6">
    <div class="w-1/2 sm:w-1/3 md:w-auto flex justify-center">
      <img :src="luma" alt="Luma Logo" class="h-[40px] md:h-[40px] object-contain" />
    </div>

    <div class="w-1/2 sm:w-1/3 md:w-auto flex justify-center">
      <img :src="accenture" alt="Accenture Logo" class="h-[36px] md:h-[36px] object-contain" />
    </div>

    <div class="w-1/2 sm:w-1/3 md:w-auto flex justify-center">
      <img :src="nubank" alt="Nubank Logo" class="h-[28px] md:h-[28px] object-contain" />
    </div>

    <div class="w-1/2 sm:w-1/3 md:w-auto flex justify-center">
      <img :src="pollux" alt="Pollux Logo" class="h-[33px] md:h-[33px] object-contain" />
    </div>

    <div class="w-1/2 sm:w-1/3 md:w-auto flex justify-center">
      <img :src="santander" alt="Santander Logo" class="h-[60px] md:h-[60px] object-contain" />
    </div>

    <div class="w-1/2 sm:w-1/3 md:w-auto flex justify-center">
      <img :src="equatorial" alt="Equatorial Logo" class="h-[35px] md:h-[35px] object-contain" />
    </div>

    <div class="w-1/2 sm:w-1/3 md:w-auto flex justify-center">
      <img :src="vivo" alt="Vivo Logo" class="h-[28px] md:h-[28px] object-contain" />
    </div>
  </div>
</template>

<script setup>
import luma from "@/assets/image/luma.png";
import accenture from "@/assets/image/accenture.png";
import nubank from "@/assets/image/nubank.png";
import pollux from "@/assets/image/pollux.png";
import santander from "@/assets/image/santander.png";
import equatorial from "@/assets/image/equatorial.png";
import vivo from "@/assets/image/vivo.png";
</script>
