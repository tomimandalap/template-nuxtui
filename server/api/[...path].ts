import { joinURL, withQuery } from 'ufo'

export default defineEventHandler(async (event) => {
  const { apiBaseUrl } = useRuntimeConfig()
  const path = getRouterParam(event, 'path') ?? ''
  const queryParam = getQuery(event)
  const joinUrlWithQuery = withQuery(joinURL(apiBaseUrl, path), queryParam)

  return await proxyRequest(
    event,
    joinUrlWithQuery,
  )
})
