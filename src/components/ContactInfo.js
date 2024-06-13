import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

const ContactInfo = () => {
  const handleFacebookLink = () => {
    Linking.openURL('https://facebook.com/empresa');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contactos</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Teléfono:</Text>
        <Text style={styles.text}>123-456-789</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Facebook:</Text>
        <Text style={[styles.text, styles.link]} onPress={handleFacebookLink}>
          facebook.com/empresa
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#FFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', // Darker text color
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
    color: '#555', // Slightly darker text color
  },
  text: {
    fontSize: 16,
    color: '#555', // Slightly darker text color
  },
  link: {
    color: '#007bff', // Facebook blue color
    textDecorationLine: 'underline',
  },
});

export default ContactInfo;
