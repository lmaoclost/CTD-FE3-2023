import { useEffect, useState } from 'react';
import { api } from '../services/api';

export function useApiRequest(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get(url);
        setData(response.data);
      } catch (error) {
        alert(error.response.data.message)
      }
    }
    loadData();
  }, [url])

  return data;
}