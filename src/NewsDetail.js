import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const NewsDetail = ({ navigation }) => {
  const route = useRoute();
  const newsItem = route.params?.newsItem;

  return (
    <View style={styles.container}>
      {newsItem && (
        <>
          <Text style={styles.title}>{newsItem.title}</Text>
          <Text style={styles.description}>{newsItem.description}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#D0ECEB',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#555555'
  },
  description: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    elevation: 2,
  },
});

export default NewsDetail;
