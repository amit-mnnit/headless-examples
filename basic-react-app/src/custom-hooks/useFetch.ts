import { useState, useEffect } from 'react';
import {getURL} from '../utils/utils';

const useFetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(getURL());
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