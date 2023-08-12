<i18n>
{
  "ru": {
    "watchingTitle": "Смотрит сейчас",
    "watchedTitle": "Просмотрено"
  },
  "ua": {
    "watchingTitle": "Дивиться зараз",
    "watchedTitle": "Переглянуто"
  },
  "en": {
    "watchingTitle": "Watching now",
    "watchedTitle": "Viewed"
  }
}
</i18n>

<template>
  <container class="mt-5">
    <div>
      {{ t('watchingTitle') }}
    </div>
    <div>
      {{ t('watchedTitle') }}
    </div>
  </container>
</template>

<script setup lang="ts">
import Container from "@elements/container.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
