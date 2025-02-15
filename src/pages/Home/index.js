import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Home(){
    const navegar = useNavigation()
    function Navegarr(){
        navegar.navigate('Usuario',{ nome: 'Caio', email:'caiosantiago0987sg@gmail.com'})
    }
    
    return(
        <View style={styles.container}>
            <Text>Tela Principal</Text>
            <Button  title="Abrir tela de Usuario" onPress={Navegarr} />
        </View>

    )
}
const styles = StyleSheet.create({
    container:{  
        flex :1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:"#74992e"
    }

    
})