import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const Cadastro = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [telephone, setTelephone] = useState('');
  const [birthday, setBirthday] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        // Aqui você pode lidar com a resposta do servidor, como navegar para outra página ou exibir uma mensagem de sucesso
      })
      .catch(err => {
        console.log(err);
        // Aqui você pode lidar com erros, como exibir uma mensagem de erro ao usuário
      });
  };

  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#5BCEAD',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
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
});

export default Cadastro;
