import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Usuario from '../pages/Usuario';
import Detalhes from '../pages/detalhes';



const stack =createNativeStackNavigator();

export default function Stackrotas(){
    return(
        <stack.Navigator>
            <stack.Screen
            name="Home"
            component={Home}
            />
         <stack.Screen
         name="Usuario"
         component={Usuario}
           />
           <stack.Screen
           name="Detalhes"
           component={Detalhes}
           />
        </stack.Navigator>
    );
}