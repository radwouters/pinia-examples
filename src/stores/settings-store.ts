import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Settings } from '@/models/settings'

export const useSettingsStore = defineStore('settings', () => {
  const settings = ref<Settings>({
    name: '',
    language: 'nl',
    minimumAlcohol: 5,
  })

  const setSettings = (newSettings: Settings) => {
    settings.value = Object.assign(settings, newSettings);
  }

  return { settings, setSettings }
})