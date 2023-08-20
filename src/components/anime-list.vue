<template>
  <div class="my-2 grid gap-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
    <anime-card
      v-for="anime in animes"
      :key="anime.id"
      :anime="anime"
    />
  </div>
</template>

<script setup lang="ts">
import AnimeCard from "@components/anime-card.vue";

import { Anime } from "@globalTypes/anime.ts";
import { DataBody } from "@globalTypes/api.ts";

defineProps<{
  animes: DataBody<Anime>[];
}>()
</script>
