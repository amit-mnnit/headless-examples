import React, { useRef } from "react";
import { AdaptiveForm } from "@aemforms/af-react-renderer";
import customMappings from "../utils/mappings";
import { Action, FieldModel, FieldsetModel } from "@aemforms/af-core";
import demoJson from "../form-definitions/demo.form.json";
import "@aemforms/af-canvas-theme/dist/theme.css";
import { FormModel } from "@aemforms/af-core";

const Form = () => {
  const formRef = useRef<FormModel | FieldModel | FieldsetModel | null>(null);

  const onInitialize = (action: Action) => {
    console.log("Initializing Form");
    formRef.current = action.target;
  };

  const onFieldChanged = (action: Action) => {
    console.log(
      "On Field Changed (Executes everytime a form field is updated)"
    );
  };

  const submitHandler = (action: Action) => {
    //@ts-expect-error
    const paylod = action.target.exportData();
    console.log("Submitting ", paylod);
    // post the data to the server
  }

  return (
    <AdaptiveForm
      formJson={demoJson}
      mappings={customMappings}
      onInitialize={onInitialize}
      onFieldChanged={onFieldChanged}
      onSubmitForm={submitHandler}
    />
  );
};

export default Form;
