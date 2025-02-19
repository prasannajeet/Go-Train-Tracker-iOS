import {useEffect, useState} from 'react';
import {getUnionStationDepartures} from '../../data/api/gotrainAPI';

export const useUnionStationDeparturesViewModel = () => {
  const [departures, setDepartures] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDepartures = async () => {
    setLoading(true);
    setDepartures([]);
    setError(null);
    try {
      const result = await getUnionStationDepartures();
      if (result.success) {
        setDepartures(
          [...result.data.AllDepartures.Trip].sort(
            (a, b) => new Date(a.Time).getTime() - new Date(b.Time).getTime(),
          ),
        );
        setError(null);
      } else {
        setDepartures([]);
        setError(result.error?.message || 'Unknown error');
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Unknown error');
      setDepartures([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDepartures();
  }, []);

  return {
    departures,
    loading,
    error,
    refreshDepartures: fetchDepartures,
  };
};
