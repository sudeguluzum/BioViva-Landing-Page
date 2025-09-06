<template>
  <div
    v-show="isVisible"
    @click="scrollToTop"
    class="fixed bottom-6 l-pink right-6 h-10 w-10 flex-center rounded-full z-50 text-white text-2xl"
  >
    <Icon name="line-md:arrow-up" />
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
