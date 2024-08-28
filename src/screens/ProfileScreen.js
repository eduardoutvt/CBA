import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ProductCruds from '../components/ProductCruds';

const ProfileScreen = ({ navigation, onLogout }) => {
  const [allowLogout, setAllowLogout] = useState(true); // Estado para permitir o no el logout

  const handleLogout = () => {
    if (allowLogout) {
      // Update parent component's state
      onLogout();
      // Redirect to the login screen
      navigation.replace('Login'); // Use replace to prevent going back to the previous screen
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestión de Productos</Text>
      <ProductCruds />

      {/* Logout Button */}
      {allowLogout && (
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#007bff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
