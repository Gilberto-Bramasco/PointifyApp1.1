import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

// Componente Logo que representa un logo compuesto por tres romboides superpuestos
export const Logo = () => {
  return (
    // TouchableOpacity hace que el logo sea interactible (presionable)
    <TouchableOpacity style={styles.touchable}>
      {/* Contenedor principal del logo */}
      <View style={styles.logoContainer}>
        {/* 
          ROMBOIDE 3 (FONDO)
          Este es el romboide más atrás en la superposición
          Se renderiza primero pero aparece detrás por el orden de apilamiento
        */}
        <View style={[styles.rhomboid, styles.rhomboid3]} />
        
        {/* 
          ROMBOIDE 2 (MEDIO)
          Segundo romboide en la superposición
          Se posiciona entre el romboide 1 y 3
        */}
        <View style={[styles.rhomboid, styles.rhomboid2]} />
        
        {/* 
          ROMBOIDE 1 (FRENTE)
          Este es el romboide delantero en la composición
          Se renderiza último pero aparece al frente
        */}
        <View style={[styles.rhomboid, styles.rhomboid1]} />
      </View>
    </TouchableOpacity>
  );
};

// Hoja de estilos para el componente Logo
const styles = StyleSheet.create({
  // Estilo para el contenedor touchable
  // Proporciona espacio de padding alrededor del logo para mejor interacción táctil
  touchable: {
    padding: 8, // Espacio interno de 8 unidades alrededor del logo
  },
  
  // Contenedor principal del logo
  // Organiza los romboides en fila con espaciado controlado
  logoContainer: {
    width: 32,        // Ancho total del contenedor: 32 unidades
    height: 32,       // Alto total del contenedor: 32 unidades
    justifyContent: 'center',  // Centra los romboides verticalmente
    alignItems: 'center',      // Centra los romboides horizontalmente
    flexDirection: 'row',      // Dispone los romboides en fila horizontal
    gap: 2,           // Espacio de 2 unidades entre cada romboide
  },
  
  // Estilo base común para todos los romboides
  // Define la forma geométrica básica y transformación
  rhomboid: {
    width: 8,         // Ancho base de cada romboide: 8 unidades
    height: 16,       // Alto base de cada romboide: 16 unidades
    backgroundColor: '#4CAF50', // Color verde por defecto
    transform: [{ skewX: '-20deg' }], // Transformación CSS que inclina el elemento -20 grados en el eje X creando el efecto romboide
  },
  
  // ROMBOIDE 1 (DELANTERO)
  // Verde oscuro - aparece al frente en la composición visual
  rhomboid1: {
    backgroundColor: '#2E7D32', // Color verde oscuro (#2E7D32)
  },
  
  // ROMBOIDE 2 (INTERMEDIO)
  // Verde medio - aparece en el medio de la superposición
  rhomboid2: {
    backgroundColor: '#4CAF50', // Color verde medio (#4CAF50)
  },
  
  // ROMBOIDE 3 (TRASERO)
  // Verde claro - aparece al fondo en la composición
  rhomboid3: {
    backgroundColor: '#66BB6A', // Color verde claro (#66BB6A)
  },
});