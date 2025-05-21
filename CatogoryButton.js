import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CategoryButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'ef399b',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  text: {
    color: '#333',
    fontSize: 14,
  },
});

export default CategoryButton;
