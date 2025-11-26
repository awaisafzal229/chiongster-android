import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import CategorySection from '../components/CategorySection';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HomeBanner from '../components/HomeBanner';
import InterestSection from '../components/InterestSection';
import LatestPosts from '../components/LatestPosts';
import TopPicks from '../components/TopPicks';
import VenueSection from '../components/VenueSection';
import WhatsappChatbot from '../components/WhatsappChatbot';

export default function HomeScreen() {
  const mockBanners = [
  { id: 1, image: require('../../assets/images/banner.jpg'), active: true },
];
  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
       <HomeBanner banners={mockBanners} />
        <View style={styles.content}>
          <Hero />
          <CategorySection />
          <VenueSection />
          <TopPicks />
          <InterestSection />
          <LatestPosts />
          <Footer />
        </View>
      </ScrollView>
      <WhatsappChatbot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080608',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 0,
    gap: 40,
  },
});