import { View, Text,SafeAreaView,StyleSheet,PermissionsAndroid,ActivityIndicator } from 'react-native'
import React,{useEffect, useRef, useState} from 'react'
import MapView,{PROVIDER_GOOGLE,Marker} from 'react-native-maps'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const MapViewComponent = (props) => {
    const [myRegion,ChangeMyRegion]=useState({latitude:null,longitude:null,latitudeDelta: 0.0922,longitudeDelta: 0.0421})
    const mapRef=useRef()
    const mapView = React.createRef();
// const animateMap = () => {
//     mapView.currentLocation.animateToRegion({ // Takes a region object as parameter
//         longitude: 28.97916756570339,
//         latitude: 41,
//         latitudeDelta: 0.4,
//         longitudeDelta: 0.4,
//     },1000);
// }
useEffect(() => {
    if (mapRef.current) {
      // list of _id's must same that has been provided to the identifier props of the Marker
      mapRef.current.animateToRegion(myRegion,1000);
    }
  }, [myRegion]);
  return (
    <View style={{ flex: 1,width:"100%",height:"100%" }}>
    <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        //specify our coordinates.
        initialRegion={props.currentLocation}
        showsUserLocation={true}
        showsMyLocationButton={true}
        onRegionChangeComplete={props.onRegionChangeComplete}
      >
        
        {myRegion.latitude?<Marker coordinate={{ latitude: myRegion.latitude, longitude: myRegion.longitude }} />:null}

      </MapView>
      <View style={{flexGrow: 1, position: 'absolute', top: 12, width: '100%',paddingHorizontal:'10%',right:20 }} >
        <GooglePlacesAutocomplete
      placeholder='Search'
      textInputProps={{
        placeholderTextColor: '#a0a4af',
        returnKeyType: "search"
      }} 
      styles={{
        container: {
          backgroundColor: '#fff',
          },
        description: {
          fontWeight: 'bold',
        },
        textInput: {
          //backgroundColor: theme.color.secondaryScreen,
          color: '#000',
          },
        predefinedPlacesDescription: {
          color: '#000',
        },
      }}
      fetchDetails={true}
      listViewDisplayed='auto'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
        ChangeMyRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.3922,
            longitudeDelta: 0.3421
        })
      }}
      onFail={error => console.error(error)}
      query={{
        key: 'AIzaSyDRLyy79IzuIXtCGqooze42pjQLcYfpdGE',
        language: 'en',
      }}
    />
    </View>
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
    searchBoxView:{
        position:"absolute",
        backgroundColor:"#fff",
        padding:8,
        borderRadius:8
    }
  });

export default MapViewComponent