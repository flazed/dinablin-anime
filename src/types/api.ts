export interface DataBody<T> {
  id: number;
  attributes: T;
}

interface Pagination {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number
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

interface SuccessResponse<T> {
  data: T;
  meta: Pagination;
}

export type Response<T> = SuccessResponse<T> | ErrorResponse;
