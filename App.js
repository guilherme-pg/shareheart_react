import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import RegisterUserInstitution from "./assets/js/RegisterUserInstitution";
import LoggedLandPage from "./assets/js/LoggedLandPage";
import Institutions from "./assets/js/Institutions";
import Campaigns from "./assets/js/Campaigns " ;
import RegisterCampaigns from "./assets/js/RegisterCampaigns";
import Projects from "./assets/js/Projects";
import Home from "./assets/js/Home";

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
        return <Home />;
      case "Cadastro":
        return <RegisterUserInstitution />;
      case "Land Page":
        return <LoggedLandPage />;
      case "Instituições":
        return <Institutions />;
      case "Campanhas":
        return <Campaigns />;
      case "Cadastro de Campanha":
        return <RegisterCampaigns />;
      case "Geolocalização":
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
        <Text style={styles.title}>Portfolio</Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
          <MaterialCommunityIcons name="menu" size={30} color="black" />
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
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo("Formações")}
          >
            <Text style={styles.menuItemText}>Formações</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo("Instituições")}
          >
            <Text style={styles.menuItemText}>Instituições</Text>
          </TouchableOpacity>
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
            onPress={() => navigateTo("Geolocalização")}
          >
            <Text style={styles.menuItemText}>Geolocalização</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo("Projetos")}
          >
            <Text style={styles.menuItemText}>Projetos</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {renderPage()}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerIcon} onPress={() => navigateTo("Início")}>
          <MaterialCommunityIcons name="home-circle" size={46} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  menuIcon: {
    padding: 10,
  },
  menu: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    shadowColor: "#000",
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
    alignItems: "center",
    padding: 10,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowRadius: 5,
    elevation: 3,
  },
  footerIcon: {
    padding: 10,
  },
});

export default App;
