<template>
  <div
    class="bg-gradient-to-b from-white/70 to-transparent rounded-4xl pt-4 px-4"
  >
    <div class="custom-pagination flex"></div>
    <Swiper
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 5000 }"
      :modules="[Pagination, Autoplay]"
      :pagination="{ clickable: true, el: '.custom-pagination' }"
      ><swiper-slide
        v-for="(i, j) in content"
        :key="j"
        :title="i.title"
        :text="i.text"
        :src="i.img"
      >
        <div class="text-white text-sm py-4">
          <p>{{ i.text }}</p>
          <div class="flex items-center gap-1 py-5">
            <NuxtImg :src="i.img" class="w-8 h-8 rounded-full object-cover" />
            <h2>Dr. {{ i.doctor }}</h2>
          </div>
          <div class="flex items-center justify-end gap-1">
            <button
              class="bg-white rounded-full text-black px-2 py-1 font-medium"
            >
              Consultation
            </button>
            <Icon
              name="fluent-mdl2:drill-down-solid"
              class="-rotate-45 text-2xl"
            />
          </div>
        </div> </swiper-slide
    ></Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const content = [
  {
    img: "doctors/jk2.png",
    text: "Compottictive Expeets Our skiller doctor produtice your well-being offering personalized core.",
    doctor: "Olivia Williams",
  },
  {
    img: "doctors/dc2.png",
    text: "Discover cutting-edge technologies shaping the future of medicine. Sustainable Practices. Personalized Care",
    doctor: "Sude Gül Üzüm",
  },
  {
    img: "doctors/dc2.png",
    text: "Personalized Care. Tailored treatments designed to meet your unique health needs.",
    doctor: "Ayşe Nur Gülay",
  },
  {
    img: "doctors/jk.png",
    text: "Connecting scientists worldwide to pioneer breakthroughs. Sustainable Practices",
    doctor: "Jeon Jungkook",
  },
];
</script>
<style>
.custom-pagination .swiper-pagination-bullet {
  background-color: black !important;
}
.custom-pagination .swiper-pagination-bullet-active {
  background-color: white !important;
}
</style>
