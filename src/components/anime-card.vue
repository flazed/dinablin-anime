<i18n>
{
  "ru": {
    "animeFilmType": "Фильм",
    "ongoingWatch": "Сейчас смотрит"
  },
  "ua": {
    "animeFilmType": "Фільм",
    "ongoingWatch": "Зараз дивиться"
  },
  "en": {
    "animeFilmType": "Movie",
    "ongoingWatch": "Watching now"
  }
}
</i18n>

<template>
  <router-link
    :to="`anime/${link}`"
    class="flex flex-col transition-transform duration-300 hover:-translate-y-2"
  >
    <div class="flex relative">
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
        <template v-if="maxEpisodes !== 1">
          {{ nowEpisodes }}
          /
          {{ maxEpisodes }}
        </template>
        <template v-else>
          {{ t('animeFilmType') }}
        </template>
      </div>
      <div class="absolute right-1.5 bottom-1 p-1 rounded-md border bg-white font-bold text-gray-700 text-sm">
        <template v-if="watched">
          {{ rating }}
          <font-awesome-icon
            class="text-red-500"
            :icon="['fas', 'heart']"
          />
        </template>
        <template v-else>
          {{ t('ongoingWatch') }}
        </template>
      </div>
    </div>
    <div class="flex flex-col">
      <span class="text-lg text-gray-800 font-bold">{{ title }}</span>
      <span class="text-sm text-gray-500"><font-awesome-icon :icon="['far', 'calendar']" /> {{ d(dateStart) }}</span>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { onMounted, ref, toRefs } from "vue";
import { useI18n } from "vue-i18n";

import { server } from "@api/api.ts";

import { Anime } from "@globalTypes/anime.ts";
import { DataBody } from "@globalTypes/api.ts";

import Defaultimage from '@assets/defaultCardImage.png';

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
</script>
