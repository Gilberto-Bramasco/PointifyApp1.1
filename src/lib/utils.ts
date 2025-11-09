// types.ts - Definimos tipos para estilos en React Native
export type StyleValue = 
  | object 
  | object[] 
  | null 
  | undefined 
  | boolean;

export interface StyleMergeInput {
  [key: string]: any;
}

// cn.ts - Función utilitaria para combinar estilos en React Native
/**
 * Combina y fusiona múltiples objetos de estilo de React Native
 * Reemplaza la funcionalidad de clsx + tailwind-merge para React Native
 * 
 * @param inputs - Array de objetos de estilo de React Native
 * @returns Objeto de estilo combinado y fusionado
 */
export function cn(...inputs: (StyleValue | StyleMergeInput)[]): object {
  const validStyles = inputs.filter(style => 
    style !== null && 
    style !== undefined && 
    style !== false
  ) as object[];

  if (validStyles.length === 0) {
    return {};
  }

  if (validStyles.length === 1) {
    return validStyles[0];
  }

  // Fusionar los estilos (último estilo tiene prioridad)
  return validStyles.reduce((merged, current) => {
    return { ...merged, ...current };
  }, {});
}