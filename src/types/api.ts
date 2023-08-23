import { Anime, Franchise } from "@globalTypes/anime.ts";

export interface AnimeApiType {
  getAllAnime(): apiPromise<DataBody<Anime>[]>;
  getOneAnime(id: string): apiPromise<DataBody<Anime>[]>;
  getAnimeFranchise(id: number): apiPromise<DataBody<Franchise>>;
}

export interface DataBody<T> {
  id: number;
  attributes: T & {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

interface Pagination {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number
}

export type apiResponse<T> = SuccessResponse<T> | ErrorResponse;
export type apiPromise<T> = Promise<apiResponse<T>>

interface SuccessResponse<T> {
  data: T;
  meta: Pagination;
}

interface ErrorResponse {
  data: null;
  error: {
    status: number;
    name: string;
    message: string;
    details: object
  }
}
