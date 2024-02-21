<script lang="ts" setup>
import { useBeerStore } from '@/stores/beer-store';

    const { beers, getBeers }= useBeerStore();

    getBeers();
</script>
<template>
    <div>
        <p v-for="beer in beers" :key="beer.id">
            {{ beer.name }}
        </p>
    </div>
</template>