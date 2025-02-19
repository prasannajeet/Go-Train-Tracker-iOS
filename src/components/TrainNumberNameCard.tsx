import { StyleSheet, View, Text } from "react-native";

export const TrainNumberNameCard = ({tripNumber, service}: {tripNumber: string, service: string}) => {
  return (
    <View style={styles.tripHeader}>
      <Text style={styles.tripNumber}>{tripNumber} - {service}</Text>
    </View>
  );
};

const styles = StyleSheet.create({  
    tripHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
      },
      tripNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#00873D',
      },
});