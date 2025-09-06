<template>
  <div class="bg-gradient-to-b from-white/70 to-transparent rounded-4xl p-4">
    <h1 class="text-gray-400 font-semibold">{{ title }}</h1>
    <p class="text-xs text-white">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String },
  description: { type: String },
});
</script>
