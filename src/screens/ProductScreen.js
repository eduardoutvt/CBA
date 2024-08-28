// src/screens/ProductScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Alert, ActivityIndicator } from 'react-native';
import productsService from '../services/productsService';
import ProductCard from '../components/ProductCard';

const ProductScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      console.log('Fetching products...');
      try {
        const data = await productsService.getProducts();
        setProducts(data);
      } catch (error) {
        Alert.alert('Error', 'No se pudieron obtener los productos intenta de nuevo.');
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/fondo.jpg')} style={styles.backgroundImage} />
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007BFF" />
          <Text style={styles.loadingText}>Cargando productos...</Text>
        </View>
      ) : (
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              onPress={() => navigation.navigate('ProductDetail', { product: item })}
            />
          )}
          keyExtractor={(item) => item._id.toString()}
          contentContainerStyle={styles.productsList}
          numColumns={2}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.3,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  productsList: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductScreen;
