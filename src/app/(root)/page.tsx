import React, { useState } from 'react'; // Importa React y el hook useState para manejar estado
import { View, FlatList, StyleSheet } from 'react-native'; // Componentes de React Native

import { products } from '../../assets/data'; // Datos de productos importados
import { CardProduct } from '../../components/widgets/card-product'; // Componente para mostrar cada producto
import { Categories } from '../../components/widgets/categories'; // Componente para mostrar categorías

const Home = () => {
  // Estado para manejar la categoría seleccionada
  // 'all' es el valor por defecto que muestra todos los productos
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filtra los productos basándose en la categoría seleccionada
  // Si la categoría es 'all', muestra todos los productos
  // Si no, filtra los productos que coincidan con la categoría seleccionada
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <View style={styles.container}>
      {/* 
        Componente Categories que muestra las categorías disponibles
        Props:
        - selectedCategory: categoría actualmente seleccionada
        - onCategorySelect: función para cambiar la categoría seleccionada
      */}
      <Categories 
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      
      {/* 
        FlatList: Componente optimizado para listas largas
        Props:
        - data: array de productos filtrados a mostrar
        - keyExtractor: función que genera claves únicas para cada item
        - renderItem: función que renderiza cada producto usando CardProduct
        - numColumns: número de columnas (1 = lista vertical)
        - contentContainerStyle: estilos para el contenedor de la lista
        - showsVerticalScrollIndicator: oculta la barra de scroll vertical
      */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id || item.name} // Usa id si existe, sino usa name como clave
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <CardProduct product={item} />
          </View>
        )}
        numColumns={1}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

// StyleSheet.create: Define los estilos de manera optimizada
const styles = StyleSheet.create({
  // Estilos para el contenedor principal
  container: {
    flex: 1, // Ocupa todo el espacio disponible
    backgroundColor: '#fff', // Fondo blanco
  },
  
  // Estilos para el contenedor interno de la lista
  listContainer: {
    paddingTop: 16, // Espacio superior de 16 unidades
    paddingHorizontal: 0, // Sin padding horizontal (se maneja en productItem)
  },
  
  // Estilos para cada item de producto en la lista
  productItem: {
    marginBottom: 16, // Espacio inferior entre productos
    paddingHorizontal: 16, // Padding lateral para separar del borde de la pantalla
  },
});

export default Home; // Exporta el componente para ser usado en otras partes de la app