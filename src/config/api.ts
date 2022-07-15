/* eslint-disable no-param-reassign */
/* eslint-disable default-case */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
import Toast from 'react-native-toast-message'
import { IMDB_SEARCH_API } from '@config/constants'

// Add a request interceptor
const axiosInstance: AxiosInstance = axios.create()

// Intercepting all API requests
axiosInstance.interceptors.request.use(
  async function (config: AxiosRequestConfig) {
    if (!config?.headers?.['Content-Type'])
      config.headers['Content-Type'] = 'application/json'
    // Injecting the API server IP
    config.url = IMDB_SEARCH_API + config.url
    return config
  },
  (_error: any) => {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Error processing request',
    })
  },
)

// TODO: intercept response to refresh token
// config should be an object
export const sendAxiosRequest = async (paramters: {
  url: string
  method: string
  body?: any
  query?: any
  actions?: any | { apiCallSuccess: any; nullifyToast: any; apiCallFail: any }
  headers?: any
}) => {
  const { url, method, body = {}, query = {}, headers = {} } = paramters
  const clonedQuery: any = { ...query }
  let requestPromise

  switch (method) {
    case 'POST':
      requestPromise = axiosInstance.post(url, body, {
        headers,
        maxRedirects: 1,
      })
      break

    case 'GET':
      requestPromise = axiosInstance.get(url, {
        params: clonedQuery,
        withCredentials: true,
      })
      break

    case 'PATCH':
      requestPromise = axiosInstance.patch(url, body)
      break

    case 'DELETE':
      requestPromise = axiosInstance.delete(
        url,
        {
          data: {
            ...body,
          },
        },
        {
          headers,
        },
      )
      break
  }

  try {
    const res = await requestPromise
    return res
  } catch (err: any) {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: err?.response?.data?.message || 'Error occurred',
    })
  }
}

export default axiosInstance
