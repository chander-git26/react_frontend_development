import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASEURL } from '../utilities/constants'
 
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BASEURL}` }),
  endpoints: (builder) => ({
    getUserData: builder.query({
      query: ({ email,password }) => ({
        url: `/users?email=${email}&password=${password}`,
        method: 'GET',
      }),
    }),
  }),
})
 
export const { useGetUserDataQuery,useLazyGetUserDataQuery } = userApi