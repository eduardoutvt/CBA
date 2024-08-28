// src/navigation/AppNavigator.js

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ChatScreen from '../screens/ChatScreen';
import ProductScreen from '../screens/ProductScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProductCRUD from '../components/ProductCruds';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ScreenWrapper from '../components/ScreenWrapper';

const Stack = createStackNavigator();

const LogoTitle = () => {
  return (
    <View style={styles.headerTitleContainer}>
      <Image
        source={require('../assets/logo.jpg')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.titleText}>Bienvenido</Text>
    </View>
  );
};

const AppNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isAuthenticated ? 'Profile' : 'Home'}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007bff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          options={({ navigation }) => ({
            headerTitle: props => <LogoTitle {...props} />,
            headerRight: () => isAuthenticated ? (
              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.headerButtonText}>Perfil</Text>
              </TouchableOpacity>
            ) : null,
          })}
        >
          {(props) => (
            <ScreenWrapper>
              <HomeScreen {...props} />
            </ScreenWrapper>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Login"
        >
          {(props) => (
            <ScreenWrapper>
              <LoginScreen {...props} onLogin={handleLogin} />
            </ScreenWrapper>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Chat"
          options={{ title: 'Chat' }}
        >
          {(props) => (
            <ScreenWrapper>
              <ChatScreen {...props} />
            </ScreenWrapper>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Products"
          options={{ title: 'Productos' }}
        >
          {(props) => (
            <ScreenWrapper>
              <ProductScreen {...props} />
            </ScreenWrapper>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="ProductCRUD"
          options={{ title: 'Gestión de Productos' }}
        >
          {(props) => (
            <ScreenWrapper>
              <ProductCRUD {...props} />
            </ScreenWrapper>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Profile"
          options={{ title: 'Perfil' }}
        >
          {(props) => (
            <ScreenWrapper>
              <ProfileScreen {...props} onLogout={handleLogout} />
            </ScreenWrapper>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={{ title: 'Detalles del Producto' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
    marginLeft: -60,
  },
  headerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 2,
  },
});

export default AppNavigator;
