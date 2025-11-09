import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';

// INTERFACES PARA TIPADO DE DATOS
// Define la estructura de un producto con sus propiedades
interface Product {
  name: string;        // Nombre del producto
  image: string;       // URL de la imagen
  discount: number;    // Porcentaje de descuento (0 = sin descuento)
  stock: number;       // Cantidad disponible (0 = sin stock)
  price: number;       // Precio del producto
  description: string; // Descripción corta
}

// Props que recibe el componente CardProduct
interface CardProductProps {
  product: Product;    // Objeto producto con toda la información
}

// COMPONENTE PRINCIPAL - TARJETA DE PRODUCTO
export const CardProduct = ({ product }: CardProductProps) => {
  // Desestructuración de las propiedades del producto para uso directo
  const { name, image, discount, stock, price, description } = product;

  return (
    <View style={styles.container}>
      {/* SECCIÓN SUPERIOR: Imagen e información básica del producto */}
      <View style={styles.header}>
        {/* 
          Componente Image para mostrar la imagen del producto
          - source: URI de la imagen remota
          - resizeMode: 'contain' mantiene proporciones sin recortar
        */}
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="contain"
        />
        
        {/* Contenedor de información textual */}
        <View style={styles.infoContainer}>
          {/* CONTENEDOR DE BADGES: Muestra etiquetas de descuento y stock */}
          <View style={styles.badgesContainer}>
            {/* Badge de descuento - solo se muestra si hay descuento */}
            {discount > 0 && (
              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>
                  Descuento {discount}%
                </Text>
              </View>
            )}
            
            {/* Badge de stock - solo se muestra cuando no hay existencias */}
            {stock <= 0 && (
              <View style={styles.stockBadge}>
                <Text style={styles.stockText}>
                  Sin existencias
                </Text>
              </View>
            )}
          </View>
          
          {/* Nombre del producto con límite de una línea */}
          <Text style={styles.productName} numberOfLines={1}>
            {name}
          </Text>
        </View>
      </View>

      {/* DESCRIPCIÓN DEL PRODUCTO: Texto descriptivo con máximo 2 líneas */}
      <Text style={styles.description} numberOfLines={2}>
        {description}
      </Text>

      {/* SECCIÓN INFERIOR: Precio y botón de acción */}
      <View style={styles.footer}>
        {/* Precio del producto */}
        <Text style={styles.price}>${price}</Text>
        
        {/* 
          Botón para agregar al carrito
          - TouchableOpacity: Componente táctil con efecto de opacidad
          - disabled: Se desactiva cuando no hay stock
          - Estilo condicional basado en el stock disponible
        */}
        <TouchableOpacity
          disabled={stock <= 0}
          style={[
            styles.addButton,
            stock <= 0 && styles.disabledButton
          ]}
        >
          {/* 
            Icono de plus como texto
            - Estilo condicional para estado deshabilitado
          */}
          <Text style={[
            styles.addButtonText,
            stock <= 0 && styles.disabledButtonText
          ]}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// STYLESHEET - DEFINICIÓN DE ESTILOS
const styles = StyleSheet.create({
  // CONTENEDOR PRINCIPAL - Estilo de tarjeta
  container: {
    backgroundColor: '#ffffff',           // Fondo blanco
    borderRadius: 32,                     // Bordes muy redondeados (equivalente a rounded-4xl)
    padding: 24,                          // Espaciado interno grande (equivalente a p-6)
    margin: 8,                            // Margen externo
    shadowColor: '#000',                  // Color de sombra
    shadowOffset: {
      width: 0,                           // Sin desplazamiento horizontal
      height: 2,                          // Desplazamiento vertical de 2px
    },
    shadowOpacity: 0.1,                   // Opacidad de la sombra (10%)
    shadowRadius: 3.84,                   // Difuminado de la sombra
    elevation: 5,                         // Elevación para Android (sombra)
  },

  // HEADER - Sección superior con imagen e información
  header: {
    flexDirection: 'row',                 // Disposición en fila
    alignItems: 'center',                 // Centrado vertical
    gap: 24,                              // Espacio entre elementos (equivalente a gap-x-6)
    marginBottom: 20,                     // Espacio inferior (equivalente a space-y-5)
  },

  // IMAGEN - Estilo de la imagen del producto
  image: {
    width: 96,                            // Ancho fijo (equivalente a w-24)
    height: 96,                           // Alto fijo (equivalente a h-24)
    borderRadius: 16,                     // Bordes redondeados (equivalente a rounded-2xl)
  },

  // CONTENEDOR DE INFORMACIÓN - Área textual derecha
  infoContainer: {
    flex: 1,                             // Toma todo el espacio disponible
    gap: 8,                              // Espacio entre elementos hijos (equivalente a space-y-2)
  },

  // CONTENEDOR DE BADGES - Etiquetas de descuento y stock
  badgesContainer: {
    flexDirection: 'row',                // Disposición en fila
    alignItems: 'center',                // Centrado vertical
    gap: 8,                              // Espacio entre badges (equivalente a gap-x-2)
    flexWrap: 'wrap',                    // Permite que los badges se envuelvan si no caben
  },

  // BADGE DE DESCUENTO - Estilo de la etiqueta de descuento
  discountBadge: {
    paddingVertical: 6,                  // Espaciado vertical interno (equivalente a py-1.5)
    paddingHorizontal: 8,                // Espaciado horizontal interno (equivalente a px-2)
    backgroundColor: 'rgba(59, 246, 115, 0.14)', // Fondo verde semitransparente
    borderRadius: 9999,                  // Bordes completamente redondeados (círculo)
  },

  // TEXTO DEL BADGE DE DESCUENTO
  discountText: {
    color: '#4CAF50',                    // Color verde (equivalente a text-primary)
    fontSize: 14,                        // Tamaño de texto pequeño (equivalente a text-sm)
    fontWeight: 'bold',                  // Texto en negrita
  },

  // BADGE DE STOCK - Estilo de la etiqueta de sin stock
  stockBadge: {
    paddingVertical: 6,                  // Mismo espaciado que discountBadge
    paddingHorizontal: 8,
    backgroundColor: 'rgba(239, 68, 68, 0.1)', // Fondo rojo semitransparente
    borderRadius: 9999,                  // Bordes completamente redondeados
  },

  // TEXTO DEL BADGE DE STOCK
  stockText: {
    color: '#ef4444',                    // Color rojo (equivalente a text-red-500)
    fontSize: 14,                        // Tamaño de texto pequeño
    fontWeight: 'bold',                  // Texto en negrita
  },

  // NOMBRE DEL PRODUCTO - Texto del título
  productName: {
    fontSize: 24,                        // Tamaño de texto grande (equivalente a text-3xl)
    fontWeight: 'bold',                  // Texto en negrita
    color: '#1f2937',                    // Color gris oscuro (equivalente a text-gray-800)
  },

  // DESCRIPCIÓN - Texto descriptivo del producto
  description: {
    color: '#6b7280',                    // Color gris medio (equivalente a text-gray-500)
    fontSize: 16,                        // Tamaño de texto medio
    lineHeight: 20,                      // Altura de línea para mejor legibilidad
    marginBottom: 20,                    // Espacio inferior (equivalente a space-y-5)
  },

  // FOOTER - Sección inferior con precio y botón
  footer: {
    flexDirection: 'row',                // Disposición en fila
    alignItems: 'center',                // Centrado vertical
    justifyContent: 'space-between',     // Espacio distribuido entre elementos
  },

  // PRECIO - Texto del precio del producto
  price: {
    fontSize: 20,                        // Tamaño de texto grande (equivalente a text-2xl)
    fontWeight: 'bold',                  // Texto en negrita
    color: '#1f2937',                    // Color gris oscuro
  },

  // BOTÓN AGREGAR - Botón circular para agregar al carrito
  addButton: {
    width: 56,                           // Ancho fijo (equivalente a w-14)
    height: 56,                          // Alto fijo (equivalente a h-14)
    alignItems: 'center',                // Centrado horizontal del contenido
    justifyContent: 'center',            // Centrado vertical del contenido
    borderRadius: 9999,                  // Forma completamente circular
    backgroundColor: '#4CAF50',          // Fondo verde (equivalente a bg-primary)
    borderWidth: 4,                      // Borde grueso (equivalente a border-4)
    borderColor: '#ffffff',              // Borde blanco (equivalente a border-background)
  },

  // BOTÓN DESHABILITADO - Estado cuando no hay stock
  disabledButton: {
    backgroundColor: '#f8fafc',          // Fondo gris claro (equivalente a bg-background)
  },

  // TEXTO DEL BOTÓN AGREGAR - Icono plus
  addButtonText: {
    fontSize: 20,                        // Tamaño de texto grande (equivalente a text-xl)
    color: '#ffffff',                    // Color blanco
    fontWeight: 'bold',                  // Texto en negrita
  },

  // TEXTO DEL BOTÓN DESHABILITADO
  disabledButtonText: {
    color: '#6b7280',                    // Color gris medio (equivalente a text-gray-500)
  },
});

export default CardProduct;