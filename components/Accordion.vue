<template>
  <div class="flex flex-wrap pt-10">
    <div
      @click="toggle(j)"
      v-for="(i, j) in list"
      :key="j"
      class="flex flex-col l-pink h-40 md:h-60 border overflow-hidden text-white border-white dark:border-gray-700 rounded-3xl transition-all duration-500 hover:scale-101"
    >
      <div
        v-show="isOpen !== j"
        class="[writing-mode:vertical-lr] flex-center md:gap-5 p-1 md:p-3"
      >
        <Icon name="ph:arrow-up-light" class="text-3xl" />
        <h2>{{ i.title }}</h2>
      </div>

      <div v-show="isOpen === j" class="w-40 h-40 md:w-60 md:h-60 relative">
        <NuxtImg :src="i.img" class="w-full" />
        <div class="absolute flex justify-between bottom-2 left-2 right-2">
          <div
            class="border border-white rounded-3xl bg-white/30 backdrop-blur-sm px-3 py-1"
          >
            {{ i.title }}
          </div>
          <NuxtLink
            to="#"
            class="border border-white rounded-full bg-white/30 backdrop-blur-sm w-8 h-8 flex-center hover:scale-102"
          >
            <Icon name="ph:arrow-right-light" class="rotate-45 text-2xl" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const list = [
  { title: "Research", img: "img6.png" },
  { title: "Consultation", img: "img7.png" },
  { title: "Dionostics", img: "img2.png" },
  { title: "Theropies", img: "img3.png" },
];
const isOpen = ref(0);
const toggle = (index) => {
  isOpen.value = index;
};
</script>
