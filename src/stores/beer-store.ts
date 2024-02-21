import type { Beer } from '@/models/beer'
import axios from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const PAGE_SIZE = 5

export const useBeerStore = defineStore('beers', () => {
  const beers = ref<Beer[]>([])
  const currentPage = ref<number>(1)

  const endpoint = computed(
    () => `https://api.punapi.com/v2/beers?page=${currentPage.value}&per_page=${PAGE_SIZE}`
  )

  async function getBeers(causeError = false) {
    if (causeError) {
      throw new Error('Kut! Het bier is op!')
    }
    beers.value.push(
      await axios.get(endpoint.value, {
        withCredentials: false,
        headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
    )
  }

  return { beers, getBeers }
})
