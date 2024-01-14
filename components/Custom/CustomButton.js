import React from 'react';
import {View, Button, Text} from 'react-native';

const CustomButton = (props) => {
  return(
    <View style={{ marginTop: 20 }}>
      <Button color='purple' title= {props.title} onPress={props.onPress} />
    </View>
  )
}

export default CustomButton;