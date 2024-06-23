import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ShapeLeft from './assets/img/shape-left-desktop.png';
import ShareHeartLogo from './assets/img/shareHeartLogo-simbolo.png';
import Home from "./assets/js/Home";
import CadastroUser from "./assets/js/CadastroUser";
import GeoLocation from "./assets/js/GeoLocation";
import Login from "./assets/js/Login";
import LoggedLandPage from "./assets/js/LoggedLandPage";
import ListUpdateDelDoacao from "./assets/js/ListUpdateDelDoacao";
import CadastroDoacao from "./assets/js/CadastroDoacao";


const App = () => {

  // Definição de estados com useState
  const [openMenu, setopenMenu] = useState(false);
  const [currentPage, setcurrentPage] = useState("Início");


  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    setopenMenu(!openMenu);
  };


  // Função para navegar para uma página específica
  const navigateTo = (page) => {
    setcurrentPage(page);
    setopenMenu(false);
  };

  // Função para renderizar a página atual com base no estado currentPage
  const renderPage = () => {
    switch (currentPage) {
      case "Início":
        return <Home navigateTo={navigateTo} />;
      case "Login":
        return <Login navigateTo={navigateTo} />;
      case "CadastroUser":
        return <CadastroUser navigateTo={navigateTo} />;
      case "ListUpdateDelDoacao":
        return <ListUpdateDelDoacao navigateTo={navigateTo} />;
      case "CadastroDoacao":
        return <CadastroDoacao navigateTo={navigateTo} />;
      case "Instituições":
        return <Institutions navigateTo={navigateTo} />;
      case "GeoLocation":
        return <GeoLocation navigateTo={navigateTo} />;
      case "LoggedLandPage":
        return <LoggedLandPage navigateTo={navigateTo} />;
      default:
        return null;
    }
  };


  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={ShapeLeft} style={styles.ShapeLeft} ></Image>
        <TouchableOpacity style={styles.footerIcon} onPress={() => navigateTo("Início")}><View style={styles.headerContainerLogo}>
          <Image source={ShareHeartLogo} style={styles.ShareHeartLogoHeader}></Image>
          <Text style={styles.title}>ShareHeart</Text>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
          <MaterialCommunityIcons name="menu" size={35} color="black" />
        </TouchableOpacity>
      </View>


      {/* Menu */}
      {openMenu && (
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo("Início")}>
            <Text style={styles.menuItemText}>Início</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo("Login")}>
            <Text style={styles.menuItemText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo("CadastroUser")}>
            <Text style={styles.menuItemText}>Cadastro do Usuário</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo("Institutions")}>
            <Text style={styles.menuItemText}>Instituições</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo("GeoLocation")}>
            <Text style={styles.menuItemText}>GeoLocation</Text>
          </TouchableOpacity>

        </View>
      )}


      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {renderPage()}
      </ScrollView>


      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerIcon} onPress={() => navigateTo("CadastroUser")}>
          <MaterialCommunityIcons name="badge-account-horizontal" size={46} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon} onPress={() => navigateTo("Início")}>
          <MaterialCommunityIcons name="home-circle" size={46} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5BCEAD",
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    
    
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  headerContainerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  ShareHeartLogoHeader: {
    width: 60,
    resizeMode: 'contain',
  },
  ShapeLeft: {
    width: 400,
    top: -280,
    
    position: 'absolute',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: 'red',
    position: 'relative',
    color: 'black',
    left: 0,
    top: 0,
  },
  menuIcon: {
    padding: 10,
  },
  menu: {
    backgroundColor: "#EABFA7",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 3,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuItemText: {
    fontSize: 16,
    color: "#555",
    textAlign: "right",
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    backgroundColor: "#EABFA7",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  footerIcon: {
    padding: 10,
  },
});



export default App;
