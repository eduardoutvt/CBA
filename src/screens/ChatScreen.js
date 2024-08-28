import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Linking, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importamos el ícono

const ChatScreen = () => {
  const [currentMessage, setCurrentMessage] = useState('');

  const sendMessage = () => {
    if (currentMessage.trim() === '') return;

    sendWhatsappMessage(currentMessage);
    setCurrentMessage('');
  };

  const sendWhatsappMessage = (message) => {
    const whatsappNumber = '7226154955';

    let url = `whatsapp://send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

    Linking.openURL(url)
      .then((data) => {
        console.log('WhatsApp abierto:', data);
      })
      .catch(() => {
        alert('No se pudo abrir WhatsApp. Asegúrate de tener la aplicación instalada.');
      });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/fondo.jpg')}
        style={styles.logo}
        resizeMode='cover'
      />
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>
          ¡Hola! Bienvenido al chat de Cover All Industrias
           ¿En qué puedo ayudarte?
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escribe un mensaje..."
          value={currentMessage}
          onChangeText={setCurrentMessage}
          placeholderTextColor="#ced4da"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <View style={styles.svgWrapper}>
          </View>
          <Text style={styles.sendButtonText}>enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  logo: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20, // Adds space between the welcome message and the input bar
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#dee2e6',
    paddingTop: 10,
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
    backgroundColor: '#fff',
    color: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  sendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4dc7d9',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  svgWrapper: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  sendButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default ChatScreen;
