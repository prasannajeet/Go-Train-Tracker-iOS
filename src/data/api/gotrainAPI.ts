import {apiClient} from './apiclient';
import {GoTrainApiEndpoints} from '../../constants/constants';

type Result<T, E = Error> = {
  success: boolean;
  data?: T;
  error?: E;
};

async function fetchGoTrainData<T>(endpoint: string): Promise<Result<T>> {
  try {
    const response = await apiClient.get(endpoint);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error : new Error('Unknown error occurred'),
    };
  }
}

export async function getUnionStationDepartures(): Promise<Result<any>> {
  return fetchGoTrainData(GoTrainApiEndpoints.UnionStationDepartures);
}
