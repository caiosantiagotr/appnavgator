import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { StackActions, useNavigation } from "@react-navigation/native";

export default function Detalhes(){
    const navegar = useNavigation()
    return(
        <View style={styles.container}>
            <Text>Tela Detalhes</Text>
            <Button  title="voltar ao Inicio" onPress={ () => navegar.dispatch(StackActions.popToTop())} />
        </View>

    )
}
const styles = StyleSheet.create({
    container:{  
        flex :1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:"#E5FFCC"
    }

    
})