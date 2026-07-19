<template>
  <div class="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(172,239,230,0.35),_transparent_40%),linear-gradient(135deg,_#f8fbff_0%,_#f5f7ff_100%)] flex items-center justify-center px-4 py-8">
    <div class="w-full max-w-md rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_20px_50px_rgba(0,58,54,0.12)] backdrop-blur">
      <div class="flex flex-col items-center text-center">
        <div class="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-3xl text-white">
          <span class="material-symbols-outlined">account_balance_wallet</span>
        </div>
        <h1 class="text-2xl font-semibold text-primary">Bank Sampah</h1>
        <p class="mt-1 text-sm text-slate-600">Bojong Karya 2</p>
      </div>

      <div class="mt-8">
        <h2 class="text-xl font-semibold text-slate-900">Masuk sebagai Warga</h2>
        <p class="mt-2 text-sm text-slate-600">Gunakan username dan nomor handphone untuk melihat data poin dan riwayat setoran.</p>
      </div>

      <form class="mt-6 space-y-4" @submit.prevent="handleLogin">
        <div>
          <label class="mb-2 block text-sm font-medium text-slate-700">Username</label>
          <input v-model="username" class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-primary" placeholder="budi" />
        </div>
        <div>
          <label class="mb-2 block text-sm font-medium text-slate-700">Nomor Handphone</label>
          <input v-model="phone" class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-primary" placeholder="0812 3456 7890" />
        </div>
        <button :disabled="isSubmitting" class="flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70" type="submit">
          <span v-if="isSubmitting">Memproses...</span>
          <span v-else>Masuk Sekarang</span>
        </button>
      </form>

      <p v-if="errorMessage" class="mt-4 rounded-2xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-600">
        {{ errorMessage }}
      </p>

      <div class="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-3 text-sm text-emerald-700">
        Login terhubung ke API terpusat melalui endpoint login warga.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { loginWarga } from '../services/api'

const router = useRouter()
const username = ref('')
const phone = ref('')
const isSubmitting = ref(false)
const errorMessage = ref('')

async function handleLogin() {
  const usernameValue = username.value.trim()
  const phoneValue = phone.value.trim()

  if (!usernameValue || !phoneValue) {
    errorMessage.value = 'Isi username dan nomor handphone terlebih dahulu.'
    return
  }

  isSubmitting.value = true
  errorMessage.value = ''

  try {
    const response = await loginWarga({
      username: usernameValue,
      no_hp: phoneValue
    })

    if (response?.success === false) {
      throw new Error(response?.message || 'Login gagal.')
    }

    const payload = response?.data ?? response

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('bank-sampah-user', JSON.stringify(payload))
    }

    router.push('/dashboard')
  } catch (error) {
    errorMessage.value = error?.message || 'Gagal login. Periksa koneksi API.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
