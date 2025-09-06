<template>
  <NuxtLink :to="to" class="bg-white font-medium border rounded-full px-4 py-1">
    {{ title }}
  </NuxtLink>
</template>

<script setup>
defineProps({
  title: { type: String },
  to: { type: String, default: "#" },
});
</script>
