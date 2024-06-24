import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';



const YOUR_IP = "192.168.0.162";



const ListUpdateDelDoacao = () => {

  
  const [donations, setDonations] = useState([]);


  useEffect(() => {
    // Função para buscar doações da API
    const fetchDonations = async () => {
      try {
        const response = await fetch(`http://${YOUR_IP}:3000/donation/`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data.status === 'success') {
          setDonations(data.donations);
        }
      } catch (error) {
        console.error('Erro ao buscar doações:', error);
      }
    };

    fetchDonations();
  }, []);



  const handleUpdate = (id) => {
    // Lógica para atualizar a doação
    console.log('Atualizar doação:', id);
  };



  const handleDelete = async (id) => {
    // Função para deletar a doação
    console.log("IIIIIIIIIIIIIIIIDDDDDDDDDDDDDD:  ", id)
    try {
      const response = await fetch(`http://${YOUR_IP}:3000/donation/delete/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.status === 'success') {
        setDonations(donations.filter(d => d._id !== id));
        Alert.alert('Sucesso', 'Doação deletada com sucesso');
      } else {
        Alert.alert('Erro', 'Falha ao deletar doação');
      }
    } catch (error) {
      console.error('Erro ao deletar doação:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao deletar a doação');
    }
  };


  const confirmDelete = (id) => {
    Alert.alert(
      "Confirmação de Deleção",
      "Você quer mesmo deletar esta Doação?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Sim",
          onPress: () => handleDelete(id)
        }
      ],
      { cancelable: true }
    );
  };



  return (
    <ScrollView contentContainerStyle={styles.container}>
      {donations.map((donation) => (
        <View key={donation._id} style={styles.container_level_2}>
          <Text style={styles.text}>Email: {donation.email}</Text>
          <Text style={styles.text}>Item: {donation.item}</Text>
          <Text style={styles.text}>Hora: {donation.hour}</Text>
          <Text style={styles.text}>Local: {donation.location}</Text>
          
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleUpdate(donation._id)}>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => confirmDelete(donation._id)}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  container_level_2: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    width: 300,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#5BCEAD",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: 'bold',
  },
});



export default ListUpdateDelDoacao;
