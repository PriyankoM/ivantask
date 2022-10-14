import { View, Text,SafeAreaView,StyleSheet,PermissionsAndroid,ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import MapViewComponent from '../Components/MapViewComponent';


const MapScreen = () => {

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Access Your Location",
          message:
            "The App need your Location " +
            "so you can show your position in map",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the GPS");
        EnableLocation()
      } else {
        console.log("GPS permission denied");
//        requestLocationPermission()
      }
    } catch (err) {
      console.warn(err);
//      requestLocationPermission()
    }
  };
  const [currentLocation,setCurrentLocation]=useState({
    latitude: null,
    longitude: null,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  // const onRegionChangeComplete = (newregion) => {
    // setRegion(newregion);
    // if (mapMoved) {
    //     setMapMoved(false);
    //     updateMap({
    //         latitude: newregion.latitude,
    //         longitude: newregion.longitude
    //     },'region-change');
    // }
// }
  
  
  const EnableLocation = () => {
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 10000,
      fastInterval: 5000,
    })
      .then((data) => {
        Geolocation.getCurrentPosition((position)=>{
          setCurrentLocation({latitude:position.coords.latitude,
            longitude:position.coords.longitude,
            latitudeDelta:0.0922,
            longitudeDelta:0.0421
          })
        })
      })
      .catch((err) => {
        
      });
  }
  //requestLocationPermission()

  useEffect(()=>{
    requestLocationPermission()
    console.log(currentLocation)
  },[])

  return (
    
      <View style={styles.container}>
      {currentLocation.latitude ?<MapViewComponent currentLocation={currentLocation} />:<ActivityIndicator style={{flex:1}} animating size="large"/>}
    </View>
    
  )
}
const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1, //the container will fill the whole screen.
      justifyContent: "flex-end",
      alignItems: "center",
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });
export default MapScreen