import { ANIME_API_URL, FRANCHISE_API_URL } from "@api/api.consts.ts";

import { useFetch } from "@composables/useFetch.ts";

import { Anime, Franchise } from "@globalTypes/anime.ts";
import { AnimeApiType, DataBody } from "@globalTypes/api.ts";

export const AnimeApi: AnimeApiType = {
  async getAllAnime() {
    return await useFetch<DataBody<Anime>[]>(`${ANIME_API_URL}/?populate=preview`)
  },

  async getOneAnime(id: string) {
    return await useFetch<DataBody<Anime>[]>(`${ANIME_API_URL}/?populate[0]=franchise&populate[1]=episodes&filters[link]=${id}`)
  },

  async getAnimeFranchise(id: number) {
    return await useFetch<DataBody<Franchise>>(`${FRANCHISE_API_URL}/${id}/?populate=animes`)
  }
}
