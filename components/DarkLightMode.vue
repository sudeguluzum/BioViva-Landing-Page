<template>
  <button
    ref="btn"
    class="relative drop-shadow-xl/40 px-10 rounded-full py-4 flex items-center transition-colors duration-500"
    :class="isDark ? 'bg-gray-800/80' : 'bg-white/80'"
    @click="toggleDark"
  >
    <div
      ref="circle"
      class="w-6 h-6 bg-white shadow-lg rounded-full absolute top-1 left-2 flex-center"
    >
      <Icon
        v-if="!isDark"
        name="line-md:sun-rising-loop"
        class="text-yellow-500 text-lg"
      />
      <Icon
        v-else
        name="line-md:moon-filled-loop"
        class="text-gray-800 text-lg"
      />
    </div>

    <span class="absolute left-2 text-white text-xs" v-show="isDark">
      Dark
    </span>
    <span class="absolute right-2 text-xs text-gray-800" v-show="!isDark">
      Light
    </span>
  </button>
</template>

<script setup>
import { gsap } from "gsap";

const props = defineProps({
  modelValue: {
    type: String,
    default: "light",
  },
});
const emit = defineEmits(["update:modelValue"]);

const circle = ref(null);

const isDark = computed(() => props.modelValue === "dark");

function toggleDark() {
  const newMode = isDark.value ? "light" : "dark";
  emit("update:modelValue", newMode);

  document.documentElement.classList.toggle("dark", newMode === "dark");

  gsap.to(circle.value, {
    duration: 0.5,
    x: newMode === "dark" ? 40 : 0,
    ease: "power2.inOut",
  });
}

onMounted(() => {
  if (isDark.value) {
    gsap.set(circle.value, { x: 40 });
  }
});

watch(
  () => props.modelValue,
  (val) => {
    gsap.to(circle.value, {
      duration: 0.5,
      x: val === "dark" ? 40 : 0,
      ease: "power2.inOut",
    });
  }
);
</script>
