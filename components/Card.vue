<template>
  <div class="relative">
    <NuxtImg :src="img" class="w-full" />
  </div>
</template>

<script setup>
const props = defineProps({
  img: String,
});
</script>
