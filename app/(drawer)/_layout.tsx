// app/(drawer)/_layout.tsx
import { Ionicons } from '@expo/vector-icons'; // or other icon family
import { useRouter } from "expo-router";
import { Drawer } from "expo-router/drawer";

import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const Fonts = {
  regular: 'Futura-Book',
  medium: 'Futura-Medium', 
  bold: 'Futura-Bold',
};

export default function DrawerLayout() {
  const router = useRouter();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [venueCategories, setVenueCategories] = useState<{ id: number; name: string; slug?: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null); // You'll need to implement your auth logic

  // Mock user data - replace with your actual auth
  useEffect(() => {
    // Simulate user data
    setUser({
      name: "Name Here",
      avatar_icon_url: null
    });
  }, []);

  // Mock venue categories - replace with your actual API call
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        // Replace with your actual API call
        // const response = await fetch(`${process.env.EXPO_PUBLIC_API_HOST}/api/venue-categories/names/`);
        // const data = await response.json();
        
        // Mock data for now
        const mockData = [
          { id: 1, name: "Bars & Lounges", slug: "bars-lounges" },
          { id: 2, name: "Clubs", slug: "clubs" },
          { id: 3, name: "Restaurants", slug: "restaurants" },
          { id: 4, name: "Rooftops", slug: "rooftops" },
        ];
        setVenueCategories(mockData);
      } catch (error) {
        console.error('Error fetching venue categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const menuItems = [
    { 
      icon: require("../../assets/images/menu-bars.png"), 
      label: "Home Page", 
      highlight: true,
      slug: "/"
    },
    {
      icon: require("../../assets/images/1.png"), 
      label: "Choose Your Vibes",
      hasDropdown: true,
      subItems: [
        { label: "Happy Hour", slug: "/happy-hour" },
        { label: "Vibes & Activities", slug: "/activities" },
        { label: "Exclusive For Men", slug: "/exclusive-for-men" },
        { label: "Ladies Night", slug: "/ladies-night" },
        { label: "Classy Chill", slug: "/classy-chill" }
      ]
    },
    {
      icon: require("../../assets/images/2.png"), 
      label: "Pick Your Place",
      hasDropdown: true,
    },
    {
      icon: require("../../assets/images/3.png"), 
      label: "My Bookings",
      hasDropdown: true,
      subItems: [
        { label: "Current Bookings", slug: "/my-bookings/current-booking" },
        { label: "Past Bookings", slug: "/my-bookings/past-booking" }
      ]
    },
    { icon: require("../../assets/images/4.png"),  label: "My Favourites", slug: "/my-favourites" },
    { icon: require("../../assets/images/5.png"),  label: "My Drink Dollars", slug: "/my-drink-dollars" },
    { icon: require("../../assets/images/6.png"),  label: "Insider Benefits", slug: "/insider-benefits" },
    { icon: require("../../assets/images/7.png"),  label: "My Alcohol Balance", slug: "/my-alcohol-balance" },
  ];

  const toggleSubmenu = (label: string) => {
    setExpandedItems(prev =>
      prev.includes(label) ? prev.filter(item => item !== label) : [...prev, label]
    );
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleMenuItemClick = (item: any) => {
    if (item.hasDropdown) {
      toggleSubmenu(item.label);
    } else if (item.slug) {
      handleNavigation(item.slug);
    }
  };

  const handleSubItemClick = (subItem: any) => {
    if (subItem.slug) {
      handleNavigation(subItem.slug);
    }
  };

  const CustomDrawerContent = (props: any) => {
    return (
      <View style={styles.drawerContainer}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileContent}>
            <View style={styles.avatarContainer}>
              {user?.avatar_icon_url ? (
                <Image 
                  source={{ uri: user.avatar_icon_url }}
                  style={styles.avatar}
                />
              ) : (
                <Ionicons 
                                          name={'person'} 
                                          size={12} 
                                          color="#B3B3B3" 
                                        />
              )}
            </View>
            <View style={styles.profileText}>
              <Text style={styles.userName}>
                {user?.name || user?.phone_number || 'Name Here'}
              </Text>
              <TouchableOpacity 
                style={styles.profileButton}
                onPress={() => handleNavigation('/profile')}
              >
                <Text style={styles.profileButtonText}>SEE PROFILE</Text>
                <Ionicons 
                                          name={'chevron-forward'} 
                                          size={16} 
                                          color="#fff" 
                                        />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Menu Items */}
        <ScrollView 
          style={styles.menuContainer}
          showsVerticalScrollIndicator={false}
        >
          {menuItems.map((item) => (
            <View key={item.label}>
              <TouchableOpacity
                style={[
                  styles.menuItem,
                  item.highlight && styles.highlightedMenuItem
                ]}
                onPress={() => handleMenuItemClick(item)}
              >
                <View style={styles.menuItemLeft}>
                  <Text style={[
                    styles.menuIcon,
                    item.highlight && styles.highlightedIcon
                  ]}>
                    <Image source={item.icon} style={styles.infoIcon} />
                  </Text>
                  <Text style={[
                    styles.menuLabel,
                    item.highlight && styles.highlightedLabel
                  ]}>
                    {item.label}
                  </Text>
                </View>
                
                {item.hasDropdown && (
                  <Ionicons 
                                          name={'chevron-forward'} 
                                          size={20} 
                                          color="#6b7280" 
                                          style={{
                                            transform: [{ rotate: expandedItems.includes(item.label) ? '90deg' : '0deg'}]
                                          }}
                                        />
                )}
              </TouchableOpacity>

              {item.hasDropdown && expandedItems.includes(item.label) && (
                <View style={styles.submenuContainer}>
                  {item.label === 'Pick Your Place' && loading ? (
                    <ActivityIndicator color="#fff" style={styles.loading} />
                  ) : (
                    (item.label === 'Pick Your Place' ? venueCategories : item.subItems)?.map((subItem) => (
                      <TouchableOpacity
                        key={subItem.label}
                        style={styles.submenuItem}
                        onPress={() => handleSubItemClick(subItem)}
                      >
                        <Text style={styles.submenuLabel}>{subItem.label}</Text>
                      </TouchableOpacity>
                    ))
                  )}
                </View>
              )}
            </View>
          ))}
        </ScrollView>

        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          {/* Subscribe Banner */}
          <TouchableOpacity 
            style={styles.subscribeBanner}
            onPress={() => handleNavigation('/subscription')}
          >
            <View style={styles.bannerGlowLeft} />
            <View style={styles.bannerGlowRight} />
            
            <View style={styles.bannerIcon}>
              <Image source={require("../../assets/images/vip-icon.png")}/>
            </View>
            
            <View style={styles.bannerText}>
              <Text style={styles.bannerTitle}>Become A Pro Chiongster</Text>
              <Text style={styles.bannerSubtitle}>More Drinks, More Fun!</Text>
            </View>
            
            <Ionicons 
                                          name={'chevron-forward'} 
                                          size={12} 
                                          color="#B3B3B3" 
                                        />
          </TouchableOpacity>

          {/* Log Out Button */}
          <TouchableOpacity style={styles.logoutButton}>
           <Ionicons 
                                          name={'log-out'} 
                                          size={12} 
                                          color="#B3B3B3" 
                                        />
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: '#000' },
        headerTintColor: '#fff',
        headerTitle: () => (
          <Image
            source={require('../../assets/images/logo.jpg')}
            style={{ width: 120, height: 40, resizeMode: 'contain' }}
          />
        ),
        drawerStyle: {
          backgroundColor: '#121212',
          width: 350,
        },
        drawerLabelStyle: {
          color: '#fff',
        },
        drawerActiveTintColor: '#ff6b35',
        drawerInactiveTintColor: '#ccc',
      }}
    >
      <Drawer.Screen name="index" options={{ title: "Home" }} />
      <Drawer.Screen name="explore" options={{ title: "Explore" }} />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#121212',
  },
  profileSection: {
    height: 120,
    backgroundColor: '#2a2929',
    padding: 16,
    justifyContent: 'flex-end',
  },
  profileContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatarContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(22,22,22,0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  profileText: {
    flex: 1,
  },
  userName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: Fonts.bold,
    marginBottom: 4,
  },
  profileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  profileButtonText: {
    color: '#fff',
    fontSize: 14,
    textDecorationLine: 'underline',
    fontFamily: Fonts.regular,
    opacity: 0.9,
  },
  menuContainer: {
    flex: 1,
    paddingVertical: 8,
    paddingLeft: 12,
    paddingRight: 12,
    fontFamily: Fonts.bold,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 4,
    marginBottom: 4,
  },
  highlightedMenuItem: {
    backgroundColor: '#2f2529',
    paddingVertical: 18,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  menuIcon: {
    fontSize: 20,
    color: '#fff',
    width: 24,
  },
  highlightedIcon: {
    color: '#FF1493',
  },
  menuLabel: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '400',
    fontFamily: Fonts.regular,
  },
  highlightedLabel: {
    color: '#FF1493',
  },
  submenuContainer: {
    marginLeft: 56,
    paddingVertical: 4,
  },
  submenuItem: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  submenuLabel: {
    color: '#fff',
    fontSize: 15,
    fontFamily: Fonts.regular,
  },
  loading: {
    padding: 16,
  },
  bottomSection: {
    backgroundColor: '#121212',
    paddingBottom: 16,
  },
  subscribeBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#292929',
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  bannerGlowLeft: {
    position: 'absolute',
    left: -80,
    top: -16,
    width: 154,
    height: 154,
    borderRadius: 77,
    backgroundColor: 'rgba(76, 43, 170, 0.15)',
    blurRadius: 32,
  },
  bannerGlowRight: {
    position: 'absolute',
    right: -40,
    top: -16,
    width: 136,
    height: 136,
    borderRadius: 68,
    backgroundColor: 'rgba(51, 40, 255, 0.1)',
    blurRadius: 32,
  },
  bannerIcon: {
    position: 'absolute',
    left: 8,
  },
  bannerText: {
    flex: 1,
    marginLeft: 72,
  },
  bannerTitle: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '500',
    marginBottom: 4,
    fontFamily: Fonts.regular,
  },
  bannerSubtitle: {
    color: '#fff',
    fontSize: 13,
    opacity: 0.9,
    fontFamily: Fonts.regular,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  logoutText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '400',
    fontFamily: Fonts.regular,
  },
  infoIcon: {
  width: 12,
  height: 12,
  marginRight: 4,   // exactly like 'gap-1'
},
});