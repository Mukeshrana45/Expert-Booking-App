import { View, Text } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query';
import fetchExperts from '../api/experts';

const ExpertList = ({}) => {
    const {data,isLoading,error}=useQuery({
        queryKey:['experts'],
        queryFn:fetchExperts
    });
    console.log("Data",data);
  return (
    <View>
      
    </View>
  )
}

export default ExpertList