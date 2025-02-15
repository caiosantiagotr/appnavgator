import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { StackActions, useNavigation } from "@react-navigation/native";

export default function Contato(){
    const navegar = useNavigation()
    return(
        <View style={styles.container}>
            <Text>Tela Contato</Text>
            <Text>Telefone: 24 99232-4339</Text>
            <Text>E-mail:caiosantiago0987sg@gmail.com</Text>

        </View>

    )
}
const styles = StyleSheet.create({
    container:{  
        flex :1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#66FFB2'
    }

    
})