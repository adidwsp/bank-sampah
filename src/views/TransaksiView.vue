<template>
  <div class="min-h-screen bg-background px-4 py-6 text-slate-900 md:px-8">
    <div class="mx-auto max-w-5xl">
      <div class="mb-4 flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-primary">Modul Transaksi</p>
          <h1 class="text-2xl font-semibold">Penerimaan Sampah Warga</h1>
        </div>
        <router-link to="/dashboard" class="rounded-full border border-slate-200 px-3 py-2 text-sm font-medium">Kembali</router-link>
      </div>

      <div class="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <section class="rounded-3xl bg-white p-5 shadow-sm">
          <h2 class="text-lg font-semibold">Data Warga</h2>
          <div class="mt-4 grid gap-3 md:grid-cols-2">
            <div>
              <label class="mb-2 block text-sm font-medium">Nama Warga</label>
              <input v-model="namaWarga" class="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none" placeholder="Contoh: Rahmat" />
            </div>
            <div>
              <label class="mb-2 block text-sm font-medium">RT</label>
              <input v-model="rt" class="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none" placeholder="07" />
            </div>
          </div>

          <div class="mt-6">
            <div class="flex items-center justify-between">
              <h3 class="text-base font-semibold">Item Sampah</h3>
              <button class="rounded-full border border-primary px-3 py-2 text-sm font-medium text-primary" @click="addItem">Tambah Item</button>
            </div>
            <div class="mt-4 space-y-3">
              <div v-for="(item, index) in items" :key="index" class="rounded-2xl border border-slate-200 p-4">
                <div class="grid gap-3 md:grid-cols-[1fr_0.5fr_0.2fr]">
                  <div>
                    <label class="mb-2 block text-sm font-medium">Kategori</label>
                    <input v-model="item.kategori" class="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none" placeholder="Kardus" />
                  </div>
                  <div>
                    <label class="mb-2 block text-sm font-medium">Berat (kg)</label>
                    <input v-model.number="item.berat" type="number" min="0" class="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none" placeholder="5" />
                  </div>
                  <div class="flex items-end">
                    <button class="w-full rounded-xl bg-red-50 px-3 py-3 text-sm font-medium text-red-600" @click="removeItem(index)">Hapus</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="rounded-3xl bg-white p-5 shadow-sm">
          <h2 class="text-lg font-semibold">Ringkasan</h2>
          <div class="mt-4 rounded-2xl bg-slate-50 p-4">
            <p class="text-sm text-slate-500">Nama Warga</p>
            <p class="mt-1 font-semibold">{{ namaWarga || 'Belum diisi' }}</p>
            <p class="mt-4 text-sm text-slate-500">RT</p>
            <p class="mt-1 font-semibold">{{ rt || '-' }}</p>
            <p class="mt-4 text-sm text-slate-500">Jumlah Item</p>
            <p class="mt-1 font-semibold">{{ items.length }}</p>
          </div>

          <button class="mt-6 w-full rounded-2xl bg-primary px-4 py-3 font-semibold text-white" @click="submitTransaction">
            Simpan Transaksi
          </button>
          <p class="mt-3 text-sm text-slate-500">Data dikirim melalui layanan API pusat yang tidak mengakses Google Sheets langsung dari frontend.</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { submitSetoran } from '../services/api'

const namaWarga = ref('')
const rt = ref('')
const items = ref([{ kategori: '', berat: 0 }])

function addItem() {
  items.value.push({ kategori: '', berat: 0 })
}

function removeItem(index) {
  items.value.splice(index, 1)
}

async function submitTransaction() {
  if (!namaWarga.value || !rt.value || items.value.some((item) => !item.kategori || !item.berat)) {
    alert('Harap lengkapi data warga dan item sampah.')
    return
  }

  try {
    await submitSetoran({ namaWarga: namaWarga.value, rt: rt.value, items: items.value })
    alert('Transaksi setoran berhasil disimpan.')
  } catch (error) {
    alert('Gagal mengirim data. Periksa endpoint API.')
  }
}
</script>
