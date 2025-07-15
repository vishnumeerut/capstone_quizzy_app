import { DELETE_TEMPLATE_URL } from "../../../../components/api";
import { apiSlice } from "../../../api";


const deleteTemplateApi  = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        deleteTemplate: build.mutation({ // mutation is used to delete a template
            query: (id) => ({
                url: `${DELETE_TEMPLATE_URL}/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Templates"]
        })
    })
})


export const  {useDeleteTemplateMutation} = deleteTemplateApi;