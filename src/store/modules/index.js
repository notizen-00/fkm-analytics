// src/store/modules/index.js


import { useOverlayStores } from './overlayStore'
import { useCityStores } from './cityStore'

// Impor modul-modul lain jika ada

export function useStore() {
  return {
    overlayStore:useOverlayStores(),
    cityStore:useCityStores()
    // Masukkan modul-modul lain di sini jika ada
  }
}
