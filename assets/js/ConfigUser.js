import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';



const ConfigUser = () => {
  return (
    <View style={styles.container}>
      




      
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



export default ConfigUser;
