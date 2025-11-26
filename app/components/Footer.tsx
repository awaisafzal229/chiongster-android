import { Ionicons } from '@expo/vector-icons'; // or other icon family
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const footerSections = [
  {
    title: 'FOR CHIONGSTER',
    items: ['Suggest A Venue', 'About Us', 'Contact Us', 'Terms & Conditions', 'Privacy Policy']
  },
  {
    title: 'DISCOVER',
    items: [
      { label: 'Promotions', filter: 'promotions_only', value: '1' },
      { label: 'Events', filter: 'events_only', value: '1' },
      { label: 'Exclusive Deals', filter: 'exclusive_only', value: '1' },
      { label: 'Nightlife Guide', href: '/blogs?topic=nightlife-guide' }
    ]
  },
  {
    title: 'FOR BUSINESSES',
    items: [
      { label: 'Get More Customers', href: '/list-your-venue' },
      { label: 'Advertise With Us', href: '/advertise-with-us' },
      { label: 'Partnerships & Sponsorships', href: '/partnerships' },
      { label: 'Business Support', href: '/business-support' },
    ]
  },
  {
    title: 'COUNTRIES',
    items: ['Singapore', 'Malaysia', 'Thailand', 'Vietnam']
  }
];

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggle = (title: string) => {
    setOpenSection(prev => (prev === title ? null : title));
  };

  return (
    <View style={styles.container}>
      {footerSections.map((section, index) => (
        <View key={section.title} style={styles.section}>
          {/* Header */}
          <TouchableOpacity onPress={() => toggle(section.title)} style={styles.headerRow}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Ionicons 
              name={openSection === section.title ? 'chevron-down' : 'chevron-forward'} 
              size={20} 
              color="white" 
            />
          </TouchableOpacity>

          {/* Collapsible Content */}
          {openSection === section.title && (
            <View style={styles.itemsContainer}>
              {section.items.map((item: any, i: number) => {
                if (typeof item === 'string') {
                  return (
                    <Text key={i} style={styles.itemText}>
                      {item}
                    </Text>
                  );
                }
                if (item.filter || item.href) {
                  return (
                    <TouchableOpacity key={i}>
                      <Text style={styles.itemText}>{item.label}</Text>
                    </TouchableOpacity>
                  );
                }
                return null;
              })}
            </View>
          )}
        </View>
      ))}

      <Text style={styles.footerNote}>Copyright @ Chiongster.com 2025</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#fff',
    paddingVertical: 10,
  },
  section: {
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  itemsContainer: {
    paddingLeft: 16,
    paddingBottom: 12,
    paddingRight: 12,
  },
  itemText: {
    fontSize: 14,
    color: '#bbb',
    paddingVertical: 6,
  },
  footerNote: {
    textAlign: 'center',
    color: '#777',
    fontSize: 12,
    paddingVertical: 16,
  },
});