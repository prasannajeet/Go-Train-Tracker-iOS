import {useState, useEffect} from 'react';
import {getTripUpdates} from '../../data/api/gotrainAPI';
export const useAllTrainsViewModel = () => {
  const [tripUpdates, setTripUpdates] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllNetworkUpdates = async () => {
      try {
        const response = await getTripUpdates();
        setError(null);
        setTripUpdates(response);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAllNetworkUpdates();
  }, []);

  return {tripUpdates, loading, error};
};
