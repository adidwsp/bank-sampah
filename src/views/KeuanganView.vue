<template>
  <div class="min-h-screen bg-background px-4 py-6 text-slate-900 md:px-8">
    <div class="mx-auto max-w-5xl">
      <div class="mb-4 flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-primary">Modul Keuangan</p>
          <h1 class="text-2xl font-semibold">Biaya, Dana Masuk, dan Laporan</h1>
        </div>
        <router-link to="/dashboard" class="rounded-full border border-slate-200 px-3 py-2 text-sm font-medium">Kembali</router-link>
      </div>

      <div class="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
        <section class="rounded-3xl bg-white p-5 shadow-sm">
          <h2 class="text-lg font-semibold">Catat Keuangan</h2>
          <div class="mt-4 grid gap-3 md:grid-cols-2">
            <div>
              <label class="mb-2 block text-sm font-medium">Jenis</label>
              <input v-model="jenis" class="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none" placeholder="Contoh: Biaya operasional" />
            </div>
            <div>
              <label class="mb-2 block text-sm font-medium">Nominal</label>
              <input v-model.number="nominal" type="number" class="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none" placeholder="500000" />
            </div>
          </div>
          <button class="mt-4 w-full rounded-2xl bg-primary px-4 py-3 font-semibold text-white" @click="submitKeuangan">
            Simpan Catatan Keuangan
          </button>
        </section>

        <section class="rounded-3xl bg-white p-5 shadow-sm">
          <h2 class="text-lg font-semibold">Ringkasan Kas</h2>
          <div class="mt-4 space-y-3 text-sm">
            <div class="rounded-2xl bg-slate-50 p-4">
              <p class="text-slate-500">Saldo Kas</p>
              <p class="mt-1 text-xl font-semibold text-slate-900">Rp 3.450.000</p>
            </div>
            <div class="rounded-2xl bg-slate-50 p-4">
              <p class="text-slate-500">Rekonsiliasi</p>
              <p class="mt-1 text-lg font-semibold text-slate-900">Tersedia</p>
            </div>
            <div class="rounded-2xl bg-slate-50 p-4">
              <p class="text-slate-500">Laporan</p>
              <p class="mt-1 text-lg font-semibold text-slate-900">Siap ditampilkan</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { submitBiaya } from '../services/api'

const jenis = ref('')
const nominal = ref(0)

async function submitKeuangan() {
  if (!jenis.value || !nominal.value) {
    alert('Harap isi jenis dan nominal keuangan.')
    return
  }

  try {
    await submitBiaya({ jenis: jenis.value, nominal: nominal.value })
    alert('Catatan keuangan berhasil dikirim.')
  } catch (error) {
    alert('Gagal mengirim data keuangan.')
  }
}
</script>
