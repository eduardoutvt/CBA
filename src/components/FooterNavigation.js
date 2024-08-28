import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FooterNavigation = ({ isAuthenticated }) => {
  const navigation = useNavigation();

  if (isAuthenticated) {
    return null; // No renderiza nada si el usuario está autenticado
  }

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Home')}>
        <View style={styles.iconWrapper}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/home.png' }} style={styles.icon} />
        </View>
        <Text style={styles.footerButtonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Chat')}>
        <View style={styles.iconWrapper}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/chat.png' }} style={styles.icon} />
        </View>
        <Text style={styles.footerButtonText}>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Login')}>
        <View style={styles.iconWrapper}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/user.png' }} style={styles.icon} />
        </View>
        <Text style={styles.footerButtonText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#ffffff', // Cambiado a blanco para un aspecto más limpio
  },
  footerButton: {
    alignItems: 'center',
  },
  iconWrapper: {
    backgroundColor: '#007bff', // Fondo azul para los iconos
    borderRadius: 30,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // Añade sombra en Android
    marginBottom: 5, // Espacio entre el icono y el texto
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#ffffff', // Cambia el color del icono a blanco
  },
  footerButtonText: {
    fontSize: 14, // Un poco más grande para mejor legibilidad
    color: '#007bff', // Texto azul para que coincida con el tema
    fontWeight: 'bold', // Texto en negrita para mejorar la visibilidad
  },
});

export default FooterNavigation;
