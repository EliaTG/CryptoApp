import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-key': '378a1242b5msh24ae295e0766615p13f993jsn5956a26231d0',
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
    
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        })
    })

});

export const {
    useGetCryptosQuery,
} = cryptoApi;

export default cryptoApi;