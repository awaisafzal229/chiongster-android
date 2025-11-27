import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Fonts = {
  regular: 'Futura-Book',
  medium: 'Futura-Medium', 
  bold: 'Futura-Bold',
};

export default function InterestSection() {
  const interests = [
    { name: 'Darts', icon: '🎯' },
    { name: 'Pool', icon: '🎱' },
    { name: 'Live Performance', icon: '🎤' },
    { name: 'Live Soccer', icon: '⚽' },
    { name: 'Lorem Ipsum', icon: '⭐' },
    { name: 'Lorem Ipsum', icon: '⭐' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>Tailor Your Experience</Text>
        <Text style={styles.title}>discover by interest</Text>
      </View>

      <View style={styles.grid}>
        {interests.map((interest, index) => (
          <TouchableOpacity key={index} style={styles.interestItem}>
            <Text style={styles.icon}>{interest.icon}</Text>
            <Text style={styles.interestName}>{interest.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingHorizontal: 16,
  },
   header: {
    marginBottom: 12,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#DEA41B',
    marginBottom: 2,
    fontFamily : Fonts.regular,
  },
  title: {
   fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    textTransform: 'uppercase',
    fontFamily : Fonts.regular,
  },

  // GRID LAYOUT
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  // GRID ITEMS
  interestItem: {
    width: '47%',
    backgroundColor: '#ffffff1a',
    paddingVertical: 18,
    marginBottom: 14,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  icon: {
    fontSize: 30,
  },
  interestName: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    fontFamily : Fonts.regular,
  },
});
