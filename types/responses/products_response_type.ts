import type { ApiResponse, ApiResponseMeta } from './base_response_type'

export interface IUser {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export type ListUserResponse = ApiResponseMeta<IUser[] | null>
export type DetailUserResponse = ApiResponse<IUser[] | null>
