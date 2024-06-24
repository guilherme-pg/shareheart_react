import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert, Modal  } from 'react-native';



const YOUR_IP = "192.168.0.162";



const ListUpdateDelDoacao = () => {

  const [donations, setDonations] = useState([]);
  const [editingDonation, setEditingDonation] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    item: '',
    hour: '',
    location: '',
  });


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



  const handleUpdate = (donation) => {
    setEditingDonation(donation);
    setFormData({
      email: donation.email,
      item: donation.item,
      hour: donation.hour,
      location: donation.location,
    });
    setModalVisible(true);
  };

  const handleSaveUpdate = async () => {
    try {
      const response = await fetch(`http://${YOUR_IP}:3000/donation/update/${editingDonation._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.status === 'success') {
        setDonations(donations.map(d => d._id === editingDonation._id ? { ...d, ...formData } : d));
        setEditingDonation(null);
        setFormData({ email: '', item: '', hour: '', location: '' });
        setModalVisible(false);
        Alert.alert('Sucesso', 'Doação atualizada com sucesso');
      } else {
        Alert.alert('Erro', 'Falha ao atualizar doação');
      }
    } catch (error) {
      console.error('Erro ao atualizar doação:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao atualizar a doação');
    }
  };



  const handleDelete = async (id) => {
    // Função para deletar a doação
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
            onPress={() => handleUpdate(donation)}>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => confirmDelete(donation._id)}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}

      {editingDonation && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
            setEditingDonation(null);
          }}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Item"
              value={formData.item}
              onChangeText={(text) => setFormData({ ...formData, item: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Hora"
              value={formData.hour}
              onChangeText={(text) => setFormData({ ...formData, hour: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Local"
              value={formData.location}
              onChangeText={(text) => setFormData({ ...formData, location: text })}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleSaveUpdate}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setModalVisible(false);
                setEditingDonation(null);
                setFormData({ email: '', item: '', hour: '', location: '' });
              }}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
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
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  }
});


export default ListUpdateDelDoacao;
