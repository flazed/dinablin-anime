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
import { onMounted, watch } from "vue";

import AnimeList from "@components/anime-list.vue";
import FilterBar from "@components/settings/filter-bar.vue";
import Container from "@elements/container.vue";

import { useAnimeStore } from "@stores/animeStore.ts";

import { SITE_TITLE } from "@/global.consts.ts";

const animeStore = useAnimeStore();

const { duplicateAnimeArray, searchQuery, sortGroupValue, sortOrderValue } = storeToRefs(animeStore)

onMounted(() => {
  animeStore.getAllAnime();

  document.title = SITE_TITLE;
})

watch(searchQuery, curr => {
  animeStore.findAnime(curr);
})

watch([sortGroupValue, sortOrderValue], () => {
  animeStore.sortAnimeList()
})

</script>
