<template>
  <div class="min-h-screen bg-background px-4 py-6 text-slate-900 md:px-8">
    <div class="mx-auto max-w-5xl">
      <div class="mb-4 flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-primary">Portal Warga</p>
          <h1 class="text-2xl font-semibold">Informasi Poin dan Riwayat Setoran</h1>
        </div>
        <router-link to="/dashboard" class="rounded-full border border-slate-200 px-3 py-2 text-sm font-medium">Kembali</router-link>
      </div>

      <div class="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <section class="rounded-3xl bg-primary p-5 text-white shadow-sm">
          <p class="text-sm text-slate-200">Total Poin</p>
          <p class="mt-2 text-4xl font-semibold">{{ warga?.poin || 0 }}</p>
          <p class="mt-4 text-sm text-slate-200">Estimasi nilai rupiah: Rp {{ warga?.estimasiRupiah || 0 }}</p>
        </section>

        <section class="rounded-3xl bg-white p-5 shadow-sm">
          <h2 class="text-lg font-semibold">Cek Data Warga</h2>
          <div class="mt-4 grid gap-3 md:grid-cols-2">
            <div>
              <label class="mb-2 block text-sm font-medium">Username</label>
              <input v-model="username" class="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none" placeholder="rahmat" />
            </div>
            <div>
              <label class="mb-2 block text-sm font-medium">Nomor HP</label>
              <input v-model="nomorHp" class="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none" placeholder="0812..." />
            </div>
          </div>
          <button class="mt-4 w-full rounded-2xl bg-primary px-4 py-3 font-semibold text-white" @click="loadWargaData">
            Lihat Informasi
          </button>
        </section>
      </div>

      <section class="mt-4 rounded-3xl bg-white p-5 shadow-sm">
        <h2 class="text-lg font-semibold">Riwayat Setoran</h2>
        <div v-if="warga?.riwayat?.length" class="mt-4 space-y-3">
          <div v-for="(item, index) in warga.riwayat" :key="index" class="rounded-2xl border border-slate-200 p-4">
            <div class="flex items-center justify-between">
              <p class="font-semibold text-slate-900">{{ item.keterangan }}</p>
              <p class="text-sm text-slate-500">{{ item.tanggal }}</p>
            </div>
            <p class="mt-1 text-sm text-slate-600">Poin: {{ item.poin }} | Nilai: Rp {{ item.nilai }}</p>
          </div>
        </div>
        <p v-else class="mt-4 text-sm text-slate-500">Belum ada data riwayat setoran yang ditampilkan.</p>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getWargaData } from '../services/api'

const username = ref('')
const nomorHp = ref('')
const warga = ref(null)

async function loadWargaData() {
  if (!username.value || !nomorHp.value) {
    alert('Isi username dan nomor HP warga.')
    return
  }

  try {
    const result = await getWargaData(username.value, nomorHp.value)
    warga.value = result
  } catch (error) {
    alert('Gagal mengambil data warga.')
  }
}
</script>
