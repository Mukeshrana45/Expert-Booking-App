import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import Categories from '../components/Categories/Categories';
import SectionHeader from '../components/SectionHeader';
import ExpertList from '../components/ExpertsList';
import { useNavigation } from '@react-navigation/native';
import HighestRatedExpert from '../components/HighestRatedExpert';
const HomeScreen = ({horizontal}) => {
  const navigation = useNavigation();
  return (
    <View style={{flex:1}}>
      <Header/>
      <Categories/>
      <SectionHeader title={"Top Experts"} onPress={() => navigation.navigate('expertsList')} />
      <ExpertList horizontal/>
      <SectionHeader title="⭐ Highest Rated Expert" />
      <HighestRatedExpert />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})