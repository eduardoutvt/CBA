import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator, Modal } from 'react-native';

const LoginScreen = ({ navigation, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Credenciales de inicio de sesión
  const validCredentials = [
    { username: 'Joel Velasco', password: 'Lerma-Metepec24' },
    { username: 'Carlos Flores91', password: 'covercharly07' },
    { username: 'CesarMtz', password: 'Retos33-1' },
  ];

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Por favor, complete todos los campos.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Comprobación de credenciales
      const user = validCredentials.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        // Simular animación de carga durante unos segundos antes de navegar
        setTimeout(() => {
          setLoading(false);
          onLogin();
          navigation.replace('Profile', { username: user.username }); // Usamos replace para que no vuelva al Login al presionar back
        }, 3000); // Cambiar a la duración que desees
      } else {
        setLoading(false);
        setError('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Ocurrió un error. Intente nuevamente.');
      setLoading(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/fondo.jpg')} style={styles.backgroundImage} />
      <View style={styles.overlay}>
        <Image source={require('../assets/logo.jpg')} style={styles.logo} />

        <Text style={styles.title}>Iniciar Sesión</Text>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TextInput
          placeholder="Nombre de usuario"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          placeholderTextColor="#888"
        />

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            style={styles.input}
            placeholderTextColor="#888"
          />
          <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIconContainer}>
            <Text style={styles.eyeIcon}>{showPassword ? '👁️' : '🙈'}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.backButtonText}>Volver a Inicio</Text>
        </TouchableOpacity>
      </View>

      {loading && (
        <Modal transparent={true} animationType="fade">
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#007bff" />
            <Text style={styles.loadingText}>Cargando...</Text>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75, // Para hacer el logo redondo si lo deseas
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    color: '#000',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 20,
  },
  backButtonText: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 15,
  },
  eyeIcon: {
    fontSize: 18,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  loadingText: {
    marginTop: 10,
    color: '#fff',
    fontSize: 18,
  },
});

export default LoginScreen;
