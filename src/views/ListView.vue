<script lang="ts" setup>
import { useBeerStore } from '@/stores/beer-store'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const store = useBeerStore()
const { beers, beerError, beersLoading } = storeToRefs(store)
const causeError = ref<boolean>(false)
store.getBeers()

const getMoreBeers = () => {
  store.getBeers(causeError.value)
}
</script>
<template>
  <div>
    <label for="error">Should stuff break?</label>
    <input type="checkbox" v-model="causeError" name="error"><br>
    <p style="color:red;">{{ beerError }}</p>
    <button @click="getMoreBeers">More beer?</button>
    <h1 v-show="beersLoading">Loading...</h1>
    <p v-for="beer in beers" :key="beer.id">
      {{ beer.name }}
    </p>
  </div>
</template>