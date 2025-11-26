import { Ionicons } from '@expo/vector-icons'; // or other icon family
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function LatestPosts() {
  const posts = [
    {
      date: '6 Aug 2024',
      title: 'Warm Places',
      categories: ['Journey', 'Travel'],
      description: 'Lorem ipsum dolor sit amet, cibo mundi ea duo...',
      image: require('../../assets/images/latest-post.png')
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>Be updated</Text>
        <Text style={styles.title}>latest posts</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {posts.map((post, index) => (
          <View key={index} style={styles.postCard}>
            <Image source={post.image} style={styles.image} />

            <View style={styles.content}>
              <Text style={styles.date}>{post.date}</Text>
              <Text style={styles.postTitle}>{post.title}</Text>

              <View style={styles.categories}>
                {post.categories.map((category, catIndex) => (
                  <View key={catIndex} style={styles.categoryTag}>
                    <Text style={styles.categoryText}>{category}</Text>
                  </View>
                ))}
              </View>

              <Text style={styles.description}>{post.description}</Text>

              <TouchableOpacity style={styles.readMore}>
                <Text style={styles.readMoreText}>read details</Text><Ionicons 
                              name={'chevron-forward'} 
                              size={12} 
                              color="#B3B3B3" 
                            />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
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

  // Card
  postCard: {
    width: 333,
    marginRight: 16,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 159,
    backgroundColor: '#ccc',
    borderRadius: 12,
  },
  content: {
    padding: 12,
  },

  // Text styles
  date: {
    fontSize: 10,
    color: '#B3B3B3',
  },
  postTitle: {
    marginTop: 4,
    fontSize: 17,
    fontWeight: '700',
    color: '#fff',
  },

  categories: {
    flexDirection: 'row',
    marginTop: 6,
  },
  categoryTag: {
    backgroundColor: '#321623',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    marginRight: 8,
  },
  categoryText: {
    fontSize: 10,
    color: '#B3B3B3',
  },

  description: {
    marginTop: 8,
    fontSize: 13,
    color: '#B3B3B3',
    lineHeight: 18,
  },

  readMore: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  readMoreText: {
    fontSize: 13,
    color: '#D7146B',
    fontWeight: '600',
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
  },
});
