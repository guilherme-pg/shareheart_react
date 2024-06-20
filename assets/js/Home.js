import React from "react";
import {
  View,
  Text,
  StyleSheet, TouchableOpacity 
} from "react-native";



const Home = ({ navigateTo }) => {
  const handleNavigation = () => {
    if (navigateTo) {
      navigateTo("Cadastro");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo ao ShareHeart!</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "#EABFA7",
  },
  text: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: "#5BCEAD",
    fontWeight: 'bold',
  },
});

export default Home;
