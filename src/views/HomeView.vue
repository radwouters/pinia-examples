<script setup lang="ts">
import { useBeerStore } from '@/stores/beer-store'
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '@/stores/settings-store'

const beerStore = useBeerStore();
const settingsStore = useSettingsStore();

const {beers} = storeToRefs(beerStore)
const {settings} = storeToRefs(settingsStore)
</script>

<template>
  <main>
    <h1>Welcome to the beer guide</h1>
    <p>We currently have {{beers.length}} beers in store, and the latest is <b>{{ beers[beers.length - 1]?.name ?? '' }}</b></p>
    <h2>Your preferences</h2>
    <label for="name">Naam:</label>
    <input v-model="settings.name" type="text" name="name"/><br>
    <label for="language">{{settings.language === 'nl'? 'Taal:': 'Language:'}}</label>
    <select v-model="settings.language" name="language">
      <option value="nl">Nederlands</option>
      <option value="en">English</option>
    </select><br>
    <label for="min-alcohol">Minimale hoeveelheid alcohol</label>
    <input type="number" v-model="settings.minimumAlcohol" name="min-alcohol"><br>
  </main>
</template>
