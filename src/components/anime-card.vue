<i18n>
{
  "ru": {
    "animeTypeFilm": "Фильм",
    "ongoingWatch": "Сейчас смотрит"
  },
  "ua": {
    "animeTypeFilm": "Фільм",
    "ongoingWatch": "Зараз дивиться"
  },
  "en": {
    "animeTypeFilm": "Movie",
    "ongoingWatch": "Watching now"
  }
}
</i18n>

<template>
  <router-link
    :to="`anime/${link}`"
    class="flex flex-col transition-transform duration-300 hover:-translate-y-2"
  >
    <div class="flex relative grow">
      <img
        v-if="isPreviewExist"
        class="rounded-lg w-full object-cover"
        :src="`${server}${url}`"
        alt=""
      >
      <div
        v-else
        class="w-full flex justify-center items-center bg-red-100 min-h-[300px] rounded-lg "
      >
        <img
          class="object-cover w-[60px]"
          :src="Defaultimage"
          alt=""
        >
      </div>
      <div class="absolute left-1.5 bottom-1 p-1 rounded-md border bg-white font-bold text-gray-700 text-sm">
        <template v-if="type !== AnimeType.Episodes">
          <anime-type-text :type="type" />
        </template>
        <template v-else>
          {{ nowEpisodes }}
          /
          {{ maxEpisodes }}
        </template>
      </div>
      <div class="absolute right-1.5 bottom-1 p-1 rounded-md border bg-white font-bold text-gray-700">
        <template v-if="watched">
          <span class="text-lg mr-1">
            {{ rating }}
          </span>
          <font-awesome-icon
            class="text-red-500"
            :icon="['fas', 'heart']"
          />
        </template>
        <template v-else>
          <span class="text-sm">
            {{ t('ongoingWatch') }}
          </span>
        </template>
      </div>
    </div>
    <div class="flex flex-col">
      <span
        class="text-lg text-gray-800 font-bold truncate"
        :title="title"
      >{{ title }}</span>
      <span class="text-sm text-gray-500"><font-awesome-icon :icon="['fas', 'calendar']" /> {{ d(dateStart) }}</span>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref, toRefs } from "vue";
import { useI18n } from "vue-i18n";

import { server } from "@api/api.consts.ts";

import { Anime, AnimeType } from "@/types/anime.ts";
import { DataBody } from "@/types/api.ts";

import Defaultimage from "@assets/defaultCardImage.png";

const props = defineProps<{
  anime: DataBody<Anime>
}>()

const { anime } = toRefs(props);
const {
  attributes: {
    link,
    title,
    watched,
    nowEpisodes,
    maxEpisodes,
    dateStart,
    rating,
    type,
    preview: {
      data: { attributes: { url } } }
    }
  } = anime.value;

const { t, d } = useI18n()

const isPreviewExist = ref<boolean>(false);

onMounted(async () => {
  const previewImg = new Image();
  previewImg.onload = () => {
    isPreviewExist.value = true
  };
  previewImg.src = `${server}${url}`;
})

const AnimeTypeText = defineAsyncComponent(() => import("@components/anime-type-text.vue"))
</script>
