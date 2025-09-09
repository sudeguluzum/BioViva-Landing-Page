<template>
  <div class="drop-shadow-xl/40 d-pink flex gap-1 rounded-2xl p-1 text-white">
    <button
      @click="$emit('update:modelValue', 'en')"
      class="px-2 rounded-full transition-colors duration-200"
      :class="{
        ' bg-white shadow-sm text-black font-medium': modelValue === 'en',
      }"
    >
      EN
    </button>

    <button
      @click="$emit('update:modelValue', 'tr')"
      class="px-2 rounded-full transition-colors duration-200"
      :class="{
        ' bg-white shadow-sm text-black font-medium': modelValue === 'tr',
      }"
    >
      TR
    </button>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: "en",
  },
});
defineEmits(["update:modelValue"]);
</script>
