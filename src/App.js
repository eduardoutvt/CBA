import React from 'react';
import { AuthProvider } from './context/AuthContext'; // Importar AuthProvider
import AppNavigator from './navigation/AppNavigator'; // Importar AppNavigator

const App = () => {
  return (
    <AuthProvider> {/* Envuelve tu aplicación con AuthProvider */}
      <AppNavigator />
    </AuthProvider>
  );
};

export default App;
