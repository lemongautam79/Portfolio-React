import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./baseURL";


export const apiSlice = createApi({
    reducerPath: "api", // optional
    baseQuery: fetchBaseQuery({baseUrl:BASE_URL}),
    tagTypes: [
        'Contacts',
    ],
    endpoints: (builder) => ({}),
});