import { CREATE_TEMPLATE_URL } from "../../../../components/api";
import { apiSlice } from "../../../api";



const createTemplateApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        createTemplate: build.mutation({
            query: (body) => ({
              url: CREATE_TEMPLATE_URL,
              method: "POST",
              body,
            }),
            invalidatesTags: ["Templates"],
          }),
    })
})

export const { useCreateTemplateMutation } = createTemplateApi;
