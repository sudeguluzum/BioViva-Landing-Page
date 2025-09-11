<template>
  <div class="drop-shadow-xl/40 d-pink flex gap-1 rounded-2xl p-1 text-white">
    <button
      @click="setLocale('en')"
      class="px-2 rounded-full transition-colors duration-200"
      :class="{
        ' bg-white shadow-sm text-black font-medium': locale === 'en',
      }"
    >
      EN
    </button>

    <button
      @click="setLocale('tr')"
      class="px-2 rounded-full transition-colors duration-200"
      :class="{
        ' bg-white shadow-sm text-black font-medium': locale === 'tr',
      }"
    >
      TR
    </button>
  </div>
</template>

<script setup>
const { locale, setLocale } = useI18n();
// defineProps({
//   modelValue: {
//     type: String,
//     default: "en",
//   },
// });
// defineEmits(["update:modelValue"]);
</script>
