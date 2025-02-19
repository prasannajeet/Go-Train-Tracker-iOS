import {useUnionStationDeparturesViewModel} from './unionstationdepsviewmodel';
import {View, Text, ActivityIndicator, StyleSheet, FlatList} from 'react-native';
import { formatDate } from '../../utils/dateutilts';
import { DepartureCard } from '../../components/DepartureCard';
export const UnionStationDeparturesScreen = () => {
  const {departures, loading, error} = useUnionStationDeparturesViewModel();
  return (
    
    <View style={styles.container}>
        <Text style={styles.header}>Union Station Departures</Text>
        <Text style={styles.date}>{formatDate(new Date())}</Text>
      
      {loading && (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color="#0057a0" />
        </View>
      )}

      {error && (
        <View style={styles.centerContainer}>
          <Text style={styles.errorText}>Error: {error}</Text>
        </View>
      )}

      {!loading && !error && departures && (
        departures.length > 0 ? (
          <View>
            <Text style={styles.sectionHeader}>Departing Soon</Text>
            <FlatList
              data={departures.filter((item: any) => item.Platform !== '-')}
              renderItem={({item}: any) => (
                <DepartureCard item={item} />
              )}
              keyExtractor={(item: any) => item.TripNumber}
              ItemSeparatorComponent={() => <View style={{height: 8}} />}
            />

            <Text style={[styles.sectionHeader, {marginTop: 16}]}>Awaiting Departure Details</Text>
            <FlatList 
              data={departures.filter((item: any) => item.Platform === '-')}
              renderItem={({item}: any) => (
                <DepartureCard item={item} />
              )}
              keyExtractor={(item: any) => item.TripNumber}
              ItemSeparatorComponent={() => <View style={{height: 8}} />}
            />
          </View>
        ) : (
          <Text style={styles.header}>No departures found</Text>
        )
      )}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    date: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },
    sectionHeader: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      padding: 10,
    },
    header: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },
    errorText: {
      color: 'red',
      fontSize: 16,
      textAlign: 'center',
    },
  });
