import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CategorySection() {
  const firstRowCategories = [
    { name: 'Happy hour', image: require('../../assets/images/happy-hour.png') },
    { name: 'Activities', image: require('../../assets/images/activities.png') },
  ];

  const secondRowCategories = [
    { name: 'Exclusive For Men', image: require('../../assets/images/exclusive-for-men.png') },
    { name: 'Ladies Night', image: require('../../assets/images/ladies-night.png') },
    { name: 'Classy Chill', image: require('../../assets/images/classy-chill.png') },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.subtitle}>Find Your Perfect Place</Text>
        <Text style={styles.title}>CHOOSE YOUR VIBE</Text>
      </View>

      {/* First Row: 2 items */}
      <View style={styles.row}>
        {firstRowCategories.map((category, index) => (
          <TouchableOpacity key={index} style={[styles.categoryItem, { width: '48%' }]}>
            <Image source={category.image} style={styles.image} />
            <View style={styles.overlay}><Text style={styles.categoryName}>{category.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Second Row: 3 items */}
      <View style={styles.row}>
        {secondRowCategories.map((category, index) => (
          <TouchableOpacity key={index} style={[styles.categoryItem, { width: '31%' }]}>
            <Image source={category.image} style={styles.image} />
            <View style={styles.overlay}>
  <Text style={styles.categoryName}>{category.name}</Text>
</View>

          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  header: {
    marginBottom: 16,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#DEA41B',
    marginBottom: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    textTransform: 'uppercase',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  categoryItem: {
    alignItems: 'center',
    borderRadius: 0,
    overflow: 'hidden',
    padding: 2,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 0,
    marginBottom: 6,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
  overlay: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  paddingVertical: 4,
  paddingBottom: 8,
  marginBottom: 4,
  alignItems: 'center',
}

});
