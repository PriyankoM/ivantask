import { View, Text, TouchableOpacity,StyleSheet,Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from '../screen/MapScreen';
import HomeScreen from '../screen/HomeScreen';
import WorkScreen from '../screen/WorkScreen';
import NoteScreen from '../screen/NoteScreen';
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MenuScreen from '../screen/MenuScreen';

const Tab = createBottomTabNavigator();
const LargePlusButton=({c,onPress})=>(
  <TouchableOpacity 
  style={{
    top:-30,
    justifyContent:'center',
    alignItems:'center',
    ...styles.shadow
  }}
  onPress={onPress}
  >
    <Image style={{
      width:70,
      height:70,
      borderRadius:35,
      // backgroundColor:'#e32f45'
    }}
    source={require('./../plus.png')}
    />

  </TouchableOpacity>
)
const BottomTabs = () => {

  return (
    <Tab.Navigator
    initialRouteName="Map"
    screenOptions={{
      "tabBarActiveTintColor": "#363636",
      "tabBarInactiveTintColor": "#b2b3b6",
      "tabBarLabelStyle": {
        "fontSize": 13,
        "margin": 0,
        "padding": 0
      },
      "tabBarStyle": [
        {
          "display": "flex",
           height: '8%' 
        },
        null
        
      ]
    }}
    // screenOptions={{
    //     showLabel:false,
    //     tabBarStyle: { height: '8%' }
        
    // }}
    // tabBarOptions={{
    //   activeTintColor: '#363636',
    //   inactiveTintColor: '#b2b3b6',
    //   labelStyle: {
    //     fontSize: 13,
    //     margin: 0,
    //     padding: 0,
    //   },
    //   style:{...styles.shadow}
    // }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false,
      tabBarIcon:({f,color})=>(
        <View style={{alignItems:'center',justifyContent:'center',top:1}}>
          <Feather name="home" size={30} color={color} />
          {/* <Text style={{collor:f?'#797d81':'#adafb2'}} >
              Home
          </Text> */}
        </View>
      )
      }}/>
      <Tab.Screen name="Works" component={WorkScreen} options={{headerShown: false ,
      tabBarIcon:({f,color})=>(
        <View style={{alignItems:'center',justifyContent:'center',top:1}}>
          <FontAwesome5 name="tools" size={30} color={color} />
          {/* <Text style={{collor:f?'#797d81':'#adafb2'}} >
              Home
          </Text> */}
        </View>
      ) }}/>
      
      <Tab.Screen name="plus" component={WorkScreen} options={{headerShown: false ,
      // tabBarIcon:({f,color})=>(
      //     <Image resizeMode="contain" style={{width:30,height:30}} source={require('./../plus.png')} />
          
      // ) ,
      tabBarButton:(props)=>(
        
        <NoteScreen {...props}/>
      )
      
      }}/>
      
      
      <Tab.Screen name="Map" component={MapScreen} options={{//headerShown: false ,
      tabBarIcon:({f,color})=>(
        <View style={{alignItems:'center',justifyContent:'center',top:1}}>
          <FontAwesome5 name="map-marker-alt" size={30} color={color} />
          {/* <Text style={{collor:f?'#797d81':'#adafb2'}} >
              Home
          </Text> */}
        </View>
      )}}/>
      <Tab.Screen name="Menu" component={MenuScreen} options={{headerShown: false ,
      tabBarIcon:({f,color})=>(
        <View style={{alignItems:'center',justifyContent:'center',top:1}}>
          <Feather name="menu" size={30} color={color} />
          {/* <Text style={{collor:f?'#797d81':'#adafb2'}} >
              Home
          </Text> */}
        </View>
      )}}/>
    </Tab.Navigator>
  )
}

const styles=StyleSheet.create({
  shadow:{
    shadowColor:'#7F5DF0',
    shadowOffset:{
      width:0,
      height:10
    },
    shadowOpacity:0.25,
    showRadius:3.5,
    elevation:5
  }
})

export default BottomTabs