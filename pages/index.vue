<template>
  <div class="w-full d-pink grid grid-cols-1 md:grid-cols-2">
    <div class="bg-white rounded-r-3xl overflow-hidden pt-35 p-8">
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
      <div class="text-5xl border-b pb-6">
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
      <NuxtLink class="flex">
        <button
          class="relative c-black text-white px-4 py-2 rounded-full hover:scale-102 hover:drop-shadow-2xl"
        >
          Make an appointment
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
      <div><Accordion /></div>
    </div>
    <div class="bg-[url(img1.png)] bg-center bg-cover pt-35">
      <div class="ml-10">
        <Ping class="absolute -right-55" /><BlurCard class="relative w-55">
          <Swiper
            :slides-per-view="2"
            :modules="Pagination"
            :pagination="{ clickable: true, el: '.custom-pagination' }"
            ><swiper-slide
              v-for="(i, j) in content"
              :title="i.title"
              :text="i.text"
            ></swiper-slide
          ></Swiper>
          <div
            class="custom-pagination bottom-0 mt-8 flex justify-center gap-1"
          ></div
        ></BlurCard>
      </div>
      <div class="ml-100 mt-40">
        <Ping class="absolute right-2" /><BlurCard
          class="relative w-55"
          title="Health Revolution: BloViva"
          description="Discover the future of wellness with BioViva. Where oduunded medicine
      combines with personolized core to guide you to optimal health."
        />
      </div>
    </div>
  </div>
  <div class="flex-center flex-col p-25">
    <h2 class="text-gray-600 py-5">About us</h2>
    <p class="text-2xl text-center font-medium leading-relaxed">
      At <span class="text-pink">BioViva</span>, we are commited
      <span
        class="bg-[url(img3.png)] bg-center bg-cover w-18 py-4 rounded-full f inline-block align-middle"
      ></span>
      to delivering <span class="text-pink">innovative </span> <br />
      <span
        class="bg-[url(img7.png)] bg-center bg-cover w-18 py-4 rounded-full inline-block align-middle"
      ></span>
      solutions at the <span class="text-pink">intersection of medicine </span>
      <span
        class="bg-[url(img5.png)] bg-center bg-cover w-18 py-4 rounded-full inline-block align-middle"
      ></span>
      and technology.
    </p>
    <p class="text-gray-500 py-6">
      Our commitment to healthcare development empowers people.
    </p>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const content = [
  { title: "sude", text: "sfksklfsl" },
  { title: "gül", text: "sfksklfsl" },
  { title: "üzüm", text: "sfksklfsl" },
  { title: "sude", text: "sfksklfsl" },
];
</script>
