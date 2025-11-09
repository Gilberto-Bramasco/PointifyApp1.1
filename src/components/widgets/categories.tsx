import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { categories } from '../../assets/data'; // Importa el array de categorías desde el archivo de datos

// Definición de las propiedades que recibe el componente Categories
interface CategoriesProps {
  selectedCategory: string; // ID de la categoría actualmente seleccionada
  onCategorySelect: (categoryId: string) => void; // Función callback cuando se selecciona una categoría
}

// Componente Categories: muestra una lista horizontal de categorías seleccionables
export const Categories = ({ selectedCategory, onCategorySelect }: CategoriesProps) => {
  return (
    <View style={styles.container}>
      {/* 
        ScrollView horizontal para navegar entre categorías
        showsHorizontalScrollIndicator={false} oculta la barra de scroll horizontal
        contentContainerStyle aplica estilos al contenedor interno del ScrollView
      */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* 
          Mapeo de todas las categorías disponibles
          Se itera sobre el array categories y se crea un botón por cada categoría
        */}
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id} // Key única para cada elemento de la lista (requerido por React)
            style={[
              styles.button, // Estilo base del botón
              // Si la categoría actual está seleccionada, aplica el estilo activo
              selectedCategory === category.id && styles.activeButton
            ]}
            // Al presionar el botón, ejecuta la función callback con el ID de la categoría
            onPress={() => onCategorySelect(category.id)}
          >
            <Text style={[
              styles.buttonText, // Estilo base del texto
              // Si la categoría está seleccionada, aplica el estilo de texto activo
              selectedCategory === category.id && styles.activeButtonText
            ]}>
              {category.name} {/* Muestra el nombre de la categoría */}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

// Definición de estilos usando StyleSheet.create para mejor rendimiento
const styles = StyleSheet.create({
  // Contenedor principal del componente
  container: {
    borderBottomWidth: 1, // Línea divisoria inferior
    borderBottomColor: '#e5e5e5', // Color gris claro para la línea divisoria
  },
  // Contenedor interno del ScrollView - define el espaciado interno
  scrollContent: {
    paddingHorizontal: 20, // Espaciado horizontal interno de 20 unidades
    paddingVertical: 12, // Espaciado vertical interno de 12 unidades
  },
  // Estilo base para los botones de categoría
  button: {
    paddingHorizontal: 20, // Espaciado interno horizontal
    paddingVertical: 8, // Espaciado interno vertical
    borderRadius: 20, // Bordes redondeados (forma de píldora/cápsula)
    backgroundColor: '#f8f8f8', // Color de fondo gris muy claro
    marginRight: 10, // Margen derecho para separar los botones
  },
  // Estilo aplicado al botón cuando está activo/seleccionado
  activeButton: {
    backgroundColor: '#4CAF50', // Color verde para indicar estado activo
  },
  // Estilo base para el texto de los botones
  buttonText: {
    fontSize: 14, // Tamaño de fuente mediano
    color: '#666', // Color gris para texto no seleccionado
    fontWeight: '500', // Grosor de fuente semi-negrita
  },
  // Estilo aplicado al texto cuando el botón está activo
  activeButtonText: {
    color: '#fff', // Color blanco para mejor contraste sobre fondo verde
  },
});