import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASEURL } from '../../../utilities/constants'
 
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BASEURL}/user` }),
  endpoints: (builder) => ({
    getUserData: builder.query({
      query: (body) => ({
        url: `/signIn`,
        method: 'POST',
        body:{...body}
      }),
    }),
    postUserProfession: builder.mutation({
      query: (body) => ({
        url: `/users/${body.id}`,
        method: 'PATCH',
        body:{...body.profession}
      }),
    }),
  }),
})
 
export const { useGetUserDataQuery,useLazyGetUserDataQuery,usePostUserProfessionMutation } = userApi