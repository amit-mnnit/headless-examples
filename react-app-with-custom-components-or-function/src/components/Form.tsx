import React, { useEffect } from "react";
import { AdaptiveForm } from "@aemforms/af-react-renderer";
import { Action, FunctionRuntime } from "@aemforms/af-core";
import "@aemforms/af-canvas-theme/dist/theme.css";
import * as defauleCustomFunction from '@aemforms/af-custom-functions';

import { myCustomFunction } from "../utils/customFunction";
import demoJson from "../form-definitions/demo.form.json";
import customMappings from "../utils/mappings";

const Form = () => {

  useEffect(() => {
    FunctionRuntime.registerFunctions({ ...defauleCustomFunction, myCustomFunction });
  }, []);

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
