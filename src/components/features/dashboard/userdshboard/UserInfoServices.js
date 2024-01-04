import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASEURL } from '../../../utilities/constants'
 
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BASEURL}/user` }),
  endpoints: (builder) => ({
    getPersonalDetails: builder.query({
      query: (body) => ({
        url: `/signIn`,
        method: 'POST',
        body:{...body}
      }),
    }),
    getPersonalDetails: builder.mutation({
      query: (body) => ({
        url: `/users/getPersonalInfo/${body.id}`,
        method: 'GET',
      }),
    }),
  }),
})
 
export const { useGetUserDataQuery,useLazyGetUserDataQuery,getPersonalDetails } = userApi