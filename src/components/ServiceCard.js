import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ServiceCard = ({ service, isExpanded }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: service.icon }} style={styles.icon} />
      <Text style={styles.name}>{service.name}</Text>
      {isExpanded && (
        <Text style={styles.description}>{service.description}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: 180, // Ajusta el ancho para que se vea mejor en el diseño
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default ServiceCard;
