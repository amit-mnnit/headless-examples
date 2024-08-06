import { useState, useEffect } from 'react';

const useFetch = () => {
  const [data, setData] = useState(null);
  const { REACT_APP_AEM_FORM_PATH } = process.env;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `/content/forms/af/${REACT_APP_AEM_FORM_PATH}/jcr:content/guideContainer.model.json`;
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
      }
    };

    fetchData();
  }, []);

  return data
};

export default useFetch;