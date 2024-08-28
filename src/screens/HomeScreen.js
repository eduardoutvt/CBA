import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ServiceCard from '../components/ServiceCard';
import MenuDrawer from '../components/MenuDrawer';
import ProductCRUD from '../components/ProductCruds';
import services from '../services/Services';

const HomeScreen = ({ route, isAdmin, isLoggedIn, onLogout }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredServices, setFilteredServices] = useState([]);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [expandedService, setExpandedService] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    if (route.params?.role) {
      setIsAdmin(route.params.role === 'admin');
      setIsLoggedIn(true);
    }
  }, [route.params?.role]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    onLogout(); // Llamar a la función de manejo de cierre de sesión
  };

  const handleSearch = () => {
    const filtered = services.filter((service) =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredServices(filtered);
    if (filtered.length === 0) {
      Alert.alert(
        'Servicio no encontrado',
        `Lo sentimos, no tenemos el servicio o producto '${searchQuery}'. ¿Desea chatear con uno de nuestros agentes para obtener ayuda?`,
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

  const navigateToProducts = () => {
    navigation.navigate('Products');
  };

  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };

  const navigateToAdmin = () => {
    navigation.navigate('Admin');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/fondo.jpg')} style={styles.backgroundImage} />

      <View style={styles.header}>
        <TouchableOpacity style={styles.menuIcon} onPress={toggleMenu}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/menu.png' }}
            style={styles.icon}
          />
        </TouchableOpacity>
        {isLoggedIn && (
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.headerButtonText}>Cerrar Sesión</Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Cover All Industrias S.A De C.V</Text>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Buscar servicio o productos..."
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Image
              source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/search--v1.png' }}
              style={styles.searchIcon}
            />
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

        <Text style={styles.sectionTitle}>¡Nuestros Productos!</Text>
        <TouchableOpacity style={styles.productsButton} onPress={navigateToProducts}>
          <Text style={styles.productsButtonText}>Ver Productos</Text>
        </TouchableOpacity>

        {isAdmin && (
          <View style={styles.adminContainer}>
            <ProductCRUD />
          </View>
        )}

        <Text style={styles.sectionTitle}>¡Nuestros Servicios!</Text>
        <View style={styles.servicesList}>
          {(searchQuery.length > 0 ? filteredServices : services).map((item) => (
            <TouchableOpacity key={item.id} onPress={() => toggleServiceDescription(item.id)}>
              <ServiceCard service={item} isExpanded={expandedService === item.id} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {isMenuVisible && (
        <View style={styles.menuDrawerContainer}>
          <MenuDrawer isVisible={isMenuVisible} onClose={toggleMenu} navigation={navigation} />
        </View>
      )}
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
    fontSize: 28,
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  productsButton: {
    backgroundColor: '#007bff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  productsButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  adminContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100, // Ajusta según sea necesario
  },
  menuDrawerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
