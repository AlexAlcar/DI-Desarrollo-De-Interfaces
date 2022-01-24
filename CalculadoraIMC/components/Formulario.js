import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
const Formulario = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resp, setResp] = useState(false);
    const [resultado, setResultado] = useState("");
    const [estilo, setEstilo] = useState("");

    const handleButton = () => {
        const imc = peso / Math.pow(altura, 2);
        if (imc < 18.5) setResultado("Peso insuficiente");
        if (imc >= 18.5 && imc <= 24.9) setResultado("Normopeso");
        if (imc >= 25 && imc <= 26.9) setResultado("Sobrepeso Grado I");
        if (imc >= 27 && imc <= 29.9) setResultado("Sobrepeso Grado II (Preobesidad)");
        if (imc >= 30 && imc <= 34.9) setResultado("Obesidad de tipo I");
        if (imc >= 35 && imc <= 39.9) setResultado("Obesidad de tipo II");
        if (imc >= 40 && imc <= 49.9) setResultado("Obesidad de tipo III (Mórbida)");
        if (imc > 50) setResultado("Obesidad de tipo IV (extrema)");

        if (imc < 27) setEstilo({ color: 'green' });
        if (imc > 27 && imc <= 39.9) setEstilo({ color: 'orange' });
        if (imc >= 40) setEstilo({ color: 'red' });
        setResp(true);
    }

    return (
        <View style={styles.form}>
            <Text style={styles.titulo}>DATOS</Text>
            <Text style={styles.tags}>PESO</Text>
            <TextInput placeholder='Introduce tu peso en Kg' onChange={(e) => setPeso(e.target.value)}></TextInput>
            <Text style={styles.tags}>ALTURA</Text>
            <TextInput placeholder='Introduce tu altura en cm' onChange={(e) => setAltura(e.target.value)}></TextInput>
            <Button style={styles.btn} mode='contained' onPress={handleButton}>Calcular IMG</Button>
            {resp ?
                <>
                    <Text>Resultado</Text>
                    <Text style={estilo}>{resultado}</Text>
                </> : null}
        </View>
    )

}

const styles = StyleSheet.create({
    form: {
        backgroundColor: 'white',
        fontSize: 10,
        fontWeight: '600',
        padding: 4,
        paddingLeft: 12,
        textAlign: 'left',
        color: 'grey',
    },
    titulo: {
        fontSize: 22,
        color: 'red',
        padding: 6,
    },
    tags: {
        color: 'blue',
        fontWeight: 'bold',
    },
    btn: {
        color: 'white',
    },


})

export default Formulario;