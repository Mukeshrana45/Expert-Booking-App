import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Button from './Button';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const SearchBar = ({onChange}) => {
  const navigation= useNavigation();
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.goBack() } style={styles.backButton} ><Text>Back</Text></Button>
      <TextInput
  style={styles.input}
  placeholder="Search Expert..."
  autoCapitalize="none"
  autoCorrect={false}
  value={search}
  onChangeText={(text) => {
    setSearch(text);
    onChange?.(text);
  }}
/>

{search.length > 0 && (
  <Icon
    name="close-circle"
    size={22}
    color="gray"
    style={{marginRight:20,}}
    onPress={() => {
      setSearch('');
      onChange?.('');
    }}
  />
)}
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    flexDirection:'row',
    borderRadius:10,
    margin:10,
    height:48,
    width:'95%',
    alignItems:'center',
  },
  backButton:{
    paddingHorizontal:10,
  },
  input:{
    width:'80%',
  }
})