import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function Home(){
    let [celsius, setCelsius] = useState();
    let [fahrenheit, setFahrenheit] = useState();

    function Converter(){
        let conversao = (9* parseFloat(celsius) +160) / 5;
        setFahrenheit(conversao);
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Conversão de Temperatura</Text>
            <TextInput style={styles.input} onChangeText={setCelsius} placeholder="Celsius"></TextInput>
            <Text style={styles.subtitulo}>Resultado: {fahrenheit} °F</Text>
            <TouchableOpacity style={styles.button} onPress={Converter}>
                <Text style={styles.buttonText}>CONVERTER</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FF8134',
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
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    input:{
        backgroundColor: '#FFEDE1',
        fontSize: 20,
        padding: 15,
        marginTop: 20,
        marginBottom: 15,
        borderRadius: 10,
        width: 100,
        textAlign: 'center',
        color: 'black'
    },
    button:{
        backgroundColor: '#FFEDE1',
        padding: 10,
        borderRadius: 5,
        width: 200,
    },
    buttonText:{
        textAlign: 'center',
        fontSize: 20,
        color: '#FF8134',
        fontWeight: 'bold',
    }
});