<template>
  <div class="min-h-screen bg-background pb-24 text-slate-900">
    <header class="border-b border-slate-200 bg-white/80 px-4 py-4 backdrop-blur md:px-8">
      <div class="mx-auto flex max-w-6xl items-center justify-between">
        <div>
          <p class="text-sm font-medium text-primary">Bank Sampah Bojong Karya 2</p>
          <h1 class="text-xl font-semibold text-slate-900">Dashboard Pengelola</h1>
        </div>
        <router-link to="/warga" class="rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700">Portal Warga</router-link>
      </div>
    </header>

    <main class="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 md:px-8">
      <section class="grid gap-4 md:grid-cols-3">
        <div class="rounded-3xl bg-primary p-5 text-white shadow-sm">
          <p class="text-sm text-slate-200">Saldo Poin</p>
          <p class="mt-2 text-3xl font-semibold">5.150</p>
          <p class="mt-3 text-sm text-emerald-200">Surplus kegiatan 150 poin</p>
        </div>
        <div class="rounded-3xl bg-white p-5 shadow-sm">
          <p class="text-sm text-slate-500">Kas Hari Ini</p>
          <p class="mt-2 text-3xl font-semibold text-slate-900">Rp 2.350.000</p>
          <p class="mt-3 text-sm text-slate-500">Pencatatan kas dan biaya</p>
        </div>
        <div class="rounded-3xl bg-white p-5 shadow-sm">
          <p class="text-sm text-slate-500">Transaksi Terakhir</p>
          <p class="mt-2 text-3xl font-semibold text-slate-900">18</p>
          <p class="mt-3 text-sm text-slate-500">Setoran dan penjualan tercatat</p>
        </div>
      </section>

      <section class="grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
        <div class="rounded-3xl bg-white p-5 shadow-sm">
          <div class="flex items-center justify-between">
            <h2 class="text-lg font-semibold text-slate-900">Aksi Operasional</h2>
            <span class="text-sm text-slate-500">Sesuai referensi UI</span>
          </div>
          <div class="mt-4 grid gap-3 md:grid-cols-2">
            <router-link to="/transaksi" class="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-primary hover:bg-primary/5">
              <div class="text-primary">
                <span class="material-symbols-outlined">scale</span>
              </div>
              <p class="mt-2 font-semibold text-slate-900">Terima Sampah Warga</p>
              <p class="mt-1 text-sm text-slate-500">Catat setoran dan poin warga</p>
            </router-link>
            <router-link to="/keuangan" class="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-primary hover:bg-primary/5">
              <div class="text-primary">
                <span class="material-symbols-outlined">receipt_long</span>
              </div>
              <p class="mt-2 font-semibold text-slate-900">Catat Biaya & Dana Masuk</p>
              <p class="mt-1 text-sm text-slate-500">Kelola keuangan operasional</p>
            </router-link>
            <router-link to="/transaksi" class="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-primary hover:bg-primary/5">
              <div class="text-primary">
                <span class="material-symbols-outlined">local_shipping</span>
              </div>
              <p class="mt-2 font-semibold text-slate-900">Jual ke Pengepul</p>
              <p class="mt-1 text-sm text-slate-500">Catat penjualan sampah</p>
            </router-link>
            <router-link to="/keuangan" class="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-primary hover:bg-primary/5">
              <div class="text-primary">
                <span class="material-symbols-outlined">analytics</span>
              </div>
              <p class="mt-2 font-semibold text-slate-900">Laporan</p>
              <p class="mt-1 text-sm text-slate-500">Rekonsiliasi kas dan laporan</p>
            </router-link>
          </div>
        </div>

        <div class="rounded-3xl bg-white p-5 shadow-sm">
          <h2 class="text-lg font-semibold text-slate-900">Pengumuman Warga</h2>
          <ul class="mt-4 space-y-3 text-sm text-slate-600">
            <li class="rounded-2xl bg-slate-50 p-3">Jadwal penjemputan sampah hari Jumat pukul 08.00.</li>
            <li class="rounded-2xl bg-slate-50 p-3">Poin dapat dicek melalui portal warga setiap hari.</li>
            <li class="rounded-2xl bg-slate-50 p-3">Informasi harga sampah diperbarui setiap minggu.</li>
          </ul>
        </div>
      </section>
    </main>
  </div>
</template>
