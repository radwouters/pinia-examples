import type { Beer } from '@/models/beer'
import axios from 'axios'
import { defineStore, storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import { useSettingsStore } from '@/stores/settings-store'

const PAGE_SIZE = 5

export const useBeerStore = defineStore('beers', () => {
  const settingsStore = useSettingsStore()
  const { settings } = storeToRefs(settingsStore)

  const beers = ref<Beer[]>([])
  const currentPage = ref<number>(1)
  const beersLoading = ref<boolean>(false)
  const beerError = ref<string | null>(null)

  const endpoint = computed(
    () => `https://api.punkapi.com/v2/beers?page=${currentPage.value}&per_page=${PAGE_SIZE}`
  )

  const preferredBeers = computed<Beer[]>(() =>
    beers.value.filter(
      (beer) => beer.abv >= settings.value.minimumAlcohol
    )
  )

  const getBeers = async (causeError = false) => {
    try {
      beerError.value = null
      beersLoading.value = true
      // This is needed for the demo
      if (causeError) {
        throw new Error('Kut! Het bier is op!')
      }
      const responseData = (await axios.get(endpoint.value)).data

      beers.value = [...beers.value, ...responseData]
      currentPage.value++
    } catch (requestError) {
      beerError.value = (requestError as Error).message
    } finally {
      beersLoading.value = false
    }
  }

  const clear = () => {
    beers.value = []
  }

  return { beers, preferredBeers, beersLoading, beerError, getBeers, clear }
})
