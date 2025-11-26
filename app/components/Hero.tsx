import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Hero() {
  return (
    <View style={styles.container}>
      {/* Title aligned to left */}
      <Text style={styles.title}>Discover Drinking Spots Near You</Text>

      {/* Category select button */}
      <TouchableOpacity style={styles.categoryButton}>
        <Text style={styles.categoryText}>All Categories</Text>
        {/* Add dropdown icon here if needed */}
      </TouchableOpacity>

      {/* Primary action button */}
     <LinearGradient
  colors={['#4D2CAB', '#D7146B']} // start to end colors
  start={{ x: 0, y: 0 }}           // gradient start position
  end={{ x: 1, y: 0 }}             // gradient end position (horizontal)
  style={styles.primaryButton}
>
  <Text style={styles.primaryButtonText}>Show Nearby</Text>
</LinearGradient>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 16,
    width: '100%',
    gap: 12, // spacing between elements
  },

  title: {
    fontSize: 15, // smaller than original for left alignment style
    fontWeight: '300',
    color: '#fff', // white text like in your Tailwind version
    textAlign: 'left', // align left
    marginBottom: 12,
  },

  categoryButton: {
    width: '100%',
    paddingVertical: 8,
    backgroundColor: '#1B1B1B', // matches web bg color
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between', // dropdown text left, icon right
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  categoryText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '400',
  },

 primaryButton: {
  width: '100%',
  paddingVertical: 12,
  borderRadius: 4,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 8,
},

  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
