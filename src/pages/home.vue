<template>
  <container class="mt-5">
    <filter-bar class="p-2 sm:p-0" />
    <anime-list
      class="p-2 sm:p-0 mt-5"
      :animes="duplicateAnimeArray"
    />
  </container>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

import AnimeList from "@components/anime-list.vue";
import FilterBar from "@components/settings/filter-bar.vue";
import Container from "@elements/container.vue";

import { SITE_TITLE } from "../global.consts.ts";

import { useAnimeStore } from "@stores/animeStore.ts";

const animeStore = useAnimeStore();

const { duplicateAnimeArray } = storeToRefs(animeStore)

onMounted(() => {
  animeStore.getAllAnime();

  document.title = SITE_TITLE;
})

</script>
