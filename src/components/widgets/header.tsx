// En header.tsx - VERSIÓN COMPLETA CON TÍTULO
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Modal,
  StatusBar,
} from 'react-native';
import { Logo } from './logo'; // ✅ Importar el componente Logo

// Definición de interfaces TypeScript para las props
interface HeaderProps {
  title?: string; // Título opcional del header, por defecto 'Antonella'
}

interface MenuMobileProps {
  isOpen: boolean; // Estado que controla si el menú móvil está abierto
  onClose: (value: boolean) => void; // Función para cerrar el menú
}

import { menu } from '../../assets/data'; // Importar datos del menú desde archivo externo

// Componente del menú móvil que se muestra como modal
const MenuMobile: React.FC<MenuMobileProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      visible={isOpen} // Controla la visibilidad del modal
      animationType="slide" // Tipo de animación al mostrar/ocultar
      transparent={true} // Fondo transparente
      onRequestClose={() => onClose(false)} // Maneja el cierre en Android (botón back)
    >
      {/* Overlay oscuro detrás del modal */}
      <View style={styles.modalOverlay}>
        {/* Contenido principal del modal */}
        <View style={styles.modalContent}>
          {/* Header del modal con título y botón de cerrar */}
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Menú</Text>
            {/* Botón para cerrar el modal */}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => onClose(false)}
            >
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>
          
          {/* Lista scrollable de items del menú */}
          <ScrollView style={styles.menuList}>
            {menu.map((item) => (
              // Cada item del menú es un botón táctil
              <TouchableOpacity
                key={item.href} // Key única para React
                style={styles.menuItem}
                onPress={() => {
                  console.log('Navegar a:', item.href); // Log de navegación
                  onClose(false); // Cierra el modal al seleccionar un item
                }}
              >
                {/* Icono del item del menú */}
                <Text style={styles.menuIcon}>{item.icon}</Text>
                {/* Texto del item del menú */}
                <Text style={styles.menuLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

// Componente principal del Header
export const Header: React.FC<HeaderProps> = ({ title = 'Antonella' }) => {
  // Estado para controlar la visibilidad del menú móvil
  const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false);

  return (
    <>
      {/* Barra de estado del dispositivo */}
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Contenedor principal del header */}
      <View style={styles.header}>
        {/* ✅ Sección del logo a la izquierda */}
        <View style={styles.logoSection}>
          <Logo />
        </View>

        {/* Sección del título centrado */}
        <View style={styles.titleSection}>
          <Text style={styles.titleText}>{title}</Text>
        </View>

        {/* Sección de usuario a la derecha (imagen, configuración y menú) */}
        <View style={styles.userSection}>
          {/* Contenedor de la imagen de usuario */}
          <View style={styles.userContainer}>
            <Image
              source={{
                uri: 'https://img.freepik.com/foto-gratis/retrato-feliz-mujer-romantica-tranquila-caucasica-look-casual-pelo-largo-aretes-collar-sobre-fondo-increible-vista-hermosa-montanas-verdes_343596-951.jpg',
              }}
              style={styles.userImage}
            />
          </View>
          
          {/* Botón de configuración */}
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.icon}>⚙️</Text>
          </TouchableOpacity>
          
          {/* Botón para abrir el menú móvil */}
          <TouchableOpacity 
            style={styles.iconButton}
            onPress={() => setShowMenuMobile(true)}
          >
            <Text style={styles.icon}>☰</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Componente del menú móvil (se renderiza condicionalmente) */}
      <MenuMobile isOpen={showMenuMobile} onClose={setShowMenuMobile} />
    </>
  );
};

const styles = StyleSheet.create({
  // ESTILOS DEL HEADER PRINCIPAL
  header: {
    flexDirection: 'row', // Disposición horizontal
    alignItems: 'center', // Centrado vertical
    justifyContent: 'space-between', // Espacio entre secciones
    paddingHorizontal: 16, // Padding lateral
    paddingVertical: 12, // Padding vertical
    backgroundColor: '#fff', // Fondo blanco
    borderBottomWidth: 1, // Línea inferior
    borderBottomColor: '#e5e5e5', // Color gris claro para la línea
  },
  
  // Sección del logo (izquierda)
  logoSection: {
    flex: 1, // Ocupa 1 parte del espacio disponible
    alignItems: 'flex-start', // Alineado a la izquierda
  },
  
  // Sección del título (centro)
  titleSection: {
    flex: 2, // Ocupa 2 partes del espacio (más que las otras secciones)
    alignItems: 'center', // Centrado horizontal
  },
  
  // Texto del título
  titleText: {
    fontSize: 20, // Tamaño de fuente grande
    fontWeight: 'bold', // Negrita
    color: '#000', // Color negro
  },
  
  // Sección de usuario (derecha)
  userSection: {
    flex: 1, // Ocupa 1 parte del espacio
    flexDirection: 'row', // Disposición horizontal
    alignItems: 'center', // Centrado vertical
    justifyContent: 'flex-end', // Alineado a la derecha
  },
  
  // Contenedor del logo (estilos alternativos)
  logoContainer: {
    padding: 8, // Padding interno
  },
  
  // Texto del logo (estilos alternativos)
  logoText: {
    fontSize: 18, // Tamaño de fuente medio
    fontWeight: 'bold', // Negrita
    color: '#333', // Color gris oscuro
  },
  
  // Contenedor de usuario
  userContainer: {
    flexDirection: 'row', // Disposición horizontal
    alignItems: 'center', // Centrado vertical
  },
  
  // Imagen de usuario
  userImage: {
    width: 40, // Ancho fijo
    height: 40, // Alto fijo
    borderRadius: 20, // Radio de borde para hacerla circular
  },
  
  // Botones de iconos (configuración y menú)
  iconButton: {
    width: 40, // Ancho fijo
    height: 40, // Alto fijo
    borderRadius: 20, // Circular
    backgroundColor: '#fff', // Fondo blanco
    justifyContent: 'center', // Centrado vertical del contenido
    alignItems: 'center', // Centrado horizontal del contenido
    marginLeft: 8, // Margen izquierdo entre botones
    shadowColor: '#000', // Color de sombra
    shadowOffset: { width: 0, height: 1 }, // Desplazamiento de sombra
    shadowOpacity: 0.1, // Transparencia de sombra
    shadowRadius: 2, // Radio de difuminado
    elevation: 2, // Elevación para Android
  },
  
  // Iconos dentro de los botones
  icon: {
    fontSize: 16, // Tamaño de fuente pequeño
  },
  
  // ESTILOS DEL MODAL (MENÚ MÓVIL)
  
  // Overlay del modal (fondo oscuro)
  modalOverlay: {
    flex: 1, // Ocupa toda la pantalla
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
    justifyContent: 'flex-end', // Contenido en la parte inferior
  },
  
  // Contenido principal del modal
  modalContent: {
    backgroundColor: '#fff', // Fondo blanco
    borderTopLeftRadius: 20, // Bordes redondeados solo arriba
    borderTopRightRadius: 20,
    maxHeight: '80%', // Altura máxima del 80% de la pantalla
  },
  
  // Header del modal
  modalHeader: {
    flexDirection: 'row', // Disposición horizontal
    justifyContent: 'space-between', // Espacio entre título y botón cerrar
    alignItems: 'center', // Centrado vertical
    padding: 20, // Padding interno
    borderBottomWidth: 1, // Línea inferior
    borderBottomColor: '#e5e5e5', // Color gris claro
  },
  
  // Título del modal
  modalTitle: {
    fontSize: 18, // Tamaño de fuente medio
    fontWeight: 'bold', // Negrita
    color: '#333', // Color gris oscuro
  },
  
  // Botón de cerrar
  closeButton: {
    padding: 4, // Padding pequeño
  },
  
  // Texto del botón cerrar (X)
  closeButtonText: {
    fontSize: 18, // Tamaño de fuente medio
    color: '#666', // Color gris
  },
  
  // Lista de items del menú
  menuList: {
    padding: 20, // Padding interno
  },
  
  // Item individual del menú
  menuItem: {
    flexDirection: 'row', // Disposición horizontal
    alignItems: 'center', // Centrado vertical
    paddingVertical: 16, // Padding vertical
    borderBottomWidth: 1, // Línea inferior entre items
    borderBottomColor: '#f0f0f0', // Color gris muy claro
  },
  
  // Icono del item del menú
  menuIcon: {
    fontSize: 14, // Tamaño de fuente pequeño
    marginRight: 4, // Margen derecho pequeño
  },
  
  // Texto del item del menú
  menuLabel: {
    fontSize: 16, // Tamaño de fuente medio
    color: '#333', // Color gris oscuro
    marginLeft: 12, // Margen izquierdo
  },
});