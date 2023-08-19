<template>
  <container class="mt-5">
    <filter-bar class="p-2 sm:p-0" />
    <anime-list
      class="p-2 sm:p-0 mt-5"
      :animes="animeArray"
    />
  </container>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

import AnimeList from "@components/anime-list.vue";
import FilterBar from "@components/settings/filter-bar.vue";
import Container from "@elements/container.vue";

import { useAnimeStore } from "@stores/animeStore.ts";

const animeStore = useAnimeStore();

const { animeArray } = storeToRefs(animeStore)

onMounted(() => {
  animeStore.getAllAnime();
})

</script>
