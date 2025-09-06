<template>
  <NuxtLink class="flex" :to="to">
    <button
      class="relative c-black text-white px-4 py-2 rounded-full hover:scale-102 hover:drop-shadow-2xl"
    >
      {{ label }}
      <div
        class="absolute top-0 -right-8 bg-white border border-black rounded-full p-2 flex-center"
      >
        <Icon
          name="ph:arrow-down-light"
          class="-rotate-45 text-xl text-black"
        />
      </div>
    </button>
  </NuxtLink>
</template>

<script setup>
defineProps({
  label: { type: String },
  to: { type: String, default: "#" },
});
</script>
