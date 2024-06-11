import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const RegisterCampaigns = () => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Campanha</Text>

      <Text style={styles.title}>disponível apenas para Instituição logada</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "brown",
  }
});

export default RegisterCampaigns;
