declare module 'react-native-config' {
  interface NativeConfig {
    GO_TRAIN_API_KEY: string;
    API_URL: string;
  }

  const Config: NativeConfig;
  export default Config;
}
