import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";

import { apiSlice } from "./apiSlice";

const contactsAdapter = createEntityAdapter();

const initialState = contactsAdapter.getInitialState();

export const ContactsSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({

        //! GET all the contacts
        getAllContacts: builder.query({
            query: () => ({
                url: `contacts`,
                method: 'GET'
            }),
            providesTags: ['Contacts']
        }),

        // //! GET contact by id
        // getContactsById: builder.query({
        //     query: (id) => ({
        //         url: `contact/company-wise-contact/?contact_name__id=${id}`,
        //         method: 'GET'
        //     }),
        //     providesTags: ['Contacts']
        // }),


        // //! GET contact by id
        // getContactsWithoutPagination: builder.query({
        //     query: () => ({
        //         url: `contact/company-wise-contact-with-out-pagination/`,
        //         method: 'GET'
        //     }),
        //     providesTags: ['Contacts']
        // }),


        // //! GET contact category
        // getContactsCategory: builder.query({
        //     query: () => ({
        //         url: `contact/company-wise-contact-category/`,
        //         method: 'GET'
        //     }),
        //     providesTags: ['Contacts']
        // }),

        // //! GET contact category id
        // getContactsCategoryById: builder.query({
        //     query: (id) => ({
        //         url: `contact/company-category-wise-contact/?contact_name__id=${id}`,
        //         method: 'GET'
        //     }),
        //     providesTags: ['Contacts']
        // }),

        // //! GET contact area
        // getContactsArea: builder.query({
        //     query: () => ({
        //         url: `contact/company-wise-contact-working-area/`,
        //         method: 'GET'
        //     }),
        //     providesTags: ['Contacts']
        // }),

        // //! GET contact area id
        // getContactsAreaById: builder.query({
        //     query: (id) => ({
        //         url: `contact/company-area-wise-contact/?contact_name__id=${id}`,
        //         method: 'GET'
        //     }),
        //     providesTags: ['Contacts']
        // }),


        // //! DELETE contact by id
        // deleteContactsById: builder.mutation({
        //     query: (id) => {
        //         return {
        //             url: `contact/company-wise-contact/${id}/`,
        //             method: 'DELETE',
        //             body: id
        //         }
        //     },
        //     invalidatesTags: ['Contacts']
        // }),

        // //! DELETE contact category by id
        // deleteContactsCategoryById: builder.mutation({
        //     query: (id) => {
        //         return {
        //             url: `contact/company-wise-contact-category/${id}/`,
        //             method: 'DELETE',
        //             body: id
        //         }
        //     },
        //     invalidatesTags: ['Contacts']
        // }),

        // //! POST contact 
        createContacts: builder.mutation({
            query: (newContacts) => {
                return {
                    url: `contacts/`,
                    method: 'POST',
                    body: newContacts,
                }
            },
            invalidatesTags: ['Contacts']
        }),

        // //! send mail 
        sendMail: builder.mutation({
            query: (newContacts) => {
                return {
                    url: `sendmail/`,
                    method: 'POST',
                    body: newContacts,
                }
            },
            invalidatesTags: ['Contacts']
        }),

        // //! POST contact category
        // createContactsCategory: builder.mutation({
        //     query: (newContacts) => {
        //         newContacts.company_id = Cookies.get("company_id")
        //         return {
        //             url: `contact/company-wise-contact-category/`,
        //             method: 'POST',
        //             body: newContacts,
        //             // headers: {
        //             //     'Content-type': 'application/json; charset = UTF-8',
        //             // }
        //         }
        //     },
        //     invalidatesTags: ['Contacts']
        // }),

        // //! Search Contacts wala post
        // searchContacts: builder.mutation({
        //     query: (searchContacts) => {
        //         // 
        //         return {
        //             url: `contact/company-wise-contact/search_contact/`,
        //             method: 'POST',
        //             body: searchContacts,
        //             // body: { ...searchContacts, company_id },
        //             headers: {
        //                 'Content-type': 'application/json; charset = UTF-8'
        //             }
        //         }
        //     },
        //     invalidatesTags: ['Contacts']
        // }),

        // //! Update contact data by id
        // updateContacts: builder.mutation({
        //     query: (updateContacts) => {
        //         return {
        //             url: `contact/contact/${updateContacts.get('id')}/`,
        //             method: 'PATCH',
        //             body: updateContacts
        //         }
        //     },
        //     invalidatesTags: ['Contacts'],
        //     async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        //         const patchResult = dispatch(
        //             apiSlice.util.updateQueryData('getAllContacts', id, (draft) => {
        //                 Object.assign(draft, patch)
        //             })
        //         )
        //         try {
        //             await queryFulfilled
        //         } catch {
        //             patchResult.undo()
        //         }
        //     },
        // }),

        // //! Update contact category by id
        // updateContactsCategory: builder.mutation({
        //     query: (updateContactsCategory) => {
        //         return {
        //             url: `contact/company-wise-contact-category/${updateContactsCategory.get('id')}/`,
        //             method: 'PUT',
        //             body: updateContactsCategory
        //         }
        //     },
        //     invalidatesTags: ['Contacts'],
        //     async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        //         const patchResult = dispatch(
        //             apiSlice.util.updateQueryData('getAllContacts', id, (draft) => {
        //                 Object.assign(draft, patch)
        //             })
        //         )
        //         try {
        //             await queryFulfilled
        //         } catch {
        //             patchResult.undo()
        //         }
        //     },
        // }),
    })
})

export const {
    useGetAllContactsQuery,
    useCreateContactsMutation,
    useSendMailMutation,
} = ContactsSlice

//! returns the query result object
export const selectContactsResult = ContactsSlice.endpoints.getAllContacts.select()

//!Creates memoized selector
const selectContactsData = createSelector(
    selectContactsResult,
    contactResult => contactResult.data // normalized state object with ids & entities
)

//!getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllContacts,
    selectById: selectContactsById,
    selectIds: selectIds
    // Pass in a selector that returns the posts slice of state
} = contactsAdapter.getSelectors(state => selectContactsData(state) ?? initialState)



