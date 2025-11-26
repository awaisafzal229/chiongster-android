import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, PanResponder, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface Banner {
  id: number;
  image: string | number; // string = remote, number = require()
  active: boolean;
}

interface HomeBannerProps {
  banners: Banner[];
}

export default function HomeBanner({ banners = [] }: HomeBannerProps) {
  // Always define hooks first
  const [currentBanner, setCurrentBanner] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const nextBanner = () => setCurrentBanner(prev => (prev + 1) % banners.length);
  const prevBanner = () => setCurrentBanner(prev => (prev - 1 + banners.length) % banners.length);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => Math.abs(gestureState.dx) > 20,
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 50) prevBanner();
        else if (gestureState.dx < -50) nextBanner();
      },
    })
  ).current;

  useEffect(() => {
    if (banners.length > 1) {
      const interval = setInterval(() => {
        nextBanner();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentBanner, banners]);

  // Early return safe AFTER hooks
  if (!banners || banners.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={{ color: '#fff', textAlign: 'center', marginTop: 100 }}>
          No banners available
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Slider */}
      <View style={styles.sliderContainer} {...panResponder.panHandlers}>
        {banners.map((banner, index) => (
         <Animated.Image
  key={banner.id}
  source={banner.image} // directly use require() or { uri: ... }
  style={[styles.image, { opacity: index === currentBanner ? 1 : 0 }]}
  resizeMode="cover"
/>

        ))}
      </View>

      {/* Header */}

      {/* Title */}
      {/* <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>More Drinks! More Fun~</Text>
        <Text style={styles.subtitle}>Discover the best drinking spots and let the fun</Text>
      </View> */}

      {/* Controls */}
      {banners.length > 1 && (
        <View style={styles.controls}>
          <TouchableOpacity onPress={prevBanner} style={styles.controlButton}>
            <Icon name="chevron-left" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={nextBanner} style={styles.controlButton}>
            <Icon name="chevron-right" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 350,
    borderRadius: 0,
    overflow: 'hidden',
    marginBottom: 25,
    backgroundColor: '#000',
  },
  sliderContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  loading: {
    position: 'absolute',
    inset: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  spinner: {
    width: 40,
    height: 40,
    borderWidth: 4,
    borderColor: '#fff',
    borderTopColor: 'transparent',
    borderRadius: 20,
  },
  header: {
    position: 'absolute',
    top: 20,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
  },
  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 167,
    height: 37,
    resizeMode: 'contain',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 60,
    left: 16,
    right: 16,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(255,255,255,0.7)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: '#eee',
  },
  controls: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  controlButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(255,255,255,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
