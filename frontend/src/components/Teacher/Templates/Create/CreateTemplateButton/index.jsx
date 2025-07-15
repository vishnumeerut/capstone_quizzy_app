import { Save } from "lucide-react";
import CustomButton from "../../../../../components/common/CustomButton";
import { useCreateTemplateMutation } from "../../../../../store/features/template/api";
import { useSelector } from "react-redux";
import { templateSelector } from "../../../../../store/features/template/selectors";
import { stateToTemplate } from "../../../../../store/features/template/utils";
import { useNavigate } from "react-router-dom";

function CreateTemplateButton () {

    const [triggerCreate, {isLoading}] = useCreateTemplateMutation()
    const template = useSelector(templateSelector);
    
    const navigate = useNavigate();
    const handleClick = async () => {
        if(isLoading) return;
        try{
           await triggerCreate(stateToTemplate(template)).unwrap();
           navigate("/teacher/templates");
        }
        catch(error) {
            console.log("There was an error in creating template", error);
        }
    }
    return (
        <CustomButton disabled={isLoading} className={"my-4"} onClick={handleClick}>
            <Save size={15}/> Save Template
        </CustomButton>
    )
}

export default CreateTemplateButton;