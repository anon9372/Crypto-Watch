import { ExpandOutlined } from '@ant-design/icons';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': 'a4c106dfaamsh4ab588189aae0d5p1f6e3djsn3c016bc5296e'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest =(url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
})

export const {
    useGetCryptosQuery,
} = cryptoApi;

