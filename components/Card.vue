<template>
  <div class="relative">
    <NuxtImg :src="img" class="w-full" />
    <div class="absolute flex justify-between bottom-2 left-2 right-2">
      <div
        class="border border-white rounded-3xl bg-white/30 backdrop-blur-sm px-3 py-1"
      >
        {{ title }}
      </div>
      <div
        class="border border-white rounded-full bg-white/30 backdrop-blur-sm w-8 h-8 flex-center"
      >
        <Icon name="ph:arrow-right-light" class="rotate-45 text-2xl" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  img: String,
  title: String,
});
</script>
