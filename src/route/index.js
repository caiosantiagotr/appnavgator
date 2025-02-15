import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Contato from "../pages/Contato";
import Stackrotas from "./indexstack";
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();
export default function Rotas(){
    return(
        <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'red',

          tabBarStyle:{
            backgroundColor: 'blue',
            borderTopWidth: 0
          }

        }}
      >
        <Tab.Screen
          name="HomeStack"
          component={Stackrotas}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="home" color={color} size={size} />
            }
          }}
        />
        <Tab.Screen
          name="Contato"
          component={Contato}
          options={{
            //headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return <Feather name="phone-call" color={color} size={size} />
            }
          }}
        />
      </Tab.Navigator>
  )
}