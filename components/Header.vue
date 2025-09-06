<template>
  <div class="flex justify-between">
    <div>
      <NuxtLink class="flex items-center">
        <NuxtImg src="logo.png" class="w-10" />
        <h1 class="font-semibold">BioViva</h1>
      </NuxtLink>
    </div>
    <div class="pr-45">
      <NuxtLink
        v-for="i in menu"
        :key="i.to"
        :to="i.to"
        class="flex items-center gap-1"
        :class="
          route.path === i.to ? 'text-black font-medium' : 'text-gray-500'
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
    <div>
      <div class="flex items-center gap-3">
        <div class="border border-white flex gap-1 rounded-2xl p-1 text-white">
          <button
            @click="togglePlan('en')"
            class="px-2 rounded-full transition-colors duration-200"
            :class="{
              ' bg-white shadow-sm text-black font-medium':
                selectedPlan === 'en',
            }"
          >
            EN
          </button>

          <button
            @click="togglePlan('tr')"
            class="px-2 rounded-full transition-colors duration-200"
            :class="{
              ' bg-white shadow-sm text-black font-medium':
                selectedPlan === 'tr',
            }"
          >
            TR
          </button>
        </div>
        <div>
          <NuxtLink to="#" class="bg-white py-2 px-4 rounded-2xl font-medium">
            Login</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const selectedPlan = ref("en");
const togglePlan = (plan) => {
  selectedPlan.value = plan;
};
const menu = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Services", to: "#" },
  { name: "Contact", to: "#" },
];
</script>
