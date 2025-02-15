import React, {useLayoutEffect}  from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

export default function Usuario(){
    const rota =useRoute();
    const navegar = useNavigation();
    
    useLayoutEffect(() => {
        navegar.setOptions({
            title : rota.params?.nome === '' ? 'Pagina Usuario' : rota.params?.nome
        })
    }, [navegar])
    return(
        <View style={styles.container}>
            <Text>Tela de Usuario</Text>
            <Text>{rota.params?.nome}</Text>
            <Text>{rota.params?.email}</Text>
            <Button  title="Abrir tela de Contato" onPress={ () => navegar.navigate('Detalhes')} />
        </View>

    )
}
const styles = StyleSheet.create({
    container:{  
        flex :1,
        justifyContent: 'center',
        alignItems:'center',
     backgroundColor:"#FF9933"
    }

    
})