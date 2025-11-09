import { Category, Menu, Product, ProductCart } from "../types";

// =============================================
// DATOS DE NAVEGACIÓN - MENÚ PRINCIPAL
// =============================================

/**
 * Array que define la estructura de navegación principal de la aplicación
 * Cada objeto representa un item del menú con su etiqueta, icono y ruta
 */
export const menu: Menu[] = [
  {
    label: "Inicio",           // Texto visible del menú
    icon: "🏠",               // Emoji que representa visualmente la sección
    href: "/",                 // Ruta de navegación
  },
  {
    label: "Menu", 
    icon: "📋",               // Emoji de lista/checklist
    href: "/menu",
  },
  {
    label: "Ordenes",
    icon: "🧾",               // Emoji de recibo/factura  
    href: "/orders",
  },
  {
    label: "Historial",
    icon: "⏰",               // Emoji de reloj/tiempo
    href: "/history",
  },
  {
    label: "Facturas",
    icon: "📄",               // Emoji de documento
    href: "/bills",
  },
];

// =============================================
// CATEGORÍAS DE PRODUCTOS
// =============================================

/**
 * Array que define las categorías disponibles para organizar los productos
 * Cada categoría tiene un ID único y nombre descriptivo
 */
export const categories: Category[] = [
  {
    id: "all",                 // ID especial para filtrar todos los productos
    name: "Todas",             // Categoría general que incluye todos los productos
  },
  {
    id: "hamburguesas",        // ID único para la categoría
    name: "Hamburguesas",      // Nombre legible para mostrar
  },
  {
    id: "pizzas",
    name: "Pizzas",            // Nombre corregido para mantener consistencia
  },
  {
    id: "tacos",
    name: "Tacos",
  },
  {
    id: "pollos",
    name: "Pollos",
  },
  {
    id: "ensaladas",
    name: "Ensaladas",         // Ortografía corregida de "Enzaldas" a "Ensaladas"
  },
  {
    id: "pastas",
    name: "Pastas",
  },
  {
    id: "lonches",
    name: "Lonches",           // Típica categoría mexicana de sándwiches
  },
  {
    id: "refrescos",
    name: "Refrescos",         // Bebidas
  },
  {
    id: "combos",
    name: "Combos",            // Paquetes especiales que incluyen varios productos
  },
];

// =============================================
// CATÁLOGO DE PRODUCTOS
// =============================================

/**
 * Array que contiene todos los productos disponibles en el restaurante
 * Cada producto tiene información completa para mostrar en la interfaz
 */
export const products: Product[] = [
  {
    id: "1",                   // Identificador único del producto
    name: "Bacon burger",      // Nombre comercial del producto
    category: "hamburguesas",  // ID de categoría para filtrado y agrupamiento
    image: "https://img.freepik.com/foto-gratis/foto-deliciosa-hamburguesa-aislado-sobre-fondo-blanco_125540-3378.jpg", // URL de imagen del producto
    discount: 15,              // Porcentaje de descuento (0 = sin descuento)
    stock: 100,                // Cantidad disponible en inventario
    price: 99.99,              // Precio base del producto
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eius pariatur facere illo quas soluta voluptatibus nihil mollitia ipsam", // Descripción detallada
  },
  {
    id: "2",
    name: "Tacos a la mexicana",
    category: "tacos",
    image: "https://img.freepik.com/foto-gratis/delicioso-taco-estudio_23-2150799519.jpg",
    discount: 5,               // Descuento pequeño para promoción
    stock: 100,
    price: 89.99,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eius pariatur facere illo quas soluta voluptatibus nihil mollitia ipsam",
  },
  {
    id: "3",
    name: "Pollito asado",
    category: "pollos",
    image: "https://img.freepik.com/foto-gratis/pollo-frito-aislado_74190-3392.jpg",
    discount: 10,              // 10% de descuento
    stock: 100,
    price: 49.99,              // Precio más económico
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eius pariatur facere illo quas soluta voluptatibus nihil mollitia ipsam",
  },
  {
    id: "4",
    name: "Lonche del chavo",  // Nombre con referencia cultural mexicana
    category: "lonches",
    image: "https://img.freepik.com/foto-gratis/dos-deliciosos-sandwiches_144627-3689.jpg",
    discount: 0,               // Sin descuento
    stock: 100,
    price: 69.99,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eius pariatur facere illo quas soluta voluptatibus nihil mollitia ipsam",
  },
  {
    id: "5",
    name: "Pizza especial",
    category: "pizzas",
    image: "https://img.freepik.com/foto-gratis/pizza-mariscos_1203-8950.jpg",
    discount: 0,
    stock: 0,                  // Producto agotado - debería mostrarse como no disponible
    price: 109.99,             // Producto premium con precio más alto
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eius pariatur facere illo quas soluta voluptatibus nihil mollitia ipsam",
  },
  {
    id: "6",
    name: "Refresco 600ml",
    category: "refrescos",
    image: "https://img.freepik.com/fotos-premium/botella-cola-sobre-fondo-blanco_318269-1271.jpg",
    discount: 0,
    stock: 100,
    price: 29.99,              // Producto de menor precio (bebida)
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eius pariatur facere illo quas soluta voluptatibus nihil mollitia ipsam",
  },
  {
    id: "7",
    name: "Ensalada César",
    category: "ensaladas",     // Producto para la categoría de ensaladas
    image: "https://img.freepik.com/foto-gratis/ensalada-cesar-tableta-madera_1150-42588.jpg",
    discount: 8,               // Descuento promocional
    stock: 50,                 // Stock limitado
    price: 75.50,
    description: "Ensalada fresca con pollo, lechuga romana y aderezo césar", // Descripción real en lugar de lorem ipsum
  },
  {
    id: "8",
    name: "Combo Familiar",
    category: "combos",        // Producto para la categoría de combos
    image: "https://img.freepik.com/foto-gratis/vista-superior-comida-rápida-hamburguesa-papas-fritas_140725-4001.jpg",
    discount: 20,              // Mayor descuento por ser combo
    stock: 30,                 // Stock limitado para combos
    price: 199.99,             // Precio más alto pero con mayor descuento
    description: "Combo perfecto para toda la familia con hamburguesas, papas y refrescos", // Descripción comercial atractiva
  },
];

// =============================================
// PRODUCTOS EN EL CARRITO DE COMPRAS
// =============================================

/**
 * Array que simula productos agregados al carrito de compras
 * Contiene información reducida necesaria para el proceso de compra
 */
export const productsCart: ProductCart[] = [
  {
    id: "1",                   // ID que referencia al producto original
    name: "Bacon burger",      // Nombre para mostrar en el carrito
    image: "https://img.freepik.com/foto-gratis/foto-deliciosa-hamburguesa-aislado-sobre-fondo-blanco_125540-3378.jpg", // Imagen miniatura
    price: 99.99,              // Precio unitario
    quantity: 2,               // Cantidad seleccionada por el usuario
  },
  {
    id: "3",
    name: "Pollito asado",
    image: "https://img.freepik.com/foto-gratis/pollo-frito-aislado_74190-3392.jpg",
    price: 49.99,
    quantity: 1,               // Solo una unidad de este producto
  },
  {
    id: "6",
    name: "Refresco 600ml",
    image: "https://img.freepik.com/fotos-premium/botella-cola-sobre-fondo-blanco_318269-1271.jpg",
    price: 29.99,
    quantity: 2,               // Dos unidades de refresco
  },
];

// =============================================
// ESTILOS IMPLÍCITOS Y CONSIDERACIONES DE DISEÑO
// =============================================

/**
 * ESTILOS PARA EL MENÚ DE NAVEGACIÓN:
 * - Los emojis funcionan como iconos visuales rápidos
 * - Diseño probablemente horizontal o vertical con iconos y texto
 * - Estados hover/active para indicar sección actual
 * 
 * ESTILOS PARA CATEGORÍAS:
 * - Filtros interactivos (tabs, chips o botones)
 * - Categoría "Todas" como opción por defecto
 * - Estado activo para categoría seleccionada
 * 
 * ESTILOS PARA PRODUCTOS:
 * - Grid o lista de tarjetas de producto
 * - Badge de descuento con color destacado
 * - Indicador de stock agotado (para stock: 0)
 * - Precio con formato: precio original y con descuento
 * - Imágenes con aspect-ratio consistente
 * 
 * ESTILOS PARA CARRITO:
 * - Lista compacta con imagen, nombre, precio y cantidad
 * - Controladores para modificar cantidad (+/-)
 * - Cálculo de subtotal por producto y total general
 * - Posible indicador visual del número de items en el carrito
 */