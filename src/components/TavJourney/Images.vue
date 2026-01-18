<template>
  <div class="flex justify-between items-center self-stretch">
    <div class="w-[108px] h-[40px]">
      <img :src="luma" alt="Luma Logo" class="w-full h-full object-contain" />
    </div>

    <div class="w-[194px] h-[36px]">
      <img
        :src="accenture"
        alt="Accenture Logo"
        class="w-full h-full object-contain"
      />
    </div>
        <div class="w-[194px] h-[28px] ">
      <img
        :src="nubank"
        alt="Nubank Logo"
        class="w-full h-full object-contain"
      />
    </div>
        <div class="w-[180px] h-[33px]">
      <img
        :src="pollux"
        alt="Pollux Logo"
        class="w-full h-full object-contain"
      />
    </div>
        <div class="w-[180px] h-[60px]">
      <img
        :src="santander"
        alt="Santander Logo"
        class="w-full h-full object-contain"
      />
    </div>
        <div class="w-[194px] h-[35px]">
      <img
        :src="equatorial"
        alt="Equatorial Logo"
        class="w-full h-full object-contain"
      />
    </div>
        <div class="w-[194px] h-[28px]">
      <img
        :src="vivo"
        alt="Vivo Logo"
        class="w-full h-full object-contain"
      />
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
