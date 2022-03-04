import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Card, Button } from 'react-native';

const ElTotal = ({ listado }) => {
  const [total, setTotal] = useState(0);

  const calcularPrecio = () => {
    let suma = 0;

    for (let i = 0; i < listado.length; i++) {
      suma += listado[i].quantity * listado[i].price;
    }
    setTotal(suma);
  };

  useEffect(() => {}, [total]);

  return (
    <>
      <View style={styles.contenedor}>
        <Button title="CALCULA TOTAL" onPress={calcularPrecio} />
        <Text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
          {' '}
          TOTAL: {total}{' '}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'blue',
    backgroundColor: 'orange',
  },
 
});

export default ElTotal;
