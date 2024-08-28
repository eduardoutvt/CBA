// src/components/ProductCard.js

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCard = ({ product, onPress }) => {
  return (
    <TouchableOpacity style={styles.productCard} onPress={onPress}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>${product.price ? product.price.toFixed(2) : '0.00'}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    alignItems: 'center',
    width: '45%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  productImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  productInfo: {
    alignItems: 'center',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
  },
});

export default ProductCard;
