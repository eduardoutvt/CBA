import React from 'react';
import { View, StyleSheet } from 'react-native';
import FooterNavigation from './FooterNavigation';

const ScreenWrapper = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <FooterNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScreenWrapper;
