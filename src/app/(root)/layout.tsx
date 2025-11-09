import React, { ReactNode } from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';

import { Header } from '../../components/widgets/header';
import { Cart } from '../../components/widgets/cart';

// Obtener dimensiones de la pantalla para layouts responsivos
const { height: screenHeight } = Dimensions.get('window');

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <View style={styles.container}>
      {/* Sección del Header - 10% de la altura de la pantalla */}
      <View style={styles.headerSection}>
        <Header />
      </View>
      
      {/* Sección principal con contenido y carrito */}
      <View style={styles.mainSection}>
        {/* Contenido principal - Ocupa 3/4 en pantallas grandes */}
        <ScrollView 
          style={styles.mainContent}
          contentContainerStyle={styles.mainContentContainer}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
        
        {/* Componente Cart - Ocupa 1/4 en pantallas grandes */}
        <View style={styles.cartSection}>
          <Cart />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda la altura disponible (equivalente a h-[100dvh])
    backgroundColor: '#fff', // Fondo blanco por defecto
  },
  headerSection: {
    height: screenHeight * 0.1, // 10% de la altura de la pantalla (equivalente a h-[10dvh])
    paddingHorizontal: 20, // Equivalente a px-5 (5 * 4 = 20)
    paddingVertical: 16, // Equivalente a py-4 (4 * 4 = 16)
    justifyContent: 'center',
  },
  mainSection: {
    flex: 1, // Ocupa el 90% restante (equivalente a h-[90dvh])
    flexDirection: 'column', // Por defecto en columna para móviles
  },
  mainContent: {
    flex: 3, // Ocupa 3 partes de 4 (equivalente a basis-3/4)
  },
  mainContentContainer: {
    padding: 20, // Equivalente a p-5 (5 * 4 = 20)
    paddingRight: 8, // Equivalente a lg:pr-2 (2 * 4 = 8)
  },
  cartSection: {
    flex: 1, // Ocupa 1 parte de 4 (equivalente a basis-1/4)
    padding: 20, // Equivalente a p-5 (5 * 4 = 20)
    paddingLeft: 8, // Equivalente a lg:pl-2 (2 * 4 = 8)
  },
});

export default Layout;