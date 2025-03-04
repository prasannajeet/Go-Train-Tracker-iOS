import { View, Text, StyleSheet } from "react-native";
import { StopsView } from "./StopsView";
import { DepartureTimeView } from "./DepartureTimeView";
import { TrainNumberNameCard } from "./TrainNumberNameCard";

/**
 * Interface for the departure item data structure
 */
interface DepartureItem {
  TripNumber: string;
  Service: string;
  Info: string;
  Time: string;
  Platform: string;
  Stops: string[];
}

/**
 * DepartureCard component displays information about a single train departure
 * including trip number, service name, departure time, platform, and stops.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {DepartureItem} props.item - Departure information object
 * @returns {JSX.Element} Rendered departure card
 */
export const DepartureCard = ({item}: {item: DepartureItem}): JSX.Element => {
  return <View style={styles.card}>
    <TrainNumberNameCard tripNumber={item.TripNumber} service={item.Service} />

    <Text style={styles.info}>{item.Info}</Text>

    <View style={styles.details}>
      <DepartureTimeView time={item.Time} />
      <Text style={styles.platform}>
        Platform: {item.Platform === '-' ? 'N/A' : item.Platform}
      </Text>
    </View>
    <StopsView stops={item.Stops} />
  </View>
};

/**
 * Styles for the DepartureCard component
 */
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
