import { View, Text, SafeAreaView,StyleSheet,Image,Dimensions  } from 'react-native'
import React from 'react'

import {BarChart} from "react-native-chart-kit";
import TopBarView from '../Components/TopBarView';
//import { Colors } from 'react-native/Libraries/NewAppScreen';


const HomeScreen = () => {
  const options = 
    {
      backgroundColor: "#000",
      backgroundGradientFrom: "#fff",
      backgroundGradientTo: "#fff",
      // decimalPlaces : 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(5, 9, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(152,156,167, ${opacity})`,
      style: {
        borderRadius: 16
      },
      
      
      // propsForDots: {
      //   r: "6",
      //   strokeWidth: "2",
      //   stroke: "#fff"
      // },
  };
  const labels=['2019','2020','2021']
  const data = {
    labels:['2019','2020','2021'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [4,5,6],
        colors:[(opacity=1)=>'#44ec77',
        (opacity=1)=>'#44ec77',
        (opacity=1)=>'#44ec77'
      ]
      }
    ]
  };
    //const IMG_URI=require.
  return (
    <SafeAreaView style={{flex:1}}>
      <TopBarView/>
      <Text style={{fontSize:30,fontWeight:'bold',paddingStart:'8%',color:'#4d5157'}}>
        My Board
      </Text>
      <View style={{paddingHorizontal:'9%',flexDirection: "row",paddingVertical:'5%',justifyContent:'space-between'}}>
          <Text style={styles.chartHeadText}>Scorecard</Text>
          <Text style={styles.chartHeadText}>Today's Schedule</Text>
          <Text style={styles.chartHeadText}>Score</Text>
      </View>
      <BarChart fromZero={true} flatColor={true} withCustomBarColorFromData={true} showBarTops={false} style={styles.barchartstyle} bezier withInnerLines={false} withHorizontalLines={false} withShadow={false} withDots={false} height={220} width={Dimensions.get("window").width-(Dimensions.get("window").width*0.16)} data={data} chartConfig={options}/>

      <View style={{width:'100%',alignItems:'center',marginTop:'10%'}}>
          <Text style={{color:'#000',fontSize:20,fontWeight:"500"}}>Total Expenses</Text>
          <Text style={{color:'#000',fontSize:20,fontWeight:'bold'}}>{'\u0024'} 42,302.00</Text>
      </View>
      <Text style={{fontSize:25,fontWeight:'bold',color:'#5a5f64',paddingHorizontal:'8%',paddingTop:'10%'}}>Purchase Order History</Text>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    
      chartHeadText:{
        color:'#5c6166',
        fontWeight:'bold',
        fontSize:15
        
      },
      barchartstyle:{
        paddingStart:'8%'
      }
})

export default HomeScreen
