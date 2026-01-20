<template>
  <div
    class="flex flex-wrap md:flex-row justify-center items-center gap-0 md:gap-20 bg-black py-12 md:py-24 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32"
  >
    <div class="w-1/2 md:w-auto flex justify-center mb-8 md:mb-0">
      <div class="text-center">
        <div class="big-number mb-2 inter font-bold">14</div>
        <div class="number-text">Launched products</div>
      </div>
    </div>

    <div class="w-1/2 md:w-auto flex justify-center mb-8 md:mb-0">
      <div class="text-center">
        <div class="big-number mb-2 inter font-bold">7</div>
        <div class="number-text">Brand collaborations</div>
      </div>
    </div>

    <div class="w-1/2 md:w-auto flex justify-center mb-8 md:mb-0">
      <div class="text-center">
        <div class="big-number mb-2 inter font-bold">+40</div>
        <div class="number-text">Users interviewed</div>
      </div>
    </div>

    <div class="w-1/2 md:w-auto flex justify-center mb-8 md:mb-0">
      <div class="text-center">
        <div class="big-number mb-2 inter font-bold">+5</div>
        <div class="number-text">Years of experience</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.big-number {
  font-size: clamp(40px, 4vw, 72px);
  line-height: clamp(44px, 4vw, 80px);
  color: white;
}

.number-text {
  font-size: clamp(14px, 1.2vw, 20px);
  line-height: clamp(16px, 1.4vw, 20px);
  color: white;
}
</style>
