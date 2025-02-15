import React from 'react';
import{NavigationContainer} from '@react-navigation/native';
import Rotas from './src/route';

export default function App(){
  return(
    <NavigationContainer>
      <Rotas></Rotas>
    </NavigationContainer>
  );
}