
const {REACT_APP_FETCH_FROM_AEM, REACT_APP_SERVER_PORT, REACT_APP_AEM_FORM_PATH } = process.env;

export const getURL = () =>{
  if(REACT_APP_FETCH_FROM_AEM === 'true'){
    return `/content/forms/af/${REACT_APP_AEM_FORM_PATH}/jcr:content/guideContainer.model.json`;
  }else {
    return `http://localhost:${REACT_APP_SERVER_PORT}/content/core-components-examples/library/adaptive-form/textinput/_jcr_content/root/responsivegrid/demo/component/guideContainer/container/textinput_demo.model.json`
  }
}