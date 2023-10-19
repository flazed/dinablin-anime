import { DataBody } from "@/types/api.ts";
export interface Anime {
  id: number;
  link: string;
  title: string;
  type: AnimeType;
  preview: {
    data: DataBody<Preview>
  };
  watched: boolean;
  nowEpisodes: number;
  maxEpisodes: number;
  dateStart: string;
  genres: string[];
  rating: number;
}

export interface AnimePage extends Anime {
  franchise: {
    data: DataBody<Franchise>;
  };
  episodes: {
    data: DataBody<Episode>[];
  }
}

export enum AnimeType {
  Episodes = "Episodes",
  Movie = "Movie",
  OVA = "OVA"
}

interface Preview {
  alternativeText: string | null;
  caption: string | null;
  ext: ImageFormats;
  formats: {
    thumbnail: {
      ext: ImageFormats;
      hash: string;
      height: number;
      mime: MimeImageFormats;
      name: string;
      path: null;
      size: number;
      url: string;
      width: number;
    }
  };
  hash: string;
  height: number;
  mime: MimeImageFormats;
  name: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  size: number;
  url: string;
  width: number;
}

type ImageFormats = ".jpg" | ".jpeg" | ".png" | ".webp";
type MimeImageFormats = "image/jpeg" | "image/png" | "image/webp";

export interface Franchise {
  title: string;
  animes: DataBody<Anime>[];
}

interface Episode {
  key: string;
  link: string;
  linkTG: string;
  name: string;
}
