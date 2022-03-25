import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { useGetCryptosQuery } from './cryptoApi'


const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': 'a4c106dfaamsh4ab588189aae0d5p1f6e3djsn3c016bc5296e'
  }

  const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

  const createRequest = (url) => ({url, headers: cryptoNewsHeaders})

  export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
