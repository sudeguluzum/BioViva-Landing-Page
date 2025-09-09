<template>
  <div
    class="bg-gradient-to-br from-[#FECFCD] to-[#F5CDDB] hover:from-[#FA9CBE] hover:to-[#E9BCC1] flex flex-col gap-4 rounded-4xl p-4 text-white dark:text-black"
  >
    <span class="flex justify-between items-center">
      <NuxtLink class="border border-white rounded-full px-4 py-1">{{
        title
      }}</NuxtLink>
      <Icon name="gg:more-o" class="text-white dark:text-black text-2xl"
    /></span>
    <p class="line-clamp-4">
      {{ text }}
    </p>
    <NuxtLink to="#" class="flex justify-end underline underline-offset-5"
      >read more</NuxtLink
    >
    <span class="flex items-center gap-2">
      <NuxtImg :src="img" class="w-12 h-12 rounded-full object-cover" />
      <h3>{{ author }}</h3>
    </span>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  text: String,
  img: String,
  author: String,
});
</script>
