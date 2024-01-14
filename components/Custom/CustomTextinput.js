import React from 'react';
import {View, Button, Text, TextInput} from 'react-native'

CustomTextInput = (props) => {
  return(
     <TextInput
          style={{ borderWidth: 1, borderRadius: 5, paddingVertical: 10, paddingHorizontal: 20, marginTop: 15, color: '#AAAAAA' }}
          placeholder={props.caption}
        />
  )
}

export default CustomTextInput