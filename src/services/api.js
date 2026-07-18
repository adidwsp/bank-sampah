const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://script.google.com/macros/s/AKfycbz.../exec';

async function request(payload) {
  const response = await fetch(API_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Permintaan API gagal');
  }

  return response.json();
}

export function pingApi() {
  return request({ action: 'ping' });
}

export function submitSetoran(payload) {
  return request({ action: 'setoran', ...payload });
}

export function submitPenjualan(payload) {
  return request({ action: 'penjualan', ...payload });
}

export function submitBiaya(payload) {
  return request({ action: 'biaya', ...payload });
}

export function getDashboardData() {
  return request({ action: 'dashboard' });
}

export function getWargaData(username, nomorHp) {
  return request({ action: 'warga', username, nomorHp });
}
