import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { TextInputMask } from 'react-native-masked-text';



const YOUR_IP = "192.168.0.162"; // PRECISA MUDAR E COLOCAR PARA VARIÁVEL DE AMBIENTE



const CadastroDoacao = ({ navigateTo }) => {


  const [email, setEmail] = useState('');
  const [item, setItem] = useState('');
  const [hour, setHour] = useState('');
  const [location, setLocation] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleCadastro = () => {
    const newUser = {
        email: email,
        item: item,
        hour: hour,
        location: location,
    };
    

    axios.post(`http://${YOUR_IP}:3000/donation/add`, newUser)
      .then(res => {
        setSuccessMessage('Cadastro realizado com sucesso! Redirecionando para a página de login...');
        // Redirecionar para a página de login após 3 segundos
        setTimeout(() => {
          if (navigateTo) {
            navigateTo("LoggedLandPage");
          }
        }, 3000);
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  };

  
  return (
    <View style={styles.container}>
      {successMessage ? (
        <Text style={styles.successMessage}>{successMessage}</Text>
      ) : (
        <>
          
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Item"
            onChangeText={(text) => setItem(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Hour"
            onChangeText={(text) => setHour(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Location"
            onChangeText={(text) => setLocation(text)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleCadastro}
          >
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'transparent',
    paddingHorizontal: 30,
  },
  titleCadastro: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 40,
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    width: 250
  },
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  successMessage: {
    fontSize: 18,
    color: 'green',
    textAlign: 'center',
    marginVertical: 20,
  },
});



export default CadastroDoacao;
