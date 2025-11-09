// card-quantity-product.tsx
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { ProductCart } from '../../types';

// Definición de las propiedades que recibe el componente
interface CardQuantityProductProps {
  product: ProductCart; // Objeto producto con información del carrito
}

// Componente para mostrar un producto con controles de cantidad
export const CardQuantityProduct = ({ product }: CardQuantityProductProps) => {
  // Estado para manejar la cantidad del producto
  // Se inicializa con la cantidad que viene del producto
  const [quantity, setQuantity] = React.useState(product.quantity);

  // Función para incrementar la cantidad en 1
  const handleIncrement = () => setQuantity(prev => prev + 1);
  
  // Función para decrementar la cantidad, asegurando que no sea menor a 0
  const handleDecrement = () => setQuantity(prev => Math.max(0, prev - 1));

  return (
    <View style={styles.container}>
      {/* Imagen del producto */}
      <Image 
        source={{ uri: product.image }} 
        style={styles.image}
      />
      
      {/* Contenedor de información del producto */}
      <View style={styles.info}>
        {/* Nombre del producto */}
        <Text style={styles.name}>{product.name}</Text>
        
        {/* Precio del producto formateado a 2 decimales */}
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        
        {/* Controles de cantidad */}
        <View style={styles.quantityContainer}>
          {/* Botón para disminuir cantidad */}
          <TouchableOpacity 
            style={[styles.quantityButton, quantity === 0 && styles.disabledButton]}
            onPress={handleDecrement}
            disabled={quantity === 0}
          >
            <Text style={[styles.quantityButtonText, quantity === 0 && styles.disabledButtonText]}>
              -
            </Text>
          </TouchableOpacity>
          
          {/* Texto que muestra la cantidad actual */}
          <Text style={styles.quantityText}>{quantity}</Text>
          
          {/* Botón para aumentar cantidad */}
          <TouchableOpacity 
            style={styles.quantityButton}
            onPress={handleIncrement}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Estilos del componente
const styles = StyleSheet.create({
  // Contenedor principal - Estilo de tarjeta
  container: {
    flexDirection: 'row', // Disposición horizontal
    borderWidth: 1, // Borde delgado
    borderColor: '#e0e0e0', // Color gris claro para el borde
    borderRadius: 16, // Esquinas redondeadas
    padding: 12, // Espaciado interno
    backgroundColor: '#fff', // Fondo blanco
    alignItems: 'center', // Centrado vertical de los elementos
  },
  
  // Estilo para la imagen del producto
  image: {
    width: 60, // Ancho fijo
    height: 60, // Alto fijo
    borderRadius: 8, // Esquinas ligeramente redondeadas
    marginRight: 12, // Espacio a la derecha para separar de la información
  },
  
  // Contenedor de información textual del producto
  info: {
    flex: 1, // Ocupa todo el espacio disponible restante
  },
  
  // Estilo para el nombre del producto
  name: {
    fontSize: 16, // Tamaño de fuente mediano
    fontWeight: 'bold', // Texto en negrita
    color: '#333', // Color gris oscuro
    marginBottom: 4, // Espacio inferior pequeño
  },
  
  // Estilo para el precio del producto
  price: {
    fontSize: 14, // Tamaño de fuente pequeño
    color: '#666', // Color gris medio
    marginBottom: 8, // Espacio inferior mediano
  },
  
  // Contenedor de los controles de cantidad - Tema verde
  quantityContainer: {
    flexDirection: 'row', // Disposición horizontal
    alignItems: 'center', // Centrado vertical
    justifyContent: 'space-between', // Espacio uniforme entre elementos
    backgroundColor: '#f8fff8', // Fondo verde muy claro
    borderRadius: 20, // Esquinas completamente redondeadas
    padding: 4, // Espaciado interno pequeño
    borderWidth: 1, // Borde delgado
    borderColor: '#e8f5e8', // Color verde muy claro para el borde
    maxWidth: 120, // Ancho máximo para evitar que sea muy grande
  },
  
  // Botón de cantidad - Estilo circular verde
  quantityButton: {
    backgroundColor: '#4CAF50', // Color verde
    width: 32, // Ancho fijo para forma circular
    height: 32, // Alto fijo para forma circular
    borderRadius: 16, // Radio igual a la mitad del tamaño para forma circular perfecta
    justifyContent: 'center', // Centrado vertical del contenido
    alignItems: 'center', // Centrado horizontal del contenido
    shadowColor: '#4CAF50', // Color de la sombra (verde)
    shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
    shadowOpacity: 0.3, // Transparencia de la sombra
    shadowRadius: 3, // Difuminado de la sombra
    elevation: 3, // Elevación para Android (sombra)
  },
  
  // Texto dentro del botón de cantidad
  quantityButtonText: {
    color: '#fff', // Color blanco para buen contraste
    fontSize: 16, // Tamaño de fuente mediano
    fontWeight: 'bold', // Texto en negrita
  },
  
  // Estilo para botón deshabilitado (cuando cantidad es 0)
  disabledButton: {
    backgroundColor: '#cccccc', // Color gris para indicar deshabilitado
    shadowColor: '#999', // Sombra gris para coincidir
  },
  
  // Texto para botón deshabilitado
  disabledButtonText: {
    color: '#666', // Color gris oscuro para texto deshabilitado
  },
  
  // Texto que muestra la cantidad actual
  quantityText: {
    fontSize: 16, // Tamaño de fuente mediano
    fontWeight: 'bold', // Texto en negrita
    color: '#333', // Color gris oscuro
    minWidth: 30, // Ancho mínimo para mantener consistencia
    textAlign: 'center', // Texto centrado
  },
});