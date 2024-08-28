import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity, Image } from 'react-native';

// Importa la imagen del ícono de Facebook desde tu proyecto
import facebookIcon from '../assets/face.png'; // Ajusta la ruta según la ubicación de tu imagen

const ContactInfo = () => {
  const handlePhoneCall = () => {
    Linking.openURL('tel:7223192737');
  };

  const handleWhatsAppChat = () => {
    Linking.openURL('whatsapp://send?phone=5542045241');
  };

  const handleFacebookLink = () => {
    Linking.openURL('https://www.facebook.com/profile.php?id=100089416552581');
  };

  const handleEmail = () => {
    Linking.openURL('mailto:joel.velasco.cbamexico@gmail.com');
  };

  const handleWebsite = () => {
    Linking.openURL('https://cbamexico.com/');
  };

  return (
    <View>
      <Text style={styles.title}>Contactos</Text>

      <TouchableOpacity style={styles.infoContainer} onPress={handlePhoneCall}>
        <Text style={styles.name}>Teléfono Fijo:</Text>
        <Text style={styles.detail}>7223192737</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.infoContainer} onPress={handleWhatsAppChat}>
        <Text style={styles.name}>WhatsApp:</Text>
        <Text style={styles.detail}>55 420 45 241</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.infoContainer} onPress={handleEmail}>
        <Text style={styles.name}>Correo:</Text>
        <Text style={styles.detail}>joel.velasco.cbamexico@gmail.com</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.infoContainer} onPress={handleFacebookLink}>
        <Text style={styles.name}>Facebook:</Text>
        <View style={styles.linkContainer}>
          <Image source={facebookIcon} style={styles.icon} />
          <Text style={[styles.detail, styles.link]}>Visitar perfil</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.infoContainer} onPress={handleWebsite}>
        <Text style={styles.name}>Sitio Web:</Text>
        <Text style={[styles.detail, styles.link]}>cbamexico.com</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#555',
    marginBottom: 2,
  },
  detail: {
    fontSize: 14,
    color: '#555',
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    color: '#007bff',
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
});

export default ContactInfo;
