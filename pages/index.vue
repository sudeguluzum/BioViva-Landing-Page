<template>
  <div class="w-full d-pink grid grid-cols-1 md:grid-cols-2">
    <div class="bg-white md:rounded-r-3xl overflow-hidden pt-35 p-5 md:p-8">
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
        <Ping class="absolute -right-70" /><BlurCard
          class="relative max-w-70"
        />
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
  <div class="grid grid-cols-1 lg:grid-cols-3 md:px-25">
    <div class="col-span-2 px-5">
      <Swiper
        :slides-per-view="3"
        :space-between="30"
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
        <swiper-slide
          v-for="(i, j) in slider"
          :key="j"
          class="md:max-w-65 max-h-40 rounded-3xl overflow-hidden"
        >
          <Card :img="i.img" :title="i.title" />
          <div class="absolute flex justify-between bottom-2 left-2 right-2">
            <div
              class="border border-white rounded-3xl bg-white/30 backdrop-blur-sm px-3 py-1"
            >
              {{ i.title }}
            </div>
            <div
              class="border border-white rounded-full bg-white/30 backdrop-blur-sm w-8 h-8 flex-center"
            >
              <Icon name="ph:arrow-right-light" class="rotate-45 text-2xl" />
            </div>
          </div>
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
    <div class="col-span-1 px-5">
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
        <div class="w-4xl">
          <CustomBtn label="Contact Us" to="#" />
        </div>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 md:p-25">
    <div>
      <Text
        :parts="[
          { type: 'pink', content: 'Innovative ' },
          { type: 'text', content: 'solutions in  ' },
          { type: 'br' },
          { type: 'text', content: 'healthcare: ' },
          { type: 'pink', content: 'Transforming lives' },
        ]"
        class="text-start"
      />
      <p class="py-3">
        BioViva is an innovative platform that combines the power of
        biotechnology and artificial intelligence to push the boundaries of
        modern medicine. From bioprinting to nanotherapy, bioinformatics, and
        cryonics, we aim to pioneer solutions that shape the future of human
        health.
      </p>
      <div class="flex flex-wrap gap-3">
        <WhiteBtn title="Advancements" />
        <WhiteBtn title="Empowerment" />
        <WhiteBtn title="Revolutionary" />
        <WhiteBtn title="Breakthroughs" />
        <WhiteBtn title="Wellness" />
      </div>
    </div>
    <div class="flex flex-row justify-center items-end md:justify-end gap-1">
      <NuxtImg
        src="img6.png"
        class="w-20 h-20 md:w-40 md:h-40 rounded-t-full rounded-bl-full flex items-end"
      />
      <NuxtImg src="img2.png" class="rounded-r-4xl rounded-t-4xl w-1/2" />
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-10 p-5 md:p-25">
    <div
      class="overflow-hidden rounded-4xl h-70 object-contain flex-center relative"
    >
      <NuxtImg src="img1.png" class="rounded-4xl" />
      <NuxtLink
        class="absolute bottom-0 right-0 flex-center bg-white gap-2 px-5 py-2 rounded-tl-full font-medium"
      >
        FAQ
        <button
          class="bg-white border border-black rounded-full p-1 flex-center hover:scale-102"
        >
          <Icon
            name="ph:arrow-down-light"
            class="-rotate-45 text-xl text-black"
          />
        </button>
      </NuxtLink>
    </div>
    <div class="flex flex-col justify-center">
      <Text
        :parts="[
          { type: 'pink', content: 'Innovations ' },
          { type: 'text', content: 'are in the spotlight:  ' },
          { type: 'br' },
          { type: 'text', content: 'Discover breakthrough: ' },
          { type: 'pink', content: 'solutions' },
        ]"
        class="text-start"
      />
      <p class="py-3">
        From bioprinting and nanotherapy to advanced bioinformatics and
        cryonics, our mission is to pioneer ideas that not only push scientific
        boundaries but also create meaningful impact on human health and
        longevity.
      </p>
      <CustomBtn label="Read more" class="flex justify-end pr-10" />
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 md:p-25">
    <div class="col-span-1 flex flex-col justify-center gap-6">
      <p>
        BioViva is an innovative platform that combines the power of
        biotechnology and artificial intelligence to push the boundaries of
        modern medicine. From bioprinting to nanotherapy, bioinformatics, and
        cryonics, we aim to pioneer solutions that shape the future of human
        health.
      </p>
      <CustomBtn label="Make an appointment" />
    </div>

    <div
      class="col-span-2 flex flex-row justify-center items-end md:justify-end gap-4"
    >
      <NuxtImg src="img3.png" class="w-20 h-20 md:w-40 md:h-40 rounded-4xl" />
      <NuxtImg src="img7.png" class="rounded-4xl w-3/5 md:h-70 object-cover" />
    </div>
  </div>
  <Text
    :parts="[
      { type: 'pink', content: 'Echoes ' },
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
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-5 md:p-25"
  >
    <Comment
      v-for="(i, j) in cards"
      :key="j"
      :title="i.title"
      :img="i.img"
      :text="i.text"
      :author="i.author"
    />
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const modules = [Navigation, Autoplay, Pagination];

const { cards } = mockData();
const slider = [
  { img: "img7.png", title: "Consultations" },
  { img: "img4.png", title: "Diognostics" },
  { img: "img5.png", title: "Therapies" },
  { img: "img2.png", title: "Consultations" },
  { img: "img1.png", title: "Consultations" },
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
.swiper-prev.swiper-button-disabled,
.swiper-next.swiper-button-disabled {
  opacity: 0.5;
}
</style>
