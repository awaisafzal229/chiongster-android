import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import VenueCard from './VenueCard';

export default function TopPicks() {
  const topPicks = [
    {
      name: 'empire KTV',
      type: 'KTV Nightclub',
      price: '$$$$$',
      minSpend: '$78/tower',
      location: 'Orchard',
      hours: '3:00pm - 11:00pm',
      rating: 4,
      reviews: 16,
      tags: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'],
      hasPromotion: true,
      hasEvent: true,
    },
    {
      name: 'Atico Lounge',
      type: 'Lounge & Bar',
      price: '$$$',
      minSpend: '$78/tower',
      location: 'Orchard',
      hours: '4:00pm - 3:00am',
      rating: 4,
      reviews: 0,
      tags: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'],
      hasPromotion: true,
      hasEvent: false,
    },
    {
      name: 'Level 1',
      type: 'Pub',
      price: '$$',
      minSpend: '$58/tower',
      location: 'Prinsep Street',
      hours: '5:00pm - 3:00am',
      rating: 5,
      reviews: 1,
      tags: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'],
      hasPromotion: false,
      hasEvent: true,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>Trending Hotspots Right Now</Text>
        <Text style={styles.title}>Explore Top Picks</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        {topPicks.map((venue, index) => (
          <VenueCard key={index} venue={venue} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingHorizontal: 16,
    paddingTop: 26,   // 👈 add this
     backgroundColor: '#121212',
  },
  header: {
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: '#DEA41B',
    textAlign: 'center',
    fontWeight: '500',
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  scrollView: {
    paddingVertical: 10,
  },
  scrollViewContent: {
    paddingRight: 16,
  },
});