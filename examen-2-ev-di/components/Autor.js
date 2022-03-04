import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Card, Button } from 'react-native';

const Autor = ({color, nombre}) => {
  return <Text style={{color:color, textAlign:'right'}}> Realizado por: {nombre} </Text>;
};

export default Autor;