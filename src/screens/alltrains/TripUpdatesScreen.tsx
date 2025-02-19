import React from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { useAllTrainsViewModel } from './tripupdatesviewmodel';


export function TripUpdatesScreen() {
  const { tripUpdates, loading, error } = useAllTrainsViewModel();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={{ color: 'red' }}>Error: {error}</Text>}
      <Text>All Trains</Text>
      <Text>{JSON.stringify(tripUpdates)}</Text>
    </View>
  );
}