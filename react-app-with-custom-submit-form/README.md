# Getting Started with AEM Headless Adaptive Form App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a sample react app which will help to create JSON based forms using Adaptive Form libraries. This application is built to consume the form model definition of an AEM Adaptive Form.

## System Requirements

* Latest release of GIT

* Node.js 16.13.0 or later

* React 16.14.0 or later

## Libraries required
[af-core](https://www.npmjs.com/package/@aemforms/af-core) - To manage the state and create form model using json.

[af-react-renderer](https://www.npmjs.com/package/@aemforms/af-react-renderer) - To communicate between model and view layer

[af-react-vanilla-components](https://www.npmjs.com/package/@aemforms/af-react-vanilla-components) - View layer components that is optional you can create your own components.


## Available Scripts

In the project directory, you can run:

### `npm install`

Install dependencies.

### `npm start`

After running npm start, your app will be automatically opened in your browser (at path http://localhost:3000). If you make edits, the page will reload.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder. It bundles React in production mode and optimizes the build for the best performance. See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Mappings Object

A Mappings Object is a JavaScript map that maps the field types defined in the Specification to its respective React Component. The Adaptive Form Super Component uses this map to render the different components defined in the Form JSON.

To use that in your project use the following import, assuming you have added the project as a dependency in your project

```
import {mappings} from '@aemforms/af-react-vanilla-components'
```

Once you have fetched the JSON for the form or you can create json locally, the code would look like

```
import {mappings} from '@aemforms/af-react-vanilla-components'
const json = {...}
<AdaptiveForm mappings={mappings} formJson={json} />
```

## Custom Submit Form
If you want to submit the form in external url then follow the below guidelines.
- Pass `submitHandler` callback to `AdaptiveForm` component like this -
```
const submitHandler = (action: Action) => {
  const paylod = action.target.exportData();
  console.log("Submitting ", paylod);
  // add code here to post the data to the server
}

<AdaptiveForm
  formJson={demoJson}
  mappings={customMappings}
  onSubmitForm={submitHandler}
/>
```
 - You can acccess `onSubmitForm` callback in the json with name `custom:submitForm` and you can use this callback in the following way.
```
{
  "fieldType": "button",
  "label": {
    "value": "Submit"
  },
  "events": {
    "click":"dispatchEvent($form, 'custom:submitForm')"
  }
}
```

# Links
1. [Story book](https://opensource.adobe.com/aem-forms-af-runtime/storybook)
2. [HTTP API Docs](https://opensource.adobe.com/aem-forms-af-runtime/api)
3. [Adaptive Form Runtime packages](https://www.npmjs.com/org/aemforms)
