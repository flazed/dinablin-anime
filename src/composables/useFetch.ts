import { apiPromise } from "@globalTypes/api.ts";

export function useFetch<T>(url: string): apiPromise<T> {
  return fetch(url).then(data => data.json())
}
