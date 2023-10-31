import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { ActivityIndicator } from "react-native-paper";

const HotelMap = ({ coordinates }) => {
  const initial = {
    id: "64da3087a499387c8dc63af6",
    latitude: 37.7749,
    latitudeDelta: 0.01,
    longitude: -122.4194,
    longitudeDelta: 0.01,
    name: "Hotel Califonia",
  };
  if(coordinates === undefined){
    return (
      <ActivityIndicator />
    )
  }
  return (
    //here I have made some changes in the mapView and Marker
      <MapView style={styles.maps} initialRegion={coordinates || initial}>
        <Marker coordinate={coordinates} title={undefined ?  "Hotel Destination" : coordinates?.name} />
      </MapView>
  );
};

export default HotelMap;

const styles = StyleSheet.create({
  maps: {
    marginVertical: 10,
    height: 120,
    width: "100%",
    borderRadius: 12,
  },
});
