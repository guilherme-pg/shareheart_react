import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import NomeShareHeart from "../img/shareheart-logotipo-white.png";



const Home = ({ navigateTo }) => {
  

  const handleNavigation = (page) => {
    console.log("navigateTo HOME:    ", navigateTo)
    if (navigateTo) {
      console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
      navigateTo(page);
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.container_level_2}>
        <Image source={NomeShareHeart} style={styles.NomeShareHeart}></Image>
        <Text style={styles.text}>Doar pode salvar uma vida!</Text>
        <Text style={styles.text}>Que tal começar hoje?</Text>
        <Text style={styles.text}>Vem com a gente!</Text>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleNavigation("CadastroUser")}>
          <Text style={styles.menuItemText}>Cadastre-se agora</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.container_level_2}>
        <Text style={styles.text}>Faça seu Login!</Text>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleNavigation("Login")}>
          <Text style={styles.menuItemText}>Login</Text>
        </TouchableOpacity>
      </View>
      
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
  container_level_2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "red",
    // margin: 10,
  },
  NomeShareHeart: {
    width: 200,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  ContainerBotoes: {
    
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
  menuItem: {
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
  },
  menuItemText: {
    fontSize: 16,
    color: "#5BCEAD",
    fontWeight: 'bold',
  },
});



export default Home;
