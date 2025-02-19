import Config from 'react-native-config';
import {GO_TRAIN_API_URL, TIMEOUT} from '../../constants/constants';
import axios from 'axios';

const goTrainApiKey = Config.GO_TRAIN_API_KEY;
if (!goTrainApiKey) {
  throw new Error('goTrainApiKey is not set');
}

export const apiClient = axios.create({
  baseURL: GO_TRAIN_API_URL,
  timeout: TIMEOUT,
});

apiClient.interceptors.request.use(
  config => {
    if (!config.params) config.params = {};
    config.params['key'] = goTrainApiKey; // Automatically append API key
    console.log(
      'Full URL is::',
      `${config.baseURL}${config.url}?${Object.entries(config.params)
        .map(([key, value]) => `${key}=${value}`)
        .join('&')}`,
    );
    return config;
  },
  error => {
    console.error('Request Error in config:', error);
    return Promise.reject(error);
  },
);
