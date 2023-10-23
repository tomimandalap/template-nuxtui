export interface MetaResponse {
  limit: number
  skip: number
  total: number
}

export interface ErrorResponse {
  code: number
  message: string
  errors: string
}

export interface ApiResponse<T = unknown> {
  code: number
  products: T
  message: string
}

export type ApiResponseMeta<T = unknown> = ApiResponse<T> & MetaResponse
