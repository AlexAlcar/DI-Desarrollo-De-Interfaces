import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';
import MiElemento from './components/MiElemento';
import ElTotal from './components/ElTotal';
import Autor from './components/Autor';
import { Card } from 'react-native-paper';

export default function App() {
  const ejercicio1 = {
    name: 'Cereales con chocolate',
    description: 'Cereales rellenos de chocolate',
    quantity: 2,
    category: 'Cereales',
    price: 5,
  };

  const listaItems = [
    {
      name: 'Cereales con chocolate',
      description: 'Cereales rellenos de chocolate',
      quantity: 2,
      category: 'Cereales',
      price: 2,
    },
    {
      name: 'Hamburguesa de pavo',
      description: 'Hamburguesa buena y saludable',
      quantity: 4,
      category: 'Carne',
      price: 3,
    },
    {
      name: 'Agua mineral',
      description: 'Agua de un manantial del Himalaya',
      quantity: 3,
      category: 'Bebidas',
      price: 3,
    },
  ];

  const renderItem = ({ item }) => <MiElemento item={item} />;

  return (
    <>
      <View style={styles.container}>
        <Text>Listado:</Text>
        <Card>{/*<MiElemento item={ejercicio1} />*/}</Card>

        <FlatList
          data={listaItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
        <View style={{paddingBottom:200}}>
          <View style={styles.total} >
            <ElTotal listado={listaItems} />
          </View>
          <View >
            <Autor color={'white'} nombre={'Alejandro Alba'} />
          </View>
        </View>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'green',
    padding: 10,
  },

  total: {
    textAlign: 'bottom',
  },
});
