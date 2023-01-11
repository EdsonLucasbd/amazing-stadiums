import client from '../graphql/client'
import pThrottle from 'p-throttle'

// Set the limit of # of calls per interval in ms (5 per second)
const throttle = pThrottle({ limit: 5, interval: 1000 })
export const throttledFetch = throttle(async (...args: Array<string>) => {
  const [query, vars] = args

  const data = await client.request(query, vars)

  return data
})
