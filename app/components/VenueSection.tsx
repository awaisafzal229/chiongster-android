import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function VenueSection() {
  const venues = [
    'Pub', 'Lounge & Bar', 'KTV Nightclub', 'Boys Club',
    'Flower Joint', 'Thai Disco', 'Family KTV'
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>Find Your Venue</Text>
        <Text style={styles.title}>Pick Your Place</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {venues.map((venue, index) => (
         <TouchableOpacity key={index} style={styles.venueItem}>
  <View style={styles.imageWrapper}>
    <Image
      source={require('../../assets/images/category-pub.png')}
      style={styles.image}
    />
    <Text style={styles.venueName}>{venue}</Text>
  </View>
</TouchableOpacity>

        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
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
  },
  title: {
   fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    textTransform: 'uppercase',
  },
  scrollView: {
    paddingVertical: 10,
  },
 imageWrapper: {
  width: 142,
  height: 142,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
},

image: {
  width: '100%',
  height: '100%',
  borderRadius: 0,
},

venueName: {
  position: 'absolute',
  fontSize: 16,
  fontWeight: '600',
  color: '#fff',
  textAlign: 'center',
},
venueItem: {
  marginRight: 14,
},
});
