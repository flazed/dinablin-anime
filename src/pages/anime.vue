<i18n>
{
  "ru": {
    "type": "Тип"
  },
  "ua": {
    "type": "Тип"
  },
  "en": {
    "type": "Type"
  }
}
</i18n>

<template>
  <container class="mt-5 p-2 sm:p-0">
    <span class="text-4xl font-bold block mb-3.5">{{ anime?.attributes?.title }}</span>
    <div class="flex flex-wrap">
      <div class="w-full">
        <video
          src=""
          controls
        />
      </div>
    </div>
    <div class="flex">
      <div class="flex flex-col rounded-xl">
        <span>{{ t('type') }}: <anime-type-text :type="anime?.attributes?.type!" /></span>
      </div>
    </div>
    <div class="flex">
      <boosty-ad class="w-full lg:w-[35%] text-3xl lg:text-xl font-bold mt-3" />
    </div>
  </container>
</template>

<script setup lang="ts">
import { defineAsyncComponent, onBeforeMount, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

import { useAnimeStore } from "@stores/animeStore.ts";

import { SITE_TITLE } from "@/global.consts.ts";
import { AnimePage } from "@/types/anime.ts";
import { DataBody } from "@/types/api.ts";

const { params } = useRoute();
const animeStore = useAnimeStore();

const anime = ref<DataBody<AnimePage> | null>(null);

const { t } = useI18n();

onBeforeMount(async () => {
  anime.value = await animeStore.getAnimeById(String(params.id))
  const title = anime?.value?.attributes.title ?? "";
  console.log(anime.value)

  document.title = `${title} | ${SITE_TITLE}`;
})

const AnimeTypeText = defineAsyncComponent(() => import("@components/anime-type-text.vue"))
const BoostyAd = defineAsyncComponent(() => import("@components/boosty-ad.vue"))
const Container = defineAsyncComponent(() => import("@elements/container.vue"))
</script>
