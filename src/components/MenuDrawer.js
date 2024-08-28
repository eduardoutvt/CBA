import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import ContactInfo from './ContactInfo'; // Importamos el componente ContactInfo

const MenuDrawer = ({ isVisible, onClose, navigation }) => {
  if (!isVisible) return null;

  const handleChatNavigation = () => {
    navigation.navigate('Chat');
    onClose();
  };
  return (
    <TouchableOpacity style={styles.overlay} onPress={onClose}>
      <View style={styles.drawer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Menu</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          {/* Integramos el componente ContactInfo aquí */}
          <ContactInfo />
        </View>
        <View style={styles.section}>
          <TouchableOpacity style={styles.chatButton} onPress={handleChatNavigation}>
            <Text style={styles.chatText}>Iniciar Chat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  drawer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: '70%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingVertical: 40,
    paddingHorizontal: 30,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 10,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  section: {
    marginBottom: 20,
  },
  chatButton: {
    backgroundColor: '#0087D1',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MenuDrawer;
