import { GET_TEMPLATE_BY_ID_URL } from "../../../../components/api";
import { apiSlice } from "../../../api";
import { setTemplate } from "../templateSlice";
import { templateToState } from "../utils";

const getTemplateApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getTemplate: build.query({
      query: (id) => ({
        url: `${GET_TEMPLATE_BY_ID_URL}/${id}`,
        method: "GET",
      }),
    }),
    transformResponse: (response) => {
      return response.data ?? {};
    },
    onQueryStarted: async (id, { queryFulfilled, dispatch }) => {
      const { data } = await queryFulfilled;
      dispatch(setTemplate({ value: templateToState(data) }));
    },
    providesTags: ["Templates"],
  }),
});

export const { useGetTemplateQuery } = getTemplateApi;
