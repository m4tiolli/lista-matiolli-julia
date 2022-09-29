import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default function Home(){
    let [numero, setNumero] = useState();
    let [resultadoT, setResultado] = useState();

    function Resultado(){
        let resultado = parseInt(numero);
        let resultadoT = "";
        if (resultado % 2 == 1) {
            resultadoT = "ímpar";
        } else {
            resultadoT = "par";
        }
        setResultado(resultadoT);
    }
    return(
        <View style={styles.container}> 
            <Text style={styles.title}>Descubra se o número é par ou ímpar</Text>
            <TextInput style={styles.input} onChangeText={setNumero} placeholder="Digite um número"></TextInput>
              <Text style={styles.subtitulo}>O número é: {resultadoT}</Text>
            <TouchableOpacity style={styles.button} onPress={Resultado}>
                <Text style={styles.buttonText}>Descobrir</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Limpar</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#D6FFB3',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 35,
        color: 'black',
        fontWeight: 'bold'
    },
    subtitulo:{
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15
    },
    input:{
        backgroundColor: 'white',
        color: 'black',
        marginTop: 30,
        padding: 15,
        borderRadius: 10,
        textAlign: 'center',
        width: 150
    },
    button:{
        backgroundColor: '#13FF00',
        color: 'white',
        marginTop: 30,
        padding: 10,
        borderRadius: 10,
        width: 200,
    },
    buttonText:{
        fontSize:20,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 700
    }
})