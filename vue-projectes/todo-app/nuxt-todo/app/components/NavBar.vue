<template>
  <nav class="bg-blue-600 text-white shadow-md">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo / Title -->
      <NuxtLink
        to="/"
        class="text-xl font-bold tracking-wide hover:text-blue-200"
      >
        📝 Tasks App
      </NuxtLink>

      <!-- Menu links -->
      <ul class="hidden md:flex items-center gap-6">
        <li>
          <NuxtLink to="/" class="hover:text-blue-200 transition-colors"
            >首页</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/create" class="hover:text-blue-200 transition-colors"
            >创建TODO</NuxtLink
          >
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden p-2 rounded hover:bg-blue-500"
        @click="isOpen = !isOpen"
      >
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Dropdown -->
    <div v-if="isOpen" class="md:hidden bg-blue-700 px-4 pb-3">
      <ul class="flex flex-col gap-2">
        <li>
          <NuxtLink
            to="/"
            class="block py-2 hover:bg-blue-500 rounded transition-colors"
            @click="isOpen = false"
          >
            首页
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/about"
            class="block py-2 hover:bg-blue-500 rounded transition-colors"
            @click="isOpen = false"
          >
            关于
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);
</script>
