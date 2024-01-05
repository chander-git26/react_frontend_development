import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASEURL } from '../../../utilities/constants';
 
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BASEURL}/user` }),
  endpoints: (builder) => ({
    getUserData: builder.query({
      query: (body) => ({
        url: `/signIn`,
        method: 'POST',
        body: { ...body },
      }),
    }),
    postUserProfession: builder.mutation({
      query: (body) => {
        const formData = new FormData();
        Object.keys(body).forEach((key) => {
          formData.append(key, body[key]);
        });
        const profileImage = body.profile;
        if (profileImage instanceof File || profileImage instanceof Blob) {
          formData.append('profile', profileImage);
        }
        return {
          url: '/signIn',
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        };
      },
    }),
  }),
});
 
export const {
  useGetUserDataQuery,
  useLazyGetUserDataQuery,
  usePostUserProfessionMutation,
} = userApi;




// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { BASEURL } from '../../../utilities/constants';
 
// export const userApi = createApi({
//   reducerPath: 'userApi',
//   baseQuery: fetchBaseQuery({ baseUrl: `${BASEURL}/user` }),
//   endpoints: (builder) => ({
//     getUserData: builder.query({
//       query: (body) => {
        
//         const formData = new FormData();
//         Object.keys(body).forEach((key) => {
//           formData.append(key, body[key]);
//         });
//         const profileImage = body.profile;
 
//         if (profileImage instanceof File || profileImage instanceof Blob) {
//           formData.append('profile', profileImage);
//         } 
//         return {
//           url: '/signIn',
//           method: 'POST',
//           body: formData,
//           headers: {
            
//             'Content-Type': 'multipart/form-data',
//           },
//         };
//       },
//     }),
//   }),
// });
 
// export const { useGetUserDataQuery, useLazyGetUserDataQuery, usePostUserProfessionMutation } = userApi;