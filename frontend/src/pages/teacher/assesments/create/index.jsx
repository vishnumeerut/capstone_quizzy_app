import React from "react";
import { useHeading } from "../../../../hooks";
import CustomInput from "../../../../components/common/inputs/CustomInput";
import { InputTypes } from "../../../../components/common/inputs/CustomInput/types";
import { useSelector } from "react-redux";
import { assesmentsSelector } from "../../../../store/features/assesments/selectors";
import { useDispatch } from "react-redux";
import {
  resetAssesmentsState,
  setAssesmentKey,
} from "../../../../store/features/assesments/assesmentSlice";
import { useEffect } from "react";

function CreateAssesmentPage() {
  const dispatch = useDispatch();
  const { setHeading, setSubheading } = useHeading();
  const { template, title, description } = useSelector(assesmentsSelector);

  setHeading("Create Assesment");
  setSubheading("This will help you create multiple assesments");

  const handleChange = (key, value) => {
    dispatch(setAssesmentKey({ key, value }));
  };

  useEffect(() => {
    return () => {
      dispatch(resetAssesmentsState());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <form className="flex flex-col gap-4">
        <CustomInput
          inputType={InputTypes.DROPDOWN}
          label="Select Template"
          value={template || "Choose from Templates"}
          onChange={(value) => handleChange("template", value)}
        />
        <CustomInput
          inputType={InputTypes.TEXT}
          value={title}
          onChange={(value) => handleChange("title", value)}
          label="Assesment Title"
          placeholder="e.g, Math Quiz 1.0"
        />
        <CustomInput
          inputType={InputTypes.MULTILINE}
          value={description}
          onChange={(value) => handleChange("description", value)}
          label="Assesment Description"
          placeholder="e.g, This is a quiz to test your knowledge of Math"
        />
      </form>
    </div>
  );
}

export default CreateAssesmentPage;
