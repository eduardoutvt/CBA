import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, TextInput, Alert, ScrollView, Animated } from 'react-native';
import ServiceCard from '../components/ServiceCard';
import MenuDrawer from '../components/MenuDrawer';
import services from '../services/Services'; // Importar el archivo services.js

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredServices, setFilteredServices] = useState([]);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [expandedService, setExpandedService] = useState(null); // Estado para controlar el servicio expandido

  const scrollX = useRef(new Animated.Value(0)).current;

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  const navigateToChat = () => {
    navigation.navigate('Chat');
  };

  const navigateToServiceDetails = (service) => {
    navigation.navigate('ServiceDetails', { service });
  };

  const handleSearch = () => {
    const filtered = services.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredServices(filtered);
    if (filtered.length === 0) {
      Alert.alert(
        'Servicio no encontrado',
        `Lo sentimos, no tenemos el servicio '${searchQuery}'. ¿Desea chatear con uno de nuestros agentes para obtener ayuda?`,
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Chatear',
            onPress: () => navigation.navigate('Chat', { fromHome: true }),
          },
        ],
        { cancelable: false }
      );
    }
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const toggleServiceDescription = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <View style={styles.container}>
      {/* Fondo de pantalla */}
      <Image source={require('../assets/fondo.jpg')} style={styles.backgroundImage} />

      <View style={styles.header}>
        <TouchableOpacity style={styles.menuIcon} onPress={toggleMenu}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/menu.png' }} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Bienvenido a Servicios CBA</Text>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Buscar servicio..."
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/search--v1.png' }} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.offerContainer}>
          <Text style={styles.offerDescription}>Checa nuestros proyectos realizados</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Image source={require('../assets/construcion.jpg')} style={styles.offerImage} />
            <Image source={require('../assets/electro.jpg')} style={styles.offerImage} />
            <Image source={require('../assets/tapa.jpg')} style={styles.offerImage} />
            <Image source={require('../assets/tubos.jpg')} style={styles.offerImage} />
            <Image source={require('../assets/chamba.jpg')} style={styles.offerImage} />
            <Image source={require('../assets/maquina.jpg')} style={styles.offerImage} />
            <Image source={require('../assets/tubotes.jpg')} style={styles.offerImage} />
            <Image source={require('../assets/personjas.jpg')} style={styles.offerImage} />
            <Image source={require('../assets/arreglando.jpg')} style={styles.offerImage} />
          </ScrollView>
        </View>

        <Text style={styles.sectionTitle}>¡Nuestros Servicios!</Text>
        <FlatList
          data={searchQuery.length > 0 ? filteredServices : services}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => toggleServiceDescription(item.id)}>
              <ServiceCard service={item} isExpanded={expandedService === item.id} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.servicesList}
          numColumns={2} // Muestra los elementos en 2 columnas
          key={(searchQuery.length > 0 ? 'filtered' : 'all')} // Cambia la clave para forzar la renderización
        />
      </ScrollView>

      <MenuDrawer isVisible={isMenuVisible} onClose={toggleMenu} navigation={navigation} />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Home')}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/home.png' }} style={styles.icon} />
          <Text style={styles.footerButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={navigateToChat}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/chat.png' }} style={styles.icon} />
          <Text style={styles.footerButtonText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={navigateToLogin}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/user.png' }} style={styles.icon} />
          <Text style={styles.footerButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  menuIcon: {
    marginLeft: 'auto',
  },
  icon: {
    width: 24,
    height: 24,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#007bff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 20,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  searchButton: {
    padding: 5,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  offerContainer: {
    backgroundColor: '#fff',
    borderRadius: 40,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  offerDescription: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
    textAlign: 'center',
  },
  offerImage: {
    width: 150,
    height: 150,
    borderRadius: 20,
    marginRight: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    marginLeft: 20,
  },
  servicesList: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#007bff',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerButtonText: {
    fontSize: 12,
    color: '#fff',
  },
});

export default HomeScreen;
