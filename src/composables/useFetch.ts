import { Response } from "@globalTypes/api.ts";

export function useFetch<T>(url: string): Promise<Response<T>> {
  return fetch(url).then(data => data.json())
}
