import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopBarView from '../Components/TopBarView';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import RadioButtonRN from 'radio-buttons-react-native';
import WorkComponent from '../Components/WorkComponent';
const WorkScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TopBarView />
      <View style={styles.filterBar}>
        <Text style={{color: '#a0a3ad', fontSize: 15}}>now day/ 7 days</Text>
        <Feather name="filter" size={26} color="#a0a3ad" />
      </View>
      <Text
        style={{
          color: '#a0a3ad',
          fontSize: 15,
          marginVertical: '6%',
          alignSelf: 'center',
        }}>
        Sep 2022
      </Text>
        <ScrollView >
        <WorkComponent/>
        <WorkComponent/>
        <WorkComponent/>
        </ScrollView>
        
        
      
    </SafeAreaView>
  );
};

export default WorkScreen;

const styles = StyleSheet.create({
  filterBar: {
    width: '100%',
    paddingHorizontal: '8%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
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
});
