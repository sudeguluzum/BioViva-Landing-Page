<template>
  <div class="w-full d-pink grid grid-cols-1 md:grid-cols-2">
    <div class="bg-white md:rounded-r-3xl overflow-hidden pt-35 p-8">
      <div
        class="bg-[url(img5.png)] bg-center bg-cover w-35 py-6 rounded-full relative flex-center"
      >
        <Icon
          name="tdesign:play-circle-filled"
          class="absolute text-4xl text-white cursor-pointer"
        />
      </div>
      <div class="flex items-center gap-3 my-6 mr-50">
        <div class="bg-gray-400 relative h-[2px] w-full">
          <div class="absolute h-[2px] bg-gray-700 w-1/2"></div>
        </div>
        <p class="text-nowrap text-sm">Revolutionizing biomedicine</p>
      </div>
      <div class="text-3xl md:text-5xl border-b pb-6">
        <h1 class="leading-16">
          Revolutionizing
          <span> <span class="text-pink">Biomedicine:</span> Pioneering</span>
          Health Breakthroughs
        </h1>
      </div>
      <p class="py-6">
        Revolutionizing Healthcare: Pionnering <br />
        Breakthroughs in Biomedicine for a Healthier Future.
      </p>
      <CustomBtn label="Make an appointment" to="#" />
      <div><Accordion /></div>
    </div>
    <div
      class="bg-[url(img1.png)] bg-center bg-cover py-20 md:pt-35 flex-center flex-wrap gap-10"
    >
      <div class="md:mr-80">
        <Ping class="absolute -right-59" /><BlurCard class="relative w-60" />
      </div>
      <div class="md:ml-80 md:mt-20">
        <Ping class="absolute right-2" />
        <div
          class="bg-gradient-to-b from-white/70 to-transparent rounded-4xl p-4 relative max-w-55"
        >
          <h1 class="text-gray-400 font-semibold">
            Health Revolution: BloViva
          </h1>
          <p class="text-xs text-white">
            Discover the future of wellness with BioViva. Where oduunded
            medicine combines with personolized core to guide you to optimal
            health.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="flex-center flex-col p-4 md:py-10">
    <h2 class="text-gray-600 py-5">About us</h2>
    <Text
      :parts="[
        { type: 'text', content: 'At ' },
        { type: 'pink', content: 'BioViva' },
        { type: 'text', content: ', we are committed ' },
        { type: 'img', content: 'img3.png' },
        { type: 'text', content: ' to delivering ' },
        { type: 'pink', content: 'innovative ' },
        { type: 'br' },
        { type: 'img', content: 'img7.png' },
        { type: 'text', content: ' solutions at the ' },
        { type: 'pink', content: 'intersection of medicine ' },
        { type: 'img', content: 'img5.png' },
        { type: 'text', content: ' and technology.' },
      ]"
      sub-text="Our commitment to healthcare development <br> empowers people."
    />
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-3 md:px-30">
    <div class="col-span-2 px-5 bg-red-400">
      <Swiper
        :slides-per-view="3"
        :pagination="{ clickable: true, el: '.custom-pagi' }"
        :modules="modules"
        :navigation="{ nextEl: '.swiper-next', prevEl: '.swiper-prev' }"
        :breakpoints="{
          '1': {
            slidesPerView: 1,
          },
          '640': {
            slidesPerView: 2,
          },
          '800': {
            slidesPerView: 3,
          },
        }"
      >
        <swiper-slide v-for="i in slider" :key="j">
          <Card
            :img="i.img"
            :title="i.title"
            class="w-65 h-40 rounded-3xl overflow-hidden"
          />
        </swiper-slide>
      </Swiper>
      <div class="flex items-center justify-between px-10 py-3">
        <div class="flex gap-2">
          <button class="swiper-prev text-gray-500 flex-center hover:scale-115">
            <Icon name="lucide:move-left" size="24" class="text-[#4c4c4c]" />
          </button>

          <button class="swiper-next flex-center hover:scale-115">
            <Icon name="lucide:move-right" size="24" class="text-[#4c4c4c]" />
          </button>
        </div>

        <div class="custom-pagi flex justify-end"></div>
      </div>
    </div>
    <div class="col-span-1 px-8">
      <p>
        Our team combines cutting-edge research with personalized care
        solutions. We focus on bridging medicine and technology to improve
        well-being. Every project is designed to empower patients and advance
        medical knowledge.
      </p>
      <div class="flex justify-between py-5">
        <div class="flex flex-wrap gap-2 w-7xl">
          <WhiteBtn title="Bioprinting" />
          <WhiteBtn title="Nanotheropy" />
          <WhiteBtn title="Bioinformatics" />
          <WhiteBtn title="Cryonics" />
        </div>
        <div class="w-3xl">
          <CustomBtn label="Contact Us" to="#" />
        </div>
      </div>
    </div>
  </div>
  <Text
    :parts="[
      { type: 'pink', content: 'Echoes' },
      { type: 'text', content: 'of excellence: ' },
      { type: 'img', content: 'img1.png' },
      { type: 'text', content: ' Inspiring chronicles of ' },
      { type: 'pink', content: 'customer ' },
      { type: 'br' },
      { type: 'img', content: 'img5.png' },
      { type: 'text', content: ' achievements and ' },
      { type: 'pink', content: 'transformation ' },
    ]"
    sub-text="Changing lives and shaping the future: Inspiring <br> excellence in biomedicine"
  />
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const modules = [Navigation, Autoplay, Pagination];

const slider = [
  { img: "img7.png", title: "Consultations" },
  { img: "img4.png", title: "Diognostics" },
  { img: "img5.png", title: "Therapies" },
  { img: "img2.png", title: "Consultations" },
  { img: "img2.png", title: "Consultations" },
];
</script>
<style>
.custom-pagi .swiper-pagination-bullet {
  width: 20px !important;
  height: 2px !important;
  border-radius: 2px !important;
  background-color: #4c4c4c !important;
  opacity: 0.4 !important; /* pasif olanların görünümü */
  transition: all 0.3s ease !important;
}

/* Aktif slide için */
.custom-pagi .swiper-pagination-bullet-active {
  opacity: 1 !important;
  background: #4c4c4c !important;
  width: 40px !important;
}
</style>
