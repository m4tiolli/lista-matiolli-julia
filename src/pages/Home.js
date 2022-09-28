import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default function Home(){
    let [dolar, setDolar] = useState();
    let [cotacao, setCotacao] = useState();
    let [total, setTotal] = useState();

    function ConverterReal(){
        let real =parseFloat(dolar) * parseFloat(cotacao);    
        setTotal(real);
    }
    return(
        <View style={styles.container}> 
            <Text style={styles.title}>Conversor para Real</Text>
            <TextInput style={styles.input} onChangeText={setDolar} placeholder="Valor em Dolar"></TextInput>
            <TextInput style={styles.input} onChangeText={setCotacao} placeholder="Cotação de Hoje"></TextInput>
              <Text style={styles.subtitulo}>US$ {dolar} é igual a: RS$ {total}</Text>
            <TouchableOpacity style={styles.button} onPress={ConverterReal}>
                <Text style={styles.buttonText}>Converter</Text>
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