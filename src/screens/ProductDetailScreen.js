import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>${product.price ? product.price.toFixed(2) : '0.00'}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Volver</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  productImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 15,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  productName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 22,
    color: '#007BFF',
    marginBottom: 15,
  },
  productDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;
