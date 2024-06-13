import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const MenuDrawer = ({ isVisible, onClose, navigation }) => {
  if (!isVisible) return null;

  const handleChatNavigation = () => {
    navigation.navigate('Chat');
    onClose();
  };

  const handleFacebookLink = () => {
    Linking.openURL('https://facebook.com/empresa');
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
          <Text style={styles.title}>Contactos</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Teléfono:</Text>
            <Text style={styles.text}>123-456-789</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Facebook:</Text>
            <TouchableOpacity onPress={handleFacebookLink}>
              <Text style={[styles.text, styles.link]}>facebook.com/empresa</Text>
            </TouchableOpacity>
          </View>
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
    color: '#000',
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  link: {
    color: '#ff0000',
    textDecorationLine: 'underline',
  },
  chatButton: {
    backgroundColor: '#ff5722',
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
