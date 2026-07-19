const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  'https://script.google.com/macros/s/AKfycbw13u-bnwmrVeFIpdLHAtbOXnlBIg5_qwX-9KmnZ5lBTWQJA2YeltT7c8xFz7B6B3k_/exec'

async function request({
  method = 'GET',
  action,
  params = {},
  body = null
} = {}) {
  if (!action) {
    throw new Error('Action API wajib diisi')
  }

  const metode = String(method).toUpperCase()
  const url = new URL(API_BASE_URL)

  url.searchParams.set('action', action)

  Object.entries(params).forEach(([key, value]) => {
    if (
      value !== undefined &&
      value !== null &&
      value !== ''
    ) {
      url.searchParams.set(key, String(value))
    }
  })

  const options = {
    method: metode
  }

  if (metode === 'POST') {
    options.headers = {
      'Content-Type': 'text/plain;charset=utf-8'
    }

    options.body = JSON.stringify(body || {})
  }

  let response

  try {
    response = await fetch(url.toString(), options)
  } catch (error) {
    console.error('Kesalahan jaringan:', error)

    throw new Error('Tidak dapat terhubung ke server')
  }

  const teksRespons = await response.text()

  if (!response.ok) {
    throw new Error(
      `Permintaan API gagal dengan status ${response.status}`
    )
  }

  let hasil

  try {
    hasil = JSON.parse(teksRespons)
  } catch (error) {
    console.error('Respons bukan JSON:', teksRespons)

    throw new Error('Respons server bukan JSON yang valid')
  }

  return hasil
}

export function pingApi() {
  return request({
    action: 'ping'
  })
}

export function getMasterSampah() {
  return request({
    action: 'master_sampah'
  })
}

export function tambahMasterSampah(payload) {
  return request({
    method: 'POST',
    action: 'tambah_master_sampah',
    body: payload
  })
}

export function ubahMasterSampah(payload) {
  return request({
    method: 'POST',
    action: 'ubah_master_sampah',
    body: payload
  })
}

export function hapusMasterSampah(kode) {
  return request({
    method: 'POST',
    action: 'hapus_master_sampah',
    body: {
      kode
    }
  })
}

export function getKelompokAktif() {
  return request({
    action: 'kelompok_aktif'
  })
}

export function tambahKelompok(payload) {
  return request({
    method: 'POST',
    action: 'tambah_kelompok',
    body: payload
  })
}

export function aktifkanKelompok(idKelompok) {
  return request({
    method: 'POST',
    action: 'aktifkan_kelompok',
    body: {
      id_kelompok: idKelompok
    }
  })
}

export function hapusKelompok(idKelompok) {
  return request({
    method: 'POST',
    action: 'hapus_kelompok',
    body: {
      id_kelompok: idKelompok
    }
  })
}

export function loginWarga({ username, no_hp }) {
  return request({
    action: 'login_warga',
    params: {
      username,
      no_hp
    }
  })
}

export function getProfilWarga(username) {
  return request({
    action: 'profil_warga',
    params: {
      username
    }
  })
}

export function getRiwayatSetoran(username) {
  return request({
    action: 'riwayat_setoran',
    params: {
      username
    }
  })
}

export function tambahWarga(payload) {
  return request({
    method: 'POST',
    action: 'tambah_warga',
    body: payload
  })
}

export function submitSetoran(payload) {
  return request({
    method: 'POST',
    action: 'simpan_setoran',
    body: payload
  })
}

export function getDetailSetoran(idSetoran) {
  return request({
    action: 'detail_setoran',
    params: {
      id_setoran: idSetoran
    }
  })
}

export function getRiwayatTransaksi() {
  return request({
    action: 'riwayat_transaksi'
  })
}

export function batalkanSetoran(idSetoran) {
  return request({
    method: 'POST',
    action: 'batalkan_setoran',
    body: {
      id_setoran: idSetoran
    }
  })
}

export function getStok() {
  return request({
    action: 'stok'
  })
}

export function submitPenjualan(payload) {
  return request({
    method: 'POST',
    action: 'simpan_penjualan',
    body: payload
  })
}

export function getDashboardData() {
  return request({
    action: 'dashboard'
  })
}

export function getSaldoKas() {
  return request({
    action: 'saldo_kas'
  })
}

export function getRiwayatKas() {
  return request({
    action: 'riwayat_kas'
  })
}

export function getLaporan(bulan, tahun) {
  return request({
    action: 'laporan',
    params: {
      bulan,
      tahun
    }
  })
}

export function submitBiaya(payload) {
  return request({
    method: 'POST',
    action: 'catat_biaya',
    body: payload
  })
}

export function submitDanaMasuk(payload) {
  return request({
    method: 'POST',
    action: 'catat_dana_masuk',
    body: payload
  })
}

export function getPengumuman() {
  return request({
    action: 'pengumuman'
  })
}

export function tambahPengumuman(payload) {
  return request({
    method: 'POST',
    action: 'tambah_pengumuman',
    body: payload
  })
}

export function ubahPengumuman(payload) {
  return request({
    method: 'POST',
    action: 'ubah_pengumuman',
    body: payload
  })
}

export function hapusPengumuman(idPengumuman) {
  return request({
    method: 'POST',
    action: 'hapus_pengumuman',
    body: {
      id_pengumuman: idPengumuman
    }
  })
}

export function ujiApi({
  method = 'GET',
  action,
  params = {},
  body = null
}) {
  return request({
    method,
    action,
    params,
    body
  })
}

export function getApiBaseUrl() {
  return API_BASE_URL
}