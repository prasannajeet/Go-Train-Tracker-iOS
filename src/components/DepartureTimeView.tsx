import { StyleSheet, View, Text } from "react-native";
import { formatTime } from "../utils/dateutilts";

export const DepartureTimeView = ({time}: {time: string}) => {
  return <View>
    <Text style={styles.departureTime}>Departure: {formatTime(time)}</Text>
  </View>;
};

const styles = StyleSheet.create({
    departureTime: {
        fontSize: 14,
        fontWeight: '600',
        color: '#444',
        },
});
