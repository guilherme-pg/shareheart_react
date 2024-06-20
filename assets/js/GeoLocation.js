import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';



const GeoLocation = () => {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Waiting...';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = `Latitude: ${location.coords.latitude}, Longitude: ${location.coords.longitude}`;
    }

    return (
        <View style={styles.container}>

            <Text style={styles.information}>Loading... only takes a few seconds...</Text>

            {location && (
                <View style={styles.container_map}>
                    <Text style={styles.title}>Geolocation</Text>

                    <MapView style={styles.map}
                      initialRegion={{
                          latitude: location.coords.latitude,
                          longitude: location.coords.longitude,
                          latitudeDelta: 0.0922,
                          longitudeDelta: 0.0421,
                    }}>
                    <Marker coordinate={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                    }}/>
                    </MapView>
                </View>
            )}
        </View>
    );
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5BCEAD",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    color: "#304145"
  },
  container_image_name: {
    backgroundColor: "#ECE9E1",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  information: {
    fontSize: 20,
    marginBottom: 20,
    color: "#304145"
  },
  home_image: {
    width: 300,
    height: 350,
    resizeMode: "cover"
  },
  container_icon: {
    flexDirection: "row",
    marginTop: 20
  },
  icon: {
    marginHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5
  },
  container_map: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
  },
  map: {
    width: '100%',
    height: '100%',
  }
});



export default GeoLocation;