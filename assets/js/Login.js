import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';



// const YOUR_IP = ; // PRECISA MUDAR E COLOCAR PARA VARIÁVEL DE AMBIENTE



const Login = ({ navigateTo }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleLogin = () => {
    const userCredentials = {
      email: email,
      password: password
    };


    axios.post(`http://${YOUR_IP}:3000/user/login`, userCredentials)
      .then(res => {
        console.log(res.data);
        if (res.data.status === 'success') {
          // Redirecionar para a página após o login
          if (navigateTo) {
            navigateTo("LoggedLandPage");
          }
        } else {
          // Exibir mensagem de erro
          setErrorMessage('Credenciais inválidas. Por favor, tente novamente.');
        }
      })
      .catch(err => {
        console.log(err);
        // Exibir mensagem de erro
        setErrorMessage('Erro ao realizar login. Por favor, tente novamente.');
      });
  };


  return (
    <View style={styles.container}>
      <Text style={styles.titleLogin}>Login</Text>
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
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
  titleLogin: {
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
    width: 250,
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
  errorMessage: {
    fontSize: 14,
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
});



export default Login;
