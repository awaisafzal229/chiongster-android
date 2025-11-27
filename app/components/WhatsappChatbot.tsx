// WhatsappChatbot.tsx
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function WhatsappChatbot() {
  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons 
        name="logo-whatsapp" 
        size={24} 
        color="#fff" 
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,           // fixed width
    height: 60,          // same as width
    backgroundColor: '#D7146B', // WhatsApp green
    borderRadius: 30,    // half of width/height for perfect circle
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});
