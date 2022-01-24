import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Formulario from './components/Formulario';
import { TextInput, Button } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Calculadora IMC<br/><br/></Text>
      
      <Formulario />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
  },
});
