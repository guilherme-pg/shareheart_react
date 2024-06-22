import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { TextInputMask } from 'react-native-masked-text';



// const YOUR_IP = ; // PRECISA MUDAR E COLOCAR PARA VARIÁVEL DE AMBIENTE



const CadastroUser = ({ navigateTo }) => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [telephone, setTelephone] = useState('');
  const [birthday, setBirthday] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


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
    

    axios.post(`http://${YOUR_IP}:3000/user/add`, newUser)
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
          <TextInputMask
            type={'cpf'}
            value={cpf}
            onChangeText={(text) => setCpf(text)}
            style={styles.input}
            placeholder="CPF"
          />
          <TextInputMask
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99) '
            }}
            value={telephone}
            onChangeText={(text) => setTelephone(text)}
            style={styles.input}
            placeholder="Telefone"
          />
          <TextInputMask
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY'
            }}
            value={birthday}
            onChangeText={(text) => setBirthday(text)}
            style={styles.input}
            placeholder="Data de Nascimento"
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

export default CadastroUser;
