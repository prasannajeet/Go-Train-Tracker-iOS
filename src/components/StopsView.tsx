import { StyleSheet, Text, View } from "react-native";

export const StopsView = ({stops}: {stops: any[]}) => {
  return <View>
  <Text style={styles.stopHeader}>Stops:</Text>
  <Text style={styles.stops}>
    {stops.map((stop: any) => stop.Name).join(' → ')}
  </Text>
  </View>
};

const styles = StyleSheet.create({
    stopHeader: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 5,
      },
      stops: {
        fontSize: 13,
        color: '#555',
      },
});
