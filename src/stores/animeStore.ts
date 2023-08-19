import { defineStore } from "pinia";
import { ref, watch } from "vue";

import { api } from "@api/api.ts";

import { useFetch } from "@composables/useFetch.ts";

import { Anime } from "@globalTypes/anime.ts";
import { DataBody } from "@globalTypes/api.ts";
import { OptionProps } from "@globalTypes/props.ts";

export const useAnimeStore = defineStore('anime', () => {
  const sortGroupList = ref<OptionProps[]>([
    { value: 'date', content: 'sortDate' },
    { value: 'rating', content: 'sortRating' },
  ]);
  const sortOrderList = ref<OptionProps[]>([
    { value: 'DESC', content: 'fa-solid fa-arrow-down-wide-short' },
    { value: 'ASC', content: 'fa-solid fa-arrow-down-short-wide' },
  ]);

  const animeArray = ref<DataBody<Anime>[]>([]);
  const sortGroupValue = ref(sortGroupList.value[0]);
  const sortOrderValue = ref(sortOrderList.value[0]);

  // Translate current value content when language change
  watch(sortGroupList, curr => {
    sortGroupValue.value = curr.find((item: OptionProps) => item.value === sortGroupValue.value.value) ?? sortGroupList.value[0];
  })

  async function getAllAnime() {
    const animes = await useFetch<DataBody<Anime>[]>(`${api}/?populate=preview`)
    animeArray.value = animes.data ?? [];
  }

  return {
    animeArray,
    sortGroupList,
    sortGroupValue,
    sortOrderList,
    sortOrderValue,
    getAllAnime
  }
})
