import React from 'react';
import { Linking, Image, View } from 'react-native';

const ImageCustom = ({ path }) => {
  return (
    <View>
    <Image
      style={{ width: '100%', height: 210, borderRadius: 5 }}
      source={path}
    ></Image>
    </View>
  );
};

export default ImageCustom;
