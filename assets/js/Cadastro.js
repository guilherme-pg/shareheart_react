import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const Cadastro = ({ navigateTo }) => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [telephone, setTelephone] = useState('');
  const [birthday, setBirthday] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleCadastro = () => {
    const newUser = {
      name: name,
      cpf: cpf,
      telephone: telephone,
      birthday: birthday,
      address: address,
      email: email,
      password: password
    };

    axios.post('http://your-server-url/api/users/add', newUser)
      .then(res => {
        console.log(res.data);
        // Exibir mensagem de sucesso
        setSuccessMessage('Cadastro realizado com sucesso! Redirecionando para a página de login...');
        // Redirecionar para a página de login após 3 segundos
        setTimeout(() => {
          if (navigateTo) {
            navigateTo("Login");
          }
        }, 3000);
      })
      .catch(err => {
        console.log(err);
        // Aqui você pode lidar com erros, como exibir uma mensagem de erro ao usuário
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleCadastro}>Faça seu cadastro para começar a doar!</Text>
      {successMessage ? (
        <Text style={styles.successMessage}>{successMessage}</Text>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="CPF"
            onChangeText={(text) => setCpf(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Telefone"
            onChangeText={(text) => setTelephone(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Data de Nascimento"
            onChangeText={(text) => setBirthday(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Endereço"
            onChangeText={(text) => setAddress(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
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

export default Cadastro;
