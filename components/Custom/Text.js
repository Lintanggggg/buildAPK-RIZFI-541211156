import React from 'react';
import { Text } from 'react-native';

const TextCustom = ({ value }) => {
  return (
    <Text
      style={{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#404040',
        marginTop: 10,
      }}>
      {value}
    </Text>
  );
};

export default TextCustom;
