import * as React from 'react';
import { Text, View, StyleSheet, Image, Card } from 'react-native';

const MiElemento = ({ item }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontWeight:'bold', fontStyle: 'italic', justifyContent:'left' }}> {item.name}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text > {item.description}</Text>
          
          <Text style={{ fontWeight:'bold', marginLeft:'auto ' }}> Precio: {item.price}</Text>
        </View>
      </View>
    </>
  );
};



const styles = StyleSheet.create({
  container: {
    flex:1,
    display:'flex',
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor:'blue',
    backgroundColor:'orange',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
});

export default MiElemento;
