import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const GeoLocation = () => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Geolocalização</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  }
});

export default GeoLocation;
