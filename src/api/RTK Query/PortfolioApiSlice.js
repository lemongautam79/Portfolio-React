import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {BASE_URL} from '../baseURL';

export const PortfolioApiSlice = createApi({
    reducerPath: 'PortfolioApiSlice',
    baseQuery:fetchBaseQuery({baseUrl:BASE_URL}),
    tagTypes:['Users'],
    endpoints:(builder)=> ({

        // ! GET all the users
        getAllUsers:builder.query({
            query:()=>({
                // url:'47b01bd9-a75d-49e8-98e2-50d8584a5cf2/',
                method:"GET"
                }),
                    providesTags:['Users']
            }),
    

        // ! POST users
        createUsers: builder.mutation({
            query:(newUsers)=> {
            console.log("New users", newUsers);
            return{
                // url:`f/47b01bd9-a75d-49e8-98e2-50d8584a5cf2/`,
                method:'POST',
                body:newUsers,
                headers:{
                    'Content-type': 'application/json; charset = UTF-8',
                }
            }
        },
        invalidatesTags:['Users']
        })
    })
})

//! Api Hooks
export const {
    useGetAllUsersQuery,
    useCreateUsersMutation
} = PortfolioApiSlice