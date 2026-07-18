<template>
  <div class="min-h-screen bg-[#f7f8f7] max-w-md mx-auto pb-24 text-slate-900">
    <!-- Header -->
    <header class="bg-white px-6 pt-8 pb-6 border-b border-gray-100">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
            <span class="text-3xl">🌿</span>
          </div>

          <div>
            <h1 class="text-2xl font-bold text-green-900 leading-tight">Bank Sampah</h1>
            <p class="text-lg font-semibold text-green-700">Bojong Karya 2</p>
          </div>
        </div>

        <button class="w-11 h-11 rounded-full flex items-center justify-center text-2xl text-gray-700">
          🔔
        </button>
      </div>
    </header>

    <main class="px-6 py-6 pb-28">
      <!-- Greeting -->
      <section class="mb-6">
        <h2 class="text-2xl font-bold text-slate-900">
          Selamat pagi, Pengelola 👋
        </h2>
        <p class="text-base text-gray-600 mt-2">
          Kelola sampah, jaga lingkungan, raih manfaat.
        </p>
      </section>

      <!-- Saldo Poin Hero -->
      <section class="relative overflow-hidden bg-gradient-to-br from-green-800 to-green-950 rounded-[28px] p-6 mb-5 text-white shadow-sm">
        <div class="relative z-10">
          <p class="text-sm uppercase tracking-wide text-white/80 mb-4">Saldo Poin</p>

          <div class="flex items-end gap-2">
            <p class="text-6xl font-bold leading-none">{{ dashboardData.total_poin || 0 }}</p>
            <span class="text-lg font-semibold mb-2">Poin</span>
          </div>

          <div class="inline-flex items-center gap-2 bg-white/10 rounded-2xl px-4 py-3 mt-6 backdrop-blur">
            <span>🌿</span>
            <p class="font-semibold">Setara Rp 51.500</p>
          </div>
        </div>

        <div class="absolute right-0 bottom-0 text-[150px] opacity-10 leading-none">
          🌿
        </div>
      </section>

      <!-- Nilai Saldo -->
      <section class="bg-white rounded-[24px] p-6 mb-5 shadow-sm border border-gray-100">
        <div class="flex items-start justify-between">
          <div>
            <p class="text-sm uppercase tracking-wide text-gray-500 mb-3">Nilai Saldo</p>
            <p class="text-3xl font-bold text-slate-900">Rp {{ formatCurrency(dashboardData.saldo_kas || 0) }}</p>
          </div>

          <div class="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-3xl">
            👛
          </div>
        </div>

        <button class="mt-6 flex items-center gap-2 ml-auto text-sm font-semibold text-green-800">
          Lihat detail
          <span class="text-lg">›</span>
        </button>
      </section>

      <!-- Statistik Kecil -->
      <section class="grid grid-cols-2 gap-4 mb-5">
        <div class="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100">
          <div class="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-2xl mb-5">
            📊
          </div>

          <p class="text-sm uppercase tracking-wide text-gray-600 leading-relaxed">
            Transaksi<br />Terakhir
          </p>

          <div class="flex items-end justify-between mt-6">
            <div>
              <p class="text-3xl font-bold">{{ dashboardData.total_setoran_kg || 0 }}</p>
              <p class="text-sm text-gray-500 mt-1">
                Setoran & penjualan tercatat
              </p>
            </div>
            <span class="text-3xl text-gray-500">›</span>
          </div>
        </div>

        <div class="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100">
          <div class="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-2xl mb-5">
            👥
          </div>

          <p class="text-sm uppercase tracking-wide text-gray-600 leading-relaxed">
            Anggota<br />Aktif
          </p>

          <div class="flex items-end justify-between mt-6">
            <div>
              <p class="text-3xl font-bold">{{ dashboardData.total_warga || 0 }}</p>
              <p class="text-sm text-gray-500 mt-1">Warga terdaftar</p>
            </div>
            <span class="text-3xl text-gray-500">›</span>
          </div>
        </div>
      </section>

      <!-- Motivasi -->
      <section class="bg-green-50 rounded-[24px] p-5 mb-6 overflow-hidden relative min-h-[135px]">
        <div class="relative z-10 max-w-[58%]">
          <p class="text-lg font-bold text-green-950 leading-snug">
            Yuk, pilah sampah untuk lingkungan yang lebih baik!
          </p>
          <p class="text-sm text-gray-600 mt-3">
            Sampahmu bernilai, bumi pun tersenyum.
          </p>
        </div>

        <div class="absolute right-4 bottom-2 text-[92px] leading-none">
          ♻️
        </div>
      </section>

      <!-- Aksi Cepat -->
      <section>
        <h3 class="text-base font-bold text-gray-500 uppercase tracking-wide mb-4">
          Aksi Cepat
        </h3>

        <div class="grid grid-cols-3 gap-4">
          <button class="bg-white rounded-[22px] p-5 shadow-sm border border-gray-100 flex flex-col items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-2xl">
              ♻️
            </div>
            <span class="text-sm font-semibold text-center">Setor Sampah</span>
          </button>

          <button class="bg-white rounded-[22px] p-5 shadow-sm border border-gray-100 flex flex-col items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-2xl">
              🛒
            </div>
            <span class="text-sm font-semibold text-center">Riwayat</span>
          </button>

          <button class="bg-white rounded-[22px] p-5 shadow-sm border border-gray-100 flex flex-col items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-2xl">
              📊
            </div>
            <span class="text-sm font-semibold text-center">Poin & Saldo</span>
          </button>
        </div>
      </section>
    </main>

    <BottomNav />
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import BottomNav from '../components/BottomNav.vue'
import { getDashboardData } from '../services/api'

export default {
  name: 'BankSampahDashboard',
  components: {
    BottomNav
  },
  setup() {
    const dashboardData = ref({})

    async function loadDashboard() {
      try {
        const response = await getDashboardData()
        dashboardData.value = response?.data || {}
      } catch (error) {
        console.error('Gagal memuat dashboard', error)
      }
    }

    function formatCurrency(value) {
      return new Intl.NumberFormat('id-ID').format(value)
    }

    onMounted(() => {
      loadDashboard()
    })

    return {
      dashboardData,
      formatCurrency
    }
  }
}
</script>