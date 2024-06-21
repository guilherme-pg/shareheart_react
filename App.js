import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ShapeLeft from './assets/img/shape-left-desktop.png';
import ShareHeartLogo from './assets/img/shareHeartLogo-simbolo.png';
import RegisterUserInstitution from "./assets/js/RegisterUserInstitution";
import LoggedLandPage from "./assets/js/LoggedLandPage";
// import Campaigns from "./assets/js/Campaigns " ;
import RegisterCampaigns from "./assets/js/RegisterCampaigns";
import Home from "./assets/js/Home";
import Cadastro from "./assets/js/Cadastro";
import GeoLocation from "./assets/js/GeoLocation";

const App = () => {
  const [openMenu, setopenMenu] = useState(false);
  const [currentPage, setcurrentPage] = useState("Início");

  const toggleMenu = () => {
    setopenMenu(!openMenu);
  };

  const navigateTo = (page) => {
    setcurrentPage(page);
    setopenMenu(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "Início":
        return <Home navigateTo={navigateTo} />;
      case "Cadastro":
        return <Cadastro navigateTo={navigateTo} />;
      case "Land Page":
        return <LoggedLandPage />;
      case "Instituições":
        return <Institutions />;
      case "Campanhas":
        return <Campaigns />;
      case "Cadastro de Campanha":
        return <RegisterCampaigns />;
      case "GeoLocation":
        return <GeoLocation />;
      case "Projetos":
        return <Projects />;
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
            onPress={() => navigateTo("Início")}
          >
            <Text style={styles.menuItemText}>Início</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo("Cadastro")}
          >
            <Text style={styles.menuItemText}>Cadastro</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo("Instituições")}
          >
            <Text style={styles.menuItemText}>Instituições</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo("Campanhas")}
          >
            <Text style={styles.menuItemText}>Campanhas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo("Cadastro de Campanha")}
          >
            <Text style={styles.menuItemText}>Cadastro de Campanha</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo("GeoLocation")}
          >
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
        <TouchableOpacity style={styles.footerIcon} onPress={() => navigateTo("Cadastro")}>
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
