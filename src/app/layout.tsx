import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

// En React Native no se usa Metadata de Next.js
// Las fuentes se manejan de forma diferente

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Fondo blanco por defecto
    // Para aplicar una fuente personalizada, necesitarías usar react-native-vector-icons
    // o cargar fuentes custom con react-native.config.js y Font.loadAsync
  },
});

export default RootLayout;