<template>
  <div class="text-center">
    <p class="text-2xl font-medium leading-relaxed">
      <span v-for="(part, index) in parts" :key="index">
        <!-- Normal text -->
        <span v-if="part.type === 'text'">{{ part.content }}</span>

        <!-- Pembe text -->
        <span v-else-if="part.type === 'pink'" class="text-pink">
          {{ part.content }}
        </span>

        <span v-else-if="part.type === 'br'"><br /></span>

        <!-- Görsel baloncuk -->
        <span
          v-else-if="part.type === 'img'"
          class="bg-center bg-cover w-18 py-4 rounded-full inline-block align-middle"
          :style="{ backgroundImage: `url(${part.content})` }"
        ></span>
      </span>
    </p>

    <!-- Alt açıklama -->
    <p v-if="subText" class="text-gray-500 py-6" v-html="subText"></p>
  </div>
</template>

<script setup>
defineProps({
  parts: {
    type: Array,
    required: true,
  },
  subText: {
    type: String,
    default: "",
  },
});
</script>
