import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Home() {
    let [dolar, setDolar] = useState();
    let [cotacao, setCotacao] = useState();
    let [total, setTotal] = useState();

    function ConverterReal() {
        let real = parseFloat(dolar) * parseFloat(cotacao);
        setTotal(real);
    }

    return (
        <View style={styles.container}>
            <View style={styles.cont}>
                <Text style={styles.title}>Conversor para Real</Text>
                <TextInput style={styles.input} onChangeText={setDolar} placeholder="Valor em Dolar"></TextInput>
                <TextInput style={styles.input} onChangeText={setCotacao} placeholder="Cotação atual"></TextInput>
                <TouchableOpacity style={styles.button} onPress={ConverterReal}>
                    <Text style={styles.buttonText}>Converter</Text>
                </TouchableOpacity>
                <Text style={styles.subtitulo}>US$ {dolar} é igual a: R$ {total}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#EFEFEF",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cont: {
        width: 500,
        height: 650,
        backgroundColor: "#FFFFFF",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        shadowColor: "#000000",
        shadowOpacity: 0.3,
        shadowRadius: 20,
        shadowOffset: {
            height: 5,
            width: 5
        }
    },
    title: {
        fontSize: 35,
        color: 'black',
        fontWeight: 300,
    },
    subtitulo: {
        color: '#000',
        fontSize: 20,
        marginTop: 75
    },
    input: {
        backgroundColor: '#efefef',
        color: 'black',
        marginTop: 40,
        padding: 10,
        borderRadius: 50,
        textAlign: 'center',
        width: 300,
        height: 40
    },
    button: {
        backgroundColor: '#efefef',
        color: 'white',
        marginTop: 100,
        padding: 10,
        borderRadius: 50,
        width: 200,
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 300
    }
})
