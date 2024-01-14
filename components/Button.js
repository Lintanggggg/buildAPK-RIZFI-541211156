import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { Linking } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const MyButton = ({ url }) => {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
      <View style={styles.contentContainer}>
        <EvilIcons name="external-link" size={24} color="white" />
        <Text style={styles.text}>Open</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#404040',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'flex-end',
    alignItems: 'center', 
  },
  contentContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  text: {
    textTransform: 'capitalize',
    color: 'white',
    marginLeft: 5,
  },
});

export default MyButton;
