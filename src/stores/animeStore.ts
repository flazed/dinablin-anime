import { defineStore } from "pinia";
import { ref, watch } from "vue";

import { AnimeApi } from "@api/api.ts";

import { Anime } from "@globalTypes/anime.ts";
import { DataBody } from "@globalTypes/api.ts";
import { AnimeSortGroupList, OptionProps, OrderBy } from "@globalTypes/props.ts";

export const useAnimeStore = defineStore("anime", () => {
  const sortGroupList = ref<OptionProps[]>([
    { value: AnimeSortGroupList.Date, content: "sortDate" },
    { value: AnimeSortGroupList.Rating, content: "sortRating" },
  ]);
  const sortOrderList = ref<OptionProps[]>([
    { value: OrderBy.DESC, content: "fa-solid fa-arrow-down-wide-short" },
    { value: OrderBy.ASC, content: "fa-solid fa-arrow-down-short-wide" },
  ]);

  const animeArray = ref<DataBody<Anime>[]>([]);
  const duplicateAnimeArray = ref<DataBody<Anime>[]>([]);
  const sortGroupValue = ref(sortGroupList.value[0]);
  const sortOrderValue = ref(sortOrderList.value[0]);
  const searchQuery = ref<string>("");

  function findAnime(search: string) {
    if(search.trim().length !== 0) {
      duplicateAnimeArray.value = animeArray.value.filter(({ attributes: { title } }) => {
        const lowerTitle = title.toLowerCase();
        const lowerSearch = search.toLowerCase();
        return lowerTitle.includes(lowerSearch)
      })
    } else {
      duplicateAnimeArray.value = Object.assign(animeArray.value)
    }

    sortAnimeList()
  }

  function sortAnimeList() {
    duplicateAnimeArray.value = duplicateAnimeArray.value.sort((nextAnime, currAnime) => {
      const nextAnimeDateTime = new Date(nextAnime.attributes.dateStart).getTime();
      const currAnimeDateTime = new Date(currAnime.attributes.dateStart).getTime();

      const nextAnimeRating = nextAnime.attributes.rating;
      const currAnimeRating = currAnime.attributes.rating;

      const isOrderDesc = sortOrderValue.value.value === OrderBy.DESC;

      switch (sortGroupValue.value.value) {
        case AnimeSortGroupList.Date:
          if(nextAnimeDateTime > currAnimeDateTime) return isOrderDesc ? -1 : 1;
          if(nextAnimeDateTime < currAnimeDateTime) return isOrderDesc ? 1 : -1;
          return 0;
        case AnimeSortGroupList.Rating:
          if(nextAnimeRating > currAnimeRating) return isOrderDesc ? -1 : 1;
          if(nextAnimeRating < currAnimeRating) return isOrderDesc ? 1 : -1;
          return 0;
        default:
          return 0
      }
    })
  }

  async function getAllAnime() {
    const animes = await AnimeApi.getAllAnime();
    animeArray.value = animes.data ?? [];
    duplicateAnimeArray.value = Object.assign(animeArray.value);
    sortAnimeList()
  }


  async function getAnimeById(id: string): Promise<DataBody<Anime> | null> {
    const anime = await AnimeApi.getOneAnime(id);
    return anime.data ? anime.data[0] : null;
  }

  watch(searchQuery, curr => {
    findAnime(curr);
  })

  watch([sortGroupValue, sortOrderValue], () => {
    sortAnimeList()
  })

  return {
    animeArray,
    duplicateAnimeArray,
    sortGroupList,
    sortGroupValue,
    sortOrderList,
    sortOrderValue,
    searchQuery,
    getAllAnime,
    getAnimeById
  }
})
