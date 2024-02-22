<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings-store'
import { storeToRefs } from 'pinia'

const settingsStore = useSettingsStore();

const {settings} = storeToRefs(settingsStore)
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Your name is {{ settings.name }}</p>
    <p>Your preferred alcohol percentage is {{ settings.minimumAlcohol }}% or more</p>
    <p>Your language is {{ settings.language === 'nl' ? 'Dutch' : 'English' }}</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
