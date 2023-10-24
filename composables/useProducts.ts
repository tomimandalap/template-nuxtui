import type { ListUserResponse } from "@/types/responses/products_response_type"

export default function () {
  const getData = (params: Ref<{ q: string; skip: number; limit: number }>) => {
    return useHttp<ListUserResponse>('/api/products/search', {
      method: 'GET',
      params,
      watch: false,
      lazy: true
    })
  }

  return { getData }
}