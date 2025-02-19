import { View, Text, StyleSheet } from "react-native";
import { StopsView } from "./StopsView";
import { DepartureTimeView } from "./DepartureTimeView";
import { TrainNumberNameCard } from "./TrainNumberNameCard";

export const DepartureCard = ({item}: {item: any}) => {
  return <View style={styles.card}>
  <TrainNumberNameCard tripNumber={item.TripNumber} service={item.Service} />

  <Text style={styles.info}>{item.Info}</Text>

  <View style={styles.details}>
    <DepartureTimeView time={item.Time} />
    <Text style={styles.platform}>
      Platform: {item.Platform === '-' ? 'Not Assigned' : item.Platform}
    </Text>
  </View>
  <StopsView stops={item.Stops} />
</View>
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      },

    info: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#666',
        marginBottom: 5,
      },
      details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
      },
      platform: {
        fontSize: 14,
        fontWeight: '600',
        color: '#444',
      },
});
