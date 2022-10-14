import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopBarView from '../Components/TopBarView';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import RadioButtonRN from 'radio-buttons-react-native';

const WorkComponent = () => {
  return (
    <View style={{width:'100%'}}>
      <Text
        style={{
          alignSelf: 'flex-start',
          alignItems: 'center',
          marginStart: '7%',
          color: '#e692a8',
          alignContent: 'center',
        }}>
        <EvilIcons name="arrow-up" color="#e692a8" size={30} /> HIGH
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: '3%',
          width: '85%',
          justifyContent: 'space-between',
          alignSelf: 'center',
        }}>
        <Text style={{alignSelf: 'flex-start', color: '#a0a3ad'}}>
          Assignment
        </Text>
        <Text style={{alignSelf: 'flex-end', color: '#a0a3ad'}}>
          13 Oct 2022
        </Text>
      </View>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: '3%',
          alignSelf: 'flex-start',
          marginStart: '7%',
        }}>
        I'am Not able to read the text in this Image
      </Text>
      <Text
        style={{marginStart: '7%', alignSelf: 'flex-start', color: '#a0a3ad'}}>
        Won
      </Text>
      <Text
        style={{
          marginStart: '7%',
          marginVertical: '3%',
          alignSelf: 'flex-start',
          color: '#0d5495',
          fontWeight: 'bold',
          textDecorationLine: 'underline'
        }}>
        WON543698564
      </Text>
      <View
        style={{
          marginTop: '4%',
          flexDirection: 'row',
          alignSelf: 'center',
          width: '100%',
        }}>
        <Image style={styles.imageStyle} source={require('../test.jpg')} />
        <View style={{alignItems:'center',marginStart:'2%'}}>
          <Text style={{color: '#a0a3ad', alignSelf: 'flex-start'}}>
            ABCDEFGH
          </Text>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
            Priyanko Mistri
          </Text>
        </View>
        <Text style={{alignSelf: 'stretch',marginStart:'30%',textDecorationLine: 'underline',color: '#0d5495'}}>Get Score</Text>
      </View>
      <View style={{flexDirection:'row',marginTop:'5%',alignItems:'center'}}>
        <View style={{flexDirection:'row',marginStart:'7%'}}>
        <Image style={styles.newImage}  source={require('../test.jpg')} />
        <Image style={styles.newImage}  source={require('../test.jpg')} />
        </View>
        <View style={{flexDirection:'row',alignItems:'center',marginStart:'10%'}}> 
          <Text style={{color:'#000'}}>PO</Text>
        <RadioButtonRN style={{height:'9%'}} data={[{'label':'data 1'}]}/>
        <Text>1</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',marginStart:'10%'}}>
        <Text>NEXT</Text>
        <RadioButtonRN style={{height:'9%'}} data={[{'label':'data 1'}]}/>
        <Text>1</Text>
        </View>
      </View>
      <Text ></Text>
    </View>
  )
}

export default WorkComponent

const styles = StyleSheet.create({
    imageStyle: {
        width: 50,
        height: 50,
        resizeMode: 'stretch',
        borderRadius: 1000,
        marginStart: '7%',
      },
      newImage:{
        width: 50,
        height: 50,
        resizeMode: 'stretch',
        borderRadius: 1000,
      }
})