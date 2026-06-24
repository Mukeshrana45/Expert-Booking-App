import React from 'react';
import { StyleSheet } from 'react-native';
import Navigation from './Navigation';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
const queryClient= new QueryClient();
function App() {
  
  return (
    <QueryClientProvider client={queryClient} >
       <Navigation />
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  
});

export default App;