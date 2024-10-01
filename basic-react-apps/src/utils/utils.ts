
const {REACT_APP_FETCH_FROM_AEM, REACT_APP_AEM_FORM_PATH } = process.env;

export const getURL = () =>{
  if(REACT_APP_FETCH_FROM_AEM === 'true'){
    return `/content/forms/af/${REACT_APP_AEM_FORM_PATH}/jcr:content/guideContainer.model.json`;
  }else {
    return `https://www.aemcomponents.dev/content/core-components-examples/library/adaptive-form/verticaltabs/jcr:content/root/responsivegrid/demo/component/guideContainer.model.json`
  }
}