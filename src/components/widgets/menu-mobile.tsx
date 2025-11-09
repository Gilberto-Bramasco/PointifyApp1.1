import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Dimensions,
  Pressable
} from 'react-native';
import { menu } from '../../assets/data'; // Importa los datos del menú desde un archivo local

// =============================================
// INTERFACES DE TYPESCRIPT
// =============================================

/**
 * Props para el componente MenuMobile
 * @interface MenuMobileProps
 * @property {boolean} isOpen - Indica si el menú está abierto o cerrado
 * @property {function} onClose - Función callback que se ejecuta al cerrar el menú
 */
interface MenuMobileProps {
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
}

// =============================================
// COMPONENTE PRINCIPAL
// =============================================

/**
 * Componente de menú móvil que se muestra como modal
 * @param {MenuMobileProps} props - Props del componente
 * @returns {JSX.Element} Componente de menú móvil
 */
export const MenuMobile = ({ isOpen, onClose }: MenuMobileProps) => {
  return (
    // =============================================
    // MODAL PRINCIPAL
    // =============================================
    <Modal
      animationType="slide" // Animación de deslizamiento al abrir/cerrar
      transparent={true}    // Fondo transparente para el modal
      visible={isOpen}      // Controla si el modal es visible
      onRequestClose={() => onClose(false)} // Maneja el cierre en Android (botón back)
    >
      
      {/* =============================================
          OVERLAY DE FONDO - CAPA SEMITRANSPARENTE
          ============================================= */}
      <Pressable 
        style={[
          styles.overlay, // Estilo base del overlay
          isOpen ? styles.overlayVisible : styles.overlayHidden // Estilos condicionales según estado
        ]}
        onPress={() => onClose(false)} // Cierra el menú al tocar el overlay
      />
      
      {/* =============================================
          CONTENEDOR PRINCIPAL DEL MENÚ
          ============================================= */}
      <View style={[
        styles.menuContainer, // Estilo base del contenedor
        isOpen ? styles.menuOpen : styles.menuClosed // Posición según estado abierto/cerrado
      ]}>
        
        {/* Contenedor del contenido del menú */}
        <View style={styles.menuContent}>
          
          {/* Lista de items del menú */}
          <View style={styles.menuList}>
            
            {/* Mapeo de los items del menú importados */}
            {menu.map((menuItem) => (
              <View key={menuItem.href} style={styles.menuItem}>
                
                {/* Botón táctil para cada item del menú */}
                <TouchableOpacity
                  style={[
                    styles.menuButton, // Estilo base del botón
                    // Aplica estilo diferente si es el item activo (href === "/menu")
                    menuItem.href === "/menu" && styles.activeMenuButton
                  ]}
                  onPress={() => {
                    // Lógica de navegación - aquí deberías implementar tu navegador
                    console.log(`Navegar a: ${menuItem.href}`);
                    onClose(false); // Cierra el menú después de la selección
                  }}
                >
                  
                  {/* Icono del item del menú */}
                  <Text style={styles.icon}>
                    {/* Placeholder para icono - usar librería como react-native-vector-icons */}
                    {menuItem.icon || '•'}
                  </Text>
                  
                  {/* Texto del item del menú */}
                  <Text style={[
                    styles.menuText, // Estilo base del texto
                    menuItem.href === "/menu" && styles.activeMenuText // Texto activo
                  ]}>
                    {menuItem.label}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

// =============================================
// OBTENCIÓN DE DIMENSIONES DE PANTALLA
// =============================================
const { width, height } = Dimensions.get('window');

// =============================================
// HOJA DE ESTILOS
// =============================================
const styles = StyleSheet.create({
  // =============================================
  // CONTENEDOR PRINCIPAL DEL MENÚ
  // =============================================
  menuContainer: {
    position: 'absolute', // Posicionamiento absoluto
    right: 0,             // Alineado a la derecha
    width: 288,           // Ancho fijo equivalente a w-72 en Tailwind (72 * 4 = 288)
    height: '100%',       // Altura completa de la pantalla
    backgroundColor: '#ffffff', // Color de fondo blanco
    zIndex: 50,           // Nivel de apilamiento alto
  },
  
  // Estado abierto del menú - visible en pantalla
  menuOpen: {
    top: 0, // Posicionado en la parte superior
  },
  
  // Estado cerrado del menú - fuera de pantalla
  menuClosed: {
    top: -height, // Mueve el menú completamente arriba de la pantalla
  },
  
  // =============================================
  // CONTENIDO DEL MENÚ
  // =============================================
  menuContent: {
    flex: 1, // Ocupa todo el espacio disponible
    alignItems: 'center',      // Centrado horizontal
    justifyContent: 'center',  // Centrado vertical
  },
  
  // =============================================
  // LISTA DE MENÚ
  // =============================================
  menuList: {
    flexDirection: 'column', // Disposición vertical
    gap: 16, // Espacio entre items equivalente a gap-y-4 en Tailwind
  },
  
  // =============================================
  // ITEMS INDIVIDUALES DEL MENÚ
  // =============================================
  menuItem: {
    marginBottom: 4, // Espacio inferior entre items
  },
  
  // =============================================
  // BOTONES DEL MENÚ
  // =============================================
  menuButton: {
    flexDirection: 'row',   // Disposición horizontal
    alignItems: 'center',   // Centrado vertical de elementos
    paddingVertical: 12,    // Relleno vertical equivalente a py-3
    paddingHorizontal: 24,  // Relleno horizontal equivalente a px-6
    borderRadius: 25,       // Bordes completamente redondeados
  },
  
  // =============================================
  // BOTÓN ACTIVO (ESTADO SELECCIONADO)
  // =============================================
  activeMenuButton: {
    backgroundColor: '#3b82f6', // Color azul primario
  },
  
  // =============================================
  // TEXTO DEL MENÚ
  // =============================================
  menuText: {
    fontSize: 24,      // Tamaño grande de texto equivalente a text-2xl
    color: '#000000',  // Color negro por defecto
    marginLeft: 8,     // Espacio a la izquierda equivalente a gap-x-2
  },
  
  // =============================================
  // TEXTO ACTIVO (ESTADO SELECCIONADO)
  // =============================================
  activeMenuText: {
    fontWeight: '500', // Grosor de fuente medio
    color: '#ffffff',  // Color blanco para contraste sobre fondo azul
  },
  
  // =============================================
  // ICONOS
  // =============================================
  icon: {
    fontSize: 20,    // Tamaño del icono
    width: 24,       // Ancho fijo para mantener alineación
    textAlign: 'center', // Centrado del icono
  },
  
  // =============================================
  // OVERLAY DE FONDO
  // =============================================
  overlay: {
    position: 'absolute', // Posicionamiento absoluto
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Fondo negro semitransparente
    zIndex: 40, // Nivel de apilamiento menor que el menú
  },
  
  // Overlay visible cuando el menú está abierto
  overlayVisible: {
    width: '100%',  // Ancho completo
    height: '100%', // Alto completo
    right: 0,       // Alineado a la derecha
    top: 0,         // Alineado arriba
  },
  
  // Overlay oculto cuando el menú está cerrado
  overlayHidden: {
    width: 0,   // Sin ancho
    height: 0,  // Sin alto
    left: 0,    // Posicionado a la izquierda
    bottom: 0,  // Posicionado abajo
  },
});