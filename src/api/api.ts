export const server = import.meta.env.VITE_API_URL
export const api = `${server}/api/animes`;

// Can mixed with filter
// ?populate=preview&filters[title][$contains]=Нар
