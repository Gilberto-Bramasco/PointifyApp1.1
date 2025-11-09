// App.tsx - Versión optimizada
import React, { useState } from 'react';
import { Header } from './src/components/widgets/header';
import { Categories } from './src/components/widgets/categories';
import { Cart } from './src/components/widgets/cart';
import { CardProduct } from './src/components/widgets/card-product'; // ✅ Usar CardProduct

import {
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { categories, products } from './src/assets/data';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <Header title="Antonella" />
      <Categories 
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      
      {/* ✅ Usar CardProduct en lugar de ProductsList */}
      <ScrollView style={styles.productsContainer}>
        {filteredProducts.map((product, index) => (
          <View key={product.id} style={styles.productWrapper}>
            <CardProduct product={product} />
          </View>
        ))}
      </ScrollView>
      
      <Cart />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productsContainer: {
    flex: 1,
    paddingHorizontal: 12,
  },
  productWrapper: {
    marginBottom: 12,
  },
});