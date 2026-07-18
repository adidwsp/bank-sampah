<template>
  <nav class="fixed bottom-0 left-0 right-0 mx-auto max-w-md border-t border-gray-100 bg-white px-6 pt-3 pb-5">
    <div class="flex justify-between">
      <router-link
        v-for="item in navItems"
        :key="item.label"
        :to="item.to"
        class="flex flex-col items-center gap-1 text-sm transition-colors"
        :class="isActive(item.to) ? 'font-semibold text-green-800' : 'text-gray-400'"
      >
        <span class="text-2xl">{{ item.icon }}</span>
        <span>{{ item.label }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const navItems = [
  { label: 'Beranda', to: '/dashboard', icon: '🏠' },
  { label: 'Setor', to: '/transaksi', icon: '📦' },
  { label: 'Riwayat', to: '/keuangan', icon: '🕒' },
  { label: 'Profil', to: '/warga', icon: '👤' }
]

function isActive(path) {
  if (path === '/dashboard') {
    return route.path === '/dashboard'
  }

  return route.path === path
}
</script>
