<template>
  <container class="mt-5">
    <pre>{{ attributes }}</pre>
  </container>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

import Container from "@elements/container.vue";

import { SITE_TITLE } from "../global.consts.ts";

import { useAnimeStore } from "@stores/animeStore.ts";

import { Anime } from "@globalTypes/anime.ts";
import { DataBody } from "@globalTypes/api.ts";

const { params } = useRoute();
const animeStore = useAnimeStore();

const anime = ref<DataBody<Anime> | null>(null);
const attributes = ref<Anime | undefined>(undefined);

watch(anime, curr => {
  attributes.value = curr?.attributes;
});

onMounted(async () => {
  anime.value = await animeStore.getAnimeById(String(params.id))
  const title = anime?.value?.attributes.title ?? "";

  document.title = `${title} | ${SITE_TITLE}`;
})
</script>
