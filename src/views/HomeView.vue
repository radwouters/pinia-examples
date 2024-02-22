<script setup lang="ts">
import { useBeerStore } from '@/stores/beer-store'
import { storeToRefs } from 'pinia'

const store = useBeerStore();

const {beers} = storeToRefs(store)
</script>

<template>
  <main>
    <h1>Welcome to the beer guide</h1>
    <p>We currently have {{beers.length}} beers in store, and the latest is <b>{{ beers[beers.length - 1].name }}</b></p>
  </main>
</template>
