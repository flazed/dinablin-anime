import { DataBody } from "@globalTypes/api.ts";

type ImageFormats = ".jpg" | ".jpeg" | ".png" | ".webp";
type MimeImageFormats = "image/jpeg" | "image/png" | "image/webp";

interface Preview {
  alternativeText: string | null;
  caption: string | null;
  createdAt: string;
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
  updatedAt: string;
  url: string;
  width: number;
}

export interface Anime {
  id: number;
  link: string;
  title: string;
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
