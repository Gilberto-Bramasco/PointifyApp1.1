import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import { productsCart } from '../../assets/data';
import { CardQuantityProduct } from './card-quantity-product';

// Componente temporal para mostrar productos si CardQuantityProduct no funciona
// Este componente sirve como fallback en caso de que el componente principal falle
const ProductItem = ({ product }: { product: any }) => {
  return (
    <View style={styles.productItem}>
      {/* Imagen del producto con manejo de errores */}
      <Image 
        source={{ uri: product.image }} 
        style={styles.productImage}
        onError={(e) => console.log('Error loading image:', e.nativeEvent.error)}
      />
      <View style={styles.productInfo}>
        {/* Nombre del producto */}
        <Text style={styles.productName}>{product.name}</Text>
        {/* Precio del producto formateado a 2 decimales */}
        <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
        {/* Cantidad del producto en el carrito */}
        <Text style={styles.productQuantity}>Cantidad: {product.quantity}</Text>
      </View>
    </View>
  );
};

// Componente principal del Carrito
export const Cart = () => {
  // Estado para controlar la visibilidad del modal del carrito
  const [showCart, setShowCart] = useState<boolean>(false);

  // Cálculo del subtotal por cada producto (precio * cantidad)
  const subtotalByProduct = productsCart.map(
    (product) => product.price * product.quantity
  );

  // Cálculo del subtotal general sumando todos los subtotales de productos
  const subtotal = subtotalByProduct.reduce((acc, curr) => acc + curr, 0);
  // Cálculo del impuesto IVA (16% del subtotal)
  const tax = subtotal * 0.16;
  // Cálculo del total general (subtotal + impuestos)
  const total = subtotal + tax;

  return (
    <>
      {/* Modal para el carrito en dispositivos móviles */}
      <Modal
        visible={showCart} // Controla si el modal está visible o no
        animationType="slide" // Tipo de animación al abrir/cerrar
        onRequestClose={() => setShowCart(false)} // Función llamada cuando se solicita cerrar el modal
      >
        {/* SafeAreaView para asegurar que el contenido no se superponga con áreas inseguras del dispositivo */}
        <SafeAreaView style={styles.modalContainer}>
          {/* StatusBar para controlar la barra de estado del dispositivo */}
          <StatusBar barStyle="dark-content" />
          
          {/* Header del modal con botón de cerrar */}
          <View style={styles.modalHeader}>
            {/* Botón para cerrar el modal */}
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => setShowCart(false)}
            >
              <Text style={styles.closeButtonText}>×</Text>
            </TouchableOpacity>
            {/* Título del modal */}
            <Text style={styles.modalTitle}>Carrito</Text>
          </View>

          {/* Contenido principal del carrito */}
          <View style={styles.cartContent}>
            {/* Barra de búsqueda de productos */}
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Buscar producto"
                placeholderTextColor="#999"
              />
            </View>

            {/* Lista desplazable de productos en el carrito */}
            <ScrollView style={styles.productsList}>
              {/* Mapeo de todos los productos en el carrito */}
              {productsCart.map((product) => (
                <View key={product.id || product.name} style={styles.productItemWrapper}>
                  {/* Renderizado condicional: usa CardQuantityProduct si está disponible, sino usa ProductItem */}
                  {CardQuantityProduct ? (
                    <CardQuantityProduct product={product} />
                  ) : (
                    <ProductItem product={product} />
                  )}
                </View>
              ))}
            </ScrollView>

            {/* Sección de resumen de la orden con cálculos de precios */}
            <View style={styles.orderSummary}>
              {/* Línea de subtotal */}
              <View style={styles.summaryItem}>
                <Text style={styles.summaryLabel}>Subtotal</Text>
                <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
              </View>
              {/* Línea de IVA */}
              <View style={styles.summaryItem}>
                <Text style={styles.summaryLabel}>IVA (16%)</Text>
                <Text style={styles.summaryValue}>${tax.toFixed(2)}</Text>
              </View>
              {/* Línea de total */}
              <View style={styles.summaryItem}>
                <Text style={styles.summaryLabel}>Total</Text>
                <Text style={styles.summaryTotal}>${total.toFixed(2)}</Text>
              </View>

              {/* Botón para confirmar la orden */}
              <TouchableOpacity style={styles.confirmButton}>
                <Text style={styles.confirmButtonText}>Confirmar orden</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </Modal>

      {/* Botón flotante para abrir el carrito */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setShowCart(true)}
      >
        <Text style={styles.floatingButtonText}>🛒</Text>
      </TouchableOpacity>
    </>
  );
};

// Hoja de estilos para el componente
const styles = StyleSheet.create({
  // Contenedor principal del modal
  modalContainer: {
    flex: 1, // Ocupa todo el espacio disponible
    backgroundColor: '#fff', // Fondo blanco
  },
  // Header del modal
  modalHeader: {
    flexDirection: 'row', // Disposición en fila
    alignItems: 'center', // Centrado vertical
    padding: 16, // Espaciado interno
    borderBottomWidth: 1, // Línea inferior
    borderBottomColor: '#e0e0e0', // Color gris claro para la línea
  },
  // Botón de cerrar
  closeButton: {
    padding: 8, // Espaciado interno para hacer el área táctil más grande
  },
  // Texto del botón de cerrar
  closeButtonText: {
    fontSize: 24, // Tamaño grande para el icono de cerrar
    color: '#333', // Color gris oscuro
  },
  // Título del modal
  modalTitle: {
    fontSize: 18, // Tamaño de fuente mediano
    fontWeight: 'bold', // Texto en negrita
    marginLeft: 16, // Margen a la izquierda para separar del botón cerrar
    color: '#333', // Color gris oscuro
  },
  // Contenido del carrito
  cartContent: {
    flex: 1, // Ocupa todo el espacio disponible
    padding: 16, // Espaciado interno
  },
  // Contenedor de la barra de búsqueda
  searchContainer: {
    marginBottom: 16, // Margen inferior para separar de la lista
  },
  // Campo de entrada de búsqueda
  searchInput: {
    height: 50, // Altura fija
    borderWidth: 1, // Borde delgado
    borderColor: '#ddd', // Color gris muy claro para el borde
    borderRadius: 25, // Bordes completamente redondeados
    paddingHorizontal: 20, // Espaciado horizontal interno
    fontSize: 16, // Tamaño de fuente legible
    backgroundColor: '#f9f9f9', // Fondo gris muy claro
  },
  // Lista desplazable de productos
  productsList: {
    flex: 1, // Ocupa todo el espacio disponible
    marginBottom: 16, // Margen inferior para separar del resumen
  },
  // Contenedor de cada item de producto
  productItemWrapper: {
    marginBottom: 12, // Margen inferior entre productos
  },
  // Estilos para el componente temporal ProductItem
  productItem: {
    flexDirection: 'row', // Disposición en fila
    borderWidth: 1, // Borde delgado
    borderColor: '#e0e0e0', // Color gris claro
    borderRadius: 16, // Bordes redondeados
    padding: 12, // Espaciado interno
    backgroundColor: '#fff', // Fondo blanco
    alignItems: 'center', // Centrado vertical de los elementos
  },
  // Imagen del producto
  productImage: {
    width: 60, // Ancho fijo
    height: 60, // Alto fijo
    borderRadius: 8, // Bordes ligeramente redondeados
    marginRight: 12, // Margen a la derecha para separar del texto
  },
  // Contenedor de información del producto
  productInfo: {
    flex: 1, // Ocupa todo el espacio disponible restante
  },
  // Nombre del producto
  productName: {
    fontSize: 16, // Tamaño de fuente estándar
    fontWeight: 'bold', // Texto en negrita
    color: '#333', // Color gris oscuro
    marginBottom: 4, // Margen inferior pequeño
  },
  // Precio del producto
  productPrice: {
    fontSize: 14, // Tamaño de fuente pequeño
    color: '#666', // Color gris medio
    marginBottom: 2, // Margen inferior muy pequeño
  },
  // Cantidad del producto
  productQuantity: {
    fontSize: 12, // Tamaño de fuente muy pequeño
    color: '#999', // Color gris claro
  },
  // Resumen de la orden
  orderSummary: {
    backgroundColor: '#f8f8f8', // Fondo gris muy claro
    borderRadius: 16, // Bordes redondeados
    padding: 16, // Espaciado interno
  },
  // Item individual del resumen (subtotal, IVA, total)
  summaryItem: {
    flexDirection: 'row', // Disposición en fila
    justifyContent: 'space-between', // Espacio entre label y valor
    alignItems: 'center', // Centrado vertical
    marginBottom: 8, // Margen inferior entre items
  },
  // Texto de las etiquetas del resumen (Subtotal, IVA, Total)
  summaryLabel: {
    fontSize: 16, // Tamaño de fuente estándar
    color: '#666', // Color gris medio
  },
  // Valores numéricos del resumen (excepto el total)
  summaryValue: {
    fontSize: 16, // Tamaño de fuente estándar
    fontWeight: 'bold', // Texto en negrita
    color: '#333', // Color gris oscuro
  },
  // Valor del total (diferente estilo para destacar)
  summaryTotal: {
    fontSize: 18, // Tamaño de fuente más grande
    fontWeight: 'bold', // Texto en negrita
    color: '#333', // Color gris oscuro
  },
  // Botón de confirmar orden
  confirmButton: {
    backgroundColor: '#4CAF50', // Color verde sólido
    paddingVertical: 16, // Espaciado vertical interno
    paddingHorizontal: 24, // Espaciado horizontal interno
    borderRadius: 25, // Bordes completamente redondeados
    alignItems: 'center', // Centrado horizontal del texto
    marginTop: 16, // Margen superior para separar de los totales
    shadowColor: '#4CAF50', // Color de la sombra (coincide con el fondo)
    shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
    shadowOpacity: 0.3, // Transparencia de la sombra
    shadowRadius: 4, // Difuminado de la sombra
    elevation: 4, // Elevación para Android (sombra)
  },
  // Texto del botón confirmar
  confirmButtonText: {
    color: '#fff', // Color blanco para buen contraste
    fontSize: 16, // Tamaño de fuente estándar
    fontWeight: '600', // Peso de fuente semi-negrita
  },
  // Botón flotante del carrito
  floatingButton: {
    position: 'absolute', // Posicionamiento absoluto
    bottom: 20, // 20 puntos desde la parte inferior
    right: 20, // 20 puntos desde la derecha
    width: 56, // Ancho fijo
    height: 56, // Alto fijo (mismo que ancho para forma circular)
    backgroundColor: '#000000', // Color negro de fondo
    borderRadius: 28, // La mitad del width/height para forma circular perfecta
    justifyContent: 'center', // Centrado vertical del icono
    alignItems: 'center', // Centrado horizontal del icono
    elevation: 8, // Elevación para Android (sombra más pronunciada)
    shadowColor: '#4CAF50', // Color de la sombra (verde)
    shadowOffset: { width: 0, height: 4 }, // Desplazamiento de la sombra
    shadowOpacity: 0.4, // Transparencia de la sombra
    shadowRadius: 6, // Difuminado de la sombra
  },
  // Texto/icono del botón flotante
  floatingButtonText: {
    color: '#fff', // Color blanco para el icono del carrito
    fontSize: 20, // Tamaño de fuente para el emoji/icono
  },
});