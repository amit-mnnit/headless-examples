import React from "react";
import { AdaptiveForm } from "@aemforms/af-react-renderer";
import customMappings from "../utils/mappings";
import { Action } from "@aemforms/af-core";
import demoJson from "../form-definitions/demo.form.json";
import "@aemforms/af-canvas-theme/dist/theme.css";

const Form = () => {
  const onSubmitSuccess = (action: Action) => {
    console.log("Submitting " + action);
    const thankyouPage = action?.payload?.body?.redirectUrl;
    const thankYouMessage = action?.payload?.body?.thankYouMessage;
    if (thankyouPage) {
      window.location.replace(thankyouPage);
    } else if (thankYouMessage) {
      alert(thankYouMessage);
    }
  };

  const onSubmitError = (action: Action) => {
    alert("Encountered an internal error while submitting the form.");
  };

  const onInitialize = (action: Action) => {
    console.log("Initializing Form");
  };

  const onFieldChanged = (action: Action) => {
    console.log(
      "On Field Changed (Executes everytime a form field is updated)"
    );
  };

  return (
    <AdaptiveForm
      formJson={demoJson}
      mappings={customMappings}
      onInitialize={onInitialize}
      onFieldChanged={onFieldChanged}
      onSubmitSuccess={onSubmitSuccess}
      onSubmitError={onSubmitError}
      onSubmitFailure={onSubmitError}
    />
  );
};

export default Form;
