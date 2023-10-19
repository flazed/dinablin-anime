<i18n>
{
  "ru": {
    "Episodes": "Сериал",
    "Movie": "Фильм",
    "OVA": "OVA"
  },
  "ua": {
    "Episodes": "Серіал",
    "Movie": "Фільм",
    "OVA": "OVA"
  },
  "en": {
    "Episodes": "Series",
    "Movie": "Movie",
    "OVA": "OVA"
  }
}
</i18n>

<template>
  <span v-if="type !== undefined">{{ t(type) }}</span>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

import { AnimeType } from "@/types/anime.ts";

defineProps<{
  type: AnimeType | undefined
}>()

const { t } = useI18n();
</script>
