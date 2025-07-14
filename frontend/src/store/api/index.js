import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constants";
import { setTemplate } from "../features/template/templateSlice";
import { templateToState } from "../utils";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Templates"],
  endpoints: (build) => ({
    getAllTemplates: build.query({
      query: () => ({
        url: "/templates",
        method: "GET",
      }),
      transformResponse: (response) => {
        return response.data ?? [];
      },
      providesTags: ["Templates"],
    }),

    getTemplate: build.query({
      query: (id) => ({
        url: `/templates/${id}`,
        method: "GET",
      }),
      transformResponse: (response) => {
        return response.data ?? {};
      },
      onQueryStarted: async (id, { queryFulfilled, dispatch }) => {
        const { data } = await queryFulfilled;
        dispatch(
          setTemplate({
            value: templateToState(data),
          }),
        );
      },
      providesTags: ["Templates"],
    }),

    deleteTemplate: build.mutation({
      query: (id) => ({
        url: `/templates/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Templates"],
    }),
  }),
});

export const {
  useGetAllTemplatesQuery,
  useDeleteTemplateMutation,
  useGetTemplateQuery,
} = apiSlice;
