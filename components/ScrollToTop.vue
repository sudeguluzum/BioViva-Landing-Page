<template>
  <div
    v-show="isVisible"
    @click="scrollToTop"
    class="fixed bottom-6 right-6 h-10 w-10 cursor-pointer rounded-full c-pink justify-center shadow-lg transition-opacity duration-300 z-50"
  >
    <Icon name="fluent:caret-up-12-filled" />
  </div>
</template>

<script setup>
const isVisible = ref(false);

const toggleVisibility = () => (isVisible.value = window.scrollY > 300);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return;
};

onMounted(() => window.addEventListener("scroll", toggleVisibility));
onBeforeUnmount(() => window.removeEventListener("scroll", toggleVisibility));
</script>
