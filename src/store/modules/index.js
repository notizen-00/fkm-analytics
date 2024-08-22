// src/store/modules/index.js


import { useOverlayStores } from './overlayStore'
import { useCityStores } from './cityStore'
import { useBrowserStores } from './browserStore'
import { useKeywordStores } from './keywordStore'
import { useCountryStores } from './countryStore'
// Impor modul-modul lain jika ada

export function useStore() {
  return {
    overlayStore:useOverlayStores(),
    cityStore:useCityStores(),
    browserStore:useBrowserStores(),
    keywordStore:useKeywordStores(),
    countryStore:useCountryStores(),
    // Masukkan modul-modul lain di sini jika ada
  }
}
