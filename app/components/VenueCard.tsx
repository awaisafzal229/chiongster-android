import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Fonts = {
  regular: 'Futura-Book',
  medium: 'Futura-Medium', 
  bold: 'Futura-Bold',
};

interface Venue {
  name: string;
  type: string;
  price: string;
  minSpend: string;
  location: string;
  hours: string;
  rating: number;
  reviews: number;
  tags: string[];
  hasPromotion: boolean;
  hasEvent: boolean;
}

interface VenueCardProps {
  venue: Venue;
}

export default function VenueCard({ venue }: VenueCardProps) {
  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <View style={styles.container}>
      {/* Venue Image */}
      <View style={styles.imageContainer}>
        <Image 
          source={require('../../assets/images/featured-lol.jpg')} 
          style={styles.image}
        />
        <View style={styles.imageOverlay} />
        
        {/* Distance Badge */}
        <View style={styles.distanceBadge}>
          <Text style={styles.distanceText}>0.2KM</Text> <Image source={require('../../assets/images/distance.png')} style={{ width: 12, height: 12 }} />

        </View>

        {/* New Badge */}
        {/* New Badge / Drink Dollars */}
<LinearGradient
  colors={['#512e8d', '#7254c4']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
  style={styles.newBadge}
>
  <Text style={styles.newBadgeText}>8%</Text>

  <Image
    source={require('../../assets/images/DD-coin.png')}
    style={styles.newBadgeIcon}
  />
</LinearGradient>

      </View>

      {/* Venue Details */}
      <View style={styles.detailsContainer}>
        {/* Header with name and actions */}
        <View style={styles.header}>
          <Text style={styles.venueName}>{venue.name}</Text>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}><Ionicons 
                              name={'heart-outline'} 
                              size={20} 
                              color="#B3B3B3" 
                            /></Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionButton, { marginLeft: 4 }]}>
              <Text style={styles.actionIcon}><Ionicons 
                              name={'share-social'} 
                              size={18} 
                              color="#B3B3B3" 
                            /></Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Venue Type */}
        <View style={[styles.typeContainer, { marginTop: 6 }]}>
          <Text style={styles.typeText}>{venue.type}</Text>
        </View>

        {/* Price and Min Spend */}
        <View style={[styles.priceContainer, { marginTop: 6 }]}>
          <Text style={styles.priceLabel}>Price: <Text style={styles.priceValue}>{venue.price}</Text></Text>
          <Text style={styles.priceLabel}>Drinks Min Spend: <Text style={styles.priceValue}>{venue.minSpend}</Text></Text>
        </View>

        {/* Location and Hours */}
       <View style={[styles.infoContainer, { marginTop: 6 }]}>
  <View style={styles.infoItem}>
    <Image source={require('../../assets/images/location.png')} style={styles.infoIcon} />
    <Text style={styles.infoText}>{venue.location}</Text>
  </View>

  <View style={styles.infoItem}>
    <Image source={require('../../assets/images/clock.png')} style={styles.infoIcon} />
    <Text style={styles.infoText}>{venue.hours}</Text>
  </View>
</View>


        {/* Rating */}
        <View style={[styles.ratingContainer, { marginTop: 6 }]}>
          <Text style={styles.stars}>{renderStars(venue.rating)}</Text>
          <Text style={styles.reviews}>{venue.rating} ({venue.reviews} reviews)</Text>
        </View>

        {/* Tags */}
        <View style={[styles.tagsContainer, { marginTop: 6 }]}>
          {venue.tags.map((tag, index) => (
            <View key={index} style={[styles.tag, index !== 0 && { marginLeft: 4 }]}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>

        {/* Book Button */}
        <LinearGradient
          colors={['#4D2CAB', '#D7146B']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.bookButton, { marginTop: 10 }]}
        >
          <TouchableOpacity style={styles.bookButtonInner}>
            <Text style={styles.bookButtonText}>Make A Booking</Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* Promotion and Event Links */}
        <View style={[styles.linksContainer, { marginTop: 6 }]}>
          {venue.hasPromotion && (
            <TouchableOpacity style={styles.link}>
              <Text style={styles.linkText}>see promotion</Text>
            </TouchableOpacity>
          )}
          {venue.hasEvent && (
            <TouchableOpacity style={[styles.link, { marginLeft: 12 }]}>
              <Text style={styles.linkText}>see event</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 333,
    marginRight: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    height: 159,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius:6,
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  distanceBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 19,
    flexDirection: 'row',
    alignItems: 'center',
  },
  distanceText: {
    color: '#444444',
    fontSize: 10,
    fontWeight: '500',
    paddingRight: 4,
     fontFamily: Fonts.regular,
  },
 newBadge: {
  position: 'absolute',
  bottom: 12,
  right: 12,
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 12,   // px-4
  paddingVertical: 4,      // py-1
  borderRadius: 999,       // rounded-full
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 4,
},

newBadgeText: {
  color: 'white',
  fontSize: 22,            // text-xl
  fontWeight: '800',       // font-extrabold
  marginRight: 4,          // gap between text & icon
   fontFamily: Fonts.regular, // optional if installed
  lineHeight: 28,
},

newBadgeIcon: {
  width: 24,   // ~ w-6
  height: 24,  // ~ h-6
  resizeMode: 'contain',
},
  detailsContainer: {
    padding: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  venueName: {
    flex: 1,
    color: 'white',
    fontSize: 17,
    fontWeight: '700',
    textTransform: 'capitalize',
     fontFamily: Fonts.bold,
  },
  actionButtons: {
    flexDirection: 'row',
  },
  actionButton: {
    padding: 4,
  },
  actionIcon: {
    color: '#999',
    fontSize: 16,
  },
  typeContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#321623',
    paddingHorizontal: 8,
    borderRadius: 19,
  },
  typeText: {
    color: '#B3B3B3',
    fontSize: 10,
    fontWeight: '500',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  priceLabel: {
    color: '#DEA41B',
    fontSize: 10,
    marginRight: 14,
    fontFamily: Fonts.bold,
  },
  priceValue: {
    color: '#DEA41B',
    fontSize: 15,
    fontWeight: '500',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  infoItem: {
  flexDirection: 'row',
  alignItems: 'center',
  marginRight: 14,
},

infoIcon: {
  width: 12,
  height: 12,
  marginRight: 4,   // exactly like 'gap-1'
},
  infoText: {
    color: '#B3B3B3',
    fontSize: 13,
    fontFamily: Fonts.regular,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stars: {
    color: '#DEA41B',
    fontSize: 12,
    fontFamily: Fonts.regular,
  },
  reviews: {
    color: '#B3B3B3',
    fontSize: 13,
    marginLeft: 6,
     fontFamily: Fonts.regular,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#321623',
    paddingHorizontal: 8,
    borderRadius: 19,
    paddingVertical: 2,
  },
  tagText: {
    color: '#B3B3B3',
    fontSize: 10,
    fontWeight: '500',
     fontFamily: Fonts.regular,
  },
  bookButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignItems: 'center',
    shadowColor: '#D7146B',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 30,
    elevation: 5,
  },
  bookButtonInner: {
    alignItems: 'center',
  },
  bookButtonText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '500',
    textTransform: 'uppercase',
     fontFamily: Fonts.bold,
  },
  linksContainer: {
    flexDirection: 'row',
    marginTop: 6,
  },
  link: {},
  linkText: {
    color: '#D7146B',
    fontSize: 13,
    fontWeight: '500',
    textDecorationLine: 'underline',
    textTransform: 'uppercase',
     fontFamily: Fonts.regular,
  },
});
