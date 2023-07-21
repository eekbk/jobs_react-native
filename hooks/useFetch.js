import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': '2bf185b693msh87dd9c2f4a9dd1dp197b80jsn680282823184',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert('There is an error')
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
  }

  return { data, isLoading, error, refetch };

}

export default useFetch;
