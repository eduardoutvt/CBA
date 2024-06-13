import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AdminScreen = ({ navigation, route }) => {
  const { onLogout } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Panel de Administración</Text>
      <Button title="Agregar Servicio" onPress={() => { /* lógica para agregar servicio */ }} />
      <Button title="Modificar Servicio" onPress={() => { /* lógica para modificar servicio */ }} />
      <Button title="Eliminar Servicio" onPress={() => { /* lógica para eliminar servicio */ }} />
      <Button title="Logout" onPress={onLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
});

export default AdminScreen;
