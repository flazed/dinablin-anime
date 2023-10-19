<i18n>
{
  "ru": {
    "search": "Поиск...",
    "sortDate": "Дата",
    "sortRating": "Оценка"
  },
  "ua": {
    "search": "Пошук...",
    "sortDate": "Дата",
    "sortRating": "Оцінка"
  },
  "en": {
    "search": "Search...",
    "sortDate": "Date",
    "sortRating": "Rating"
  }
}
</i18n>

<template>
  <div class="flex">
    <dina-blin-input
      :value="searchQuery"
      :placeholder="t('search')"
      class="mr-3 w-full sm:w-auto sm:min-w-[270px]"
      @input="(e) => searchQuery = (e.target as HTMLInputElement).value"
    />
    <dina-blin-select
      class="ml-auto min-w-[100px]"
      is-custom-template
      :current-value="sortGroupValue"
      :values-list="sortGroupList"
      :on-change="handleSortGroupClick"
      border="border"
    >
      <template #option-content="option: OptionProps">
        {{ t(option.content) }}
      </template>
    </dina-blin-select>
    <dina-blin-select
      class="ml-3"
      is-custom-template
      :current-value="sortOrderValue"
      :values-list="sortOrderList"
      :on-change="handleSortOrderClick"
      border="border"
    >
      <template #option-content="option: OptionProps">
        <font-awesome-icon :icon="String(option.content)" />
      </template>
    </dina-blin-select>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";

import DinaBlinInput from "@elements/dina-blin-input.vue";
import DinaBlinSelect from "@elements/dina-blin-select.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { useAnimeStore } from "@stores/animeStore.ts";

import { OptionProps } from "@/types/props.ts";

const { t } = useI18n();
const animeStore = useAnimeStore();

const { sortGroupList, sortGroupValue, sortOrderList, sortOrderValue, searchQuery } = storeToRefs(animeStore);

const handleSortGroupClick = (sortGroup: OptionProps) => {
  sortGroupValue.value = sortGroup;
}

const handleSortOrderClick = (sortOrder: OptionProps) => {
  sortOrderValue.value = sortOrder;
}
</script>
