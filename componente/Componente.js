import React from "react";
import { StyleSheet, Text} from "react-native";

export default function Componente(props){
    return(
        <>
            <Text style={styles.texto}> Gajo {props.nome},  
            sua idade é igual a {props.idade} 
            anos e você é a VINGANÇA </Text>          
        </>
    );
}

const styles = StyleSheet.create({
    texto:{
        fontSize: 40,
        color: '#1362D4',
        textAlign: 'center',
        marginLeft:'10%'
    }
});