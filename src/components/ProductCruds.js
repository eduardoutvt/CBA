import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Alert, Image } from 'react-native';
import productsService from '../services/productsService';

const ProductCRUD = () => {
  const [productList, setProductList] = useState([]);
  const [newProductName, setNewProductName] = useState('');
  const [newProductDescription, setNewProductDescription] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newProductImage, setNewProductImage] = useState(''); // Nuevo campo para la imagen
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await productsService.getProducts();
        setProductList(products);
      } catch (error) {
        Alert.alert('Error', 'No se pudieron obtener los productos.');
      }
    };

    fetchProducts();
  }, []);

  const addProduct = async () => {
    if (!newProductName || !newProductDescription || !newProductPrice) {
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return;
    }

    const newProduct = {
      name: newProductName,
      description: newProductDescription,
      price: Number(newProductPrice),
      image: newProductImage, // Incluir la imagen en el nuevo producto
    };

    try {
      const addedProduct = await productsService.addProduct(newProduct);
      setProductList([...productList, addedProduct]);
      clearForm();
    } catch (error) {
      Alert.alert('Error', 'No se pudo agregar el producto.');
    }
  };

  const updateProduct = async (id) => {
    if (!newProductName || !newProductDescription || !newProductPrice) {
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return;
    }

    const updatedProduct = {
      name: newProductName,
      description: newProductDescription,
      price: Number(newProductPrice),
      image: newProductImage, // Incluir la imagen en el producto actualizado
    };

    try {
      await productsService.updateProduct(id, updatedProduct);
      const updatedProductList = productList.map((product) =>
        product._id === id ? updatedProduct : product
      );
      setProductList(updatedProductList);
      clearForm();
    } catch (error) {
      Alert.alert('Error', 'No se pudo actualizar el producto.');
    }
  };

  const deleteProduct = async (id) => {
    try {
      await productsService.deleteProduct(id);
      const updatedProductList = productList.filter((product) => product._id !== id);
      setProductList(updatedProductList);
    } catch (error) {
      Alert.alert('Error', 'No se pudo eliminar el producto.');
    }
  };

  const clearForm = () => {
    setNewProductName('');
    setNewProductDescription('');
    setNewProductPrice('');
    setNewProductImage(''); // Limpiar el campo de la imagen
    setSelectedProduct(null);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre del Producto"
        value={newProductName}
        onChangeText={setNewProductName}
        placeholderTextColor="#666"
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción del Producto"
        value={newProductDescription}
        onChangeText={setNewProductDescription}
        placeholderTextColor="#666"
      />
      <TextInput
        style={styles.input}
        placeholder="Precio del Producto"
        value={newProductPrice}
        onChangeText={setNewProductPrice}
        keyboardType="numeric"
        placeholderTextColor="#666"
      />
      <TextInput
        style={styles.input}
        placeholder="URL de la Imagen del Producto"
        value={newProductImage}
        onChangeText={setNewProductImage}
        placeholderTextColor="#666"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={selectedProduct ? () => updateProduct(selectedProduct._id) : addProduct}
      >
        <Text style={styles.buttonText}>
          {selectedProduct ? 'Actualizar Producto' : 'Agregar Producto'}
        </Text>
      </TouchableOpacity>
      <FlatList
        data={productList}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            {item.image ? (
              <Image source={{ uri: item.image }} style={styles.productImage} />
            ) : null}
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <Text style={styles.productPrice}>${item.price ? item.price.toFixed(2) : '0.00'}</Text>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => {
                setSelectedProduct(item);
                setNewProductName(item.name);
                setNewProductDescription(item.description);
                setNewProductPrice(item.price ? item.price.toString() : '');
                setNewProductImage(item.image || ''); // Ajustar el campo de la imagen
              }}
            >
              <Text style={styles.editText}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteProduct(item._id)}
            >
              <Text style={styles.deleteText}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.productList}
        numColumns={2} // Ajuste aquí para múltiples columnas
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000', // Color negro para el título
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    color: '#000', // Color negro para el texto de entrada
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  productItem: {
    flex: 1, // Ajuste aquí para ocupar el espacio disponible
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 10,
    marginHorizontal: 5, // Ajuste para el espacio horizontal
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000', // Color negro para el nombre del producto
  },
  productDescription: {
    color: '#555',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#007BFF',
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 5,
  },
  deleteButton: {
    backgroundColor: '#FF4B5C',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  editText: {
    color: '#fff',
    fontSize: 14,
  },
  deleteText: {
    color: '#fff',
    fontSize: 14,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  productList: {
    paddingBottom: 20,
  },
});

export default ProductCRUD;
