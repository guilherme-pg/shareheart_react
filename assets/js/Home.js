import React from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";


const Home = () => {

  return (
    <View style={styles.container}>
      
      <Text style={styles.info}>Home</Text>

      <Text style={styles.info}>Lista com instituições?</Text>

      <Text style={styles.info}>Lista com campanhas?</Text>

      <Text style={styles.info}> onde colocar os botões de cadastro e login?</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  }
});

export default Home;
