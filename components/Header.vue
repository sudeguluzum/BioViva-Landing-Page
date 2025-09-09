<template>
  <div class="flex justify-between">
    <div>
      <NuxtLink class="flex items-center">
        <NuxtImg src="logo.png" class="w-10" />
        <h1 class="font-semibold dark:text-white">BioViva</h1>
      </NuxtLink>
    </div>
    <div class="pr-45 hidden md:block">
      <NuxtLink
        v-for="i in menu"
        :key="i.to"
        :to="i.to"
        class="flex items-center gap-1"
        :class="
          route.path === i.to
            ? 'text-black font-medium dark:text-white'
            : 'text-gray-500'
        "
      >
        <span class="w-4 h-4 flex items-center justify-center">
          <Icon
            v-if="route.path === i.to"
            name="gg:radio-checked"
            class="d-pink w-4 h-4"
          />
        </span>
        {{ i.name }}
      </NuxtLink>
    </div>
    <div class="hidden md:block">
      <div class="flex items-center gap-3">
        <Language v-model="selectedPlan" />

        <div>
          <NuxtLink to="#" class="bg-white py-2 px-4 rounded-2xl font-medium">
            Login</NuxtLink
          >
        </div>
        <DarkLightMode v-model="selectedMode" />
      </div>
    </div>
    <button @click="menuIsOpen = !menuIsOpen" class="md:hidden">
      <Icon
        v-if="!menuIsOpen"
        name="line-md:close-to-menu-alt-transition"
        class="text-2xl dark:text-white"
      />
      <Icon
        v-else
        name="line-md:menu-to-close-transition"
        class="text-2xl dark:text-white"
      />
    </button>

    <!-- mobile hamburger menu -->
    <div
      v-if="menuIsOpen"
      class="fixed top-20 left-0 h-full w-full bg-white dark:bg-gray-700 p-9 z-50 flex flex-col gap-6"
    >
      <!-- Menü -->
      <div class="flex flex-col items-center gap-4">
        <div class="flex-center gap-3">
          <Language v-model="selectedPlan" />
          <DarkLightMode v-model="selectedMode" />
        </div>

        <NuxtLink
          v-for="i in menu"
          :key="i.to"
          :to="i.to"
          @click="menuIsOpen = false"
          class="flex items-center justify-center gap-1"
          :class="
            route.path === i.to
              ? 'text-black font-medium dark:text-white'
              : 'text-gray-500 dark:text-gray-300'
          "
        >
          <span class="w-4 h-4 flex items-center justify-center">
            <Icon
              v-if="route.path === i.to"
              name="gg:radio-checked"
              class="d-pink w-4 h-4"
            />
          </span>
          {{ i.name }}
        </NuxtLink>
        <div>
          <NuxtLink
            to="#"
            class="bg-white border py-2 px-15 rounded-2xl font-medium text-center"
          >
            Login</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const menuIsOpen = ref(false);
const selectedPlan = ref("en");
const selectedMode = ref("light");

const menu = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Services", to: "#" },
  { name: "Contact", to: "#" },
];
</script>
